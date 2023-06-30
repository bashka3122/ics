<template>
  <div>

    <div class="is-right">
      projects
      <router-link slot="right" to="/student/index" class="button" style="margin-left: 900px; margin-top: 30px;">
        Back
      </router-link>
    </div>
    <section class="section is-main-section">
      <tiles>
        <card-component title="Arday Cusub" icon="account-edit" class="tile is-child">

          <form @submit.prevent="submit" class="grid-container">
            <template v-if="id">
              <b-input type="hidden" :value="id" custom-class="is-static" readonly />
            </template>

            <b-field label="Photo" horizontal>
              <file-picker @file-id-updated="fileIdUpdated" :current-file="form.avatar_filename" required />
            </b-field>




            <b-field label="Name">
              <b-input type="text" v-model="form.name" placeholder="Magaca Ardayga oo 3dexan" required>
              </b-input>
            </b-field>




            <b-field label="Hooyo">
              <b-input type="text" v-model="form.mname" placeholder="Magaca Hooyo oo 3dexan" required>
              </b-input>
            </b-field>
             <b-field label="Masuulka">
                <b-input type="text" v-model="form.responsible" placeholder="Qofka Masuulka ka a" required>
                </b-input>
              </b-field>
               <b-field label="Tel">
                <b-input type="number" v-model="form.tell" placeholder="Lambarka masuulka" pattern="[252][0-9]{9}" required>
                </b-input>
              </b-field>
               <b-field label="POB">
                <b-input type="text" v-model="form.POB" placeholder="goobta Dhalashada" required>
                </b-input>
              </b-field>
    <b-field label="DOB->waqtiga dhalashada">
                <b-input type="date" v-model="form.DOB" placeholder="Xiliga uu dhashay" required>
                </b-input>
              </b-field>
            <b-field label="Gender" >
              <b-select v-model="form.gender">
                <option>Male</option>
                <option>Female</option>
              </b-select>

            </b-field>

   <b-field label="Heerka" >
                <b-select v-model="form.level">
                  <option>Mustawaha 1aad</option>
                   <option>Mustawaha 2aad</option>
                    <option>Mustawaha 3aad</option>
                     <option>Mustawaha 4aad</option>
                </b-select>

              </b-field>


            <b-field label="Xaafada">
              <b-input type="text" v-model="form.village" placeholder="Village" required>
              </b-input>
            </b-field>




            <input type="hidden" v-model="form.school" />
   <input type="hidden" v-model="form.sid" />






            <b-field label="Waqtiga uu kusoo biiray machadka">
              <b-input type="date" v-model="form.date" placeholder="Date" required>
              </b-input>
            </b-field>

            <hr>
            <b-field horizontal>
              <b-button type="is-primary" :loading="isLoading" native-type="submit">Save</b-button>
            </b-field>
          </form>
        </card-component>
        <card-component v-if="isProfileExists" title="Teacher Documentation" icon="bi bi-file-earmark-richtext"
          class="tile is-child">







        </card-component>
      </tiles>
    </section>
  </div>
</template>
<script>
import clone from 'lodash/clone'
import { mapState } from 'vuex'
import Tiles from '@/components/Tiles'
import CardComponent from '@/components/CardComponent'
import FilePicker from '@/components/FilePicker'
import UserAvatar from '@/components/UserAvatar'
import ModalBox from '@/components/ModalBox'
import axios from 'axios'
export default {
  name: 'newteacher',
  components: { CardComponent, Tiles, FilePicker, UserAvatar, ModalBox },
  props: {
    id: {
      default: null
    }
  },
  data() {
    return {
      selected: "",
      selectedSchool: "",

      isLoading: false,
      item: null,

      project: null,
      trashObject: null,
      isModalActive: false,
      form: {

      },
      sLIST: null,

    }
  },
  computed: {
    ...mapState([
      'userName',
      'type'

    ]),
    isProfileExists() {
      return !!this.item
    },
    trashSubject() {
      if (this.trashObject) {
        return this.trashObject.name
      }



      return null
    },

  },
  created() {
    this.form.school = this.userName
    this.getStudent()
    this.getData()

    this.getOptions()
    this.getFile()

  },
  methods: {
    getStudent() {
      axios.get("/student").then(r => {
        this.sLIST = r.data.data.filter(x => x.school == this.userName)
      })
    },



    fileIdUpdated(fileId) {
      this.form.file_id = fileId
      this.form.avatar_filename = null
    },
    getData() {
      if (this.id) {
        axios
          .get(`/student/${this.id}`)
          .then(r => {
            this.form = r.data.data
            this.item = clone(r.data.data)

          })
          .catch(e => {
            this.item = null

            this.$buefy.toast.open({
              message: `Error: ${e.message}`,
              type: 'is-danger',
              queue: false
            })
          })
      }
    },


    submit() {
      this.isLoading = true
      let method = 'post'
      let url = '/student/Store'

      if (this.id) {
        method = 'patch'
        url = `/student/${this.id}`
      }

      axios({
        method,
        url,
        data: this.form
      }).then(r => {
        this.isLoading = false

        if (!this.id && r.data.data.id) {
          this.$router.push({ name: 'student.edit', params: { id: r.data.data.id } })

          this.$buefy.snackbar.open({
            message: 'student Data Created',
            queue: false
          })
        } else {
          this.item = r.data.data

          this.$buefy.snackbar.open({
            message: 'Sucessfully Updated',
            queue: false
          })
        }
      }).catch(e => {
        this.isLoading = false
        this.errors = e.message;
        this.$buefy.toast.open({
          message: `Error: ${e.message}`,
          type: 'is-danger',
          queue: false
        })
      })
    }
  },
  watch: {

    "form.name"(newValue) {
      if (this.id) {

      }
      else {
         let Tids = this.sLIST[0]?.sid
        let x = + (Number(Tids) + 1);

        if (x > 0) {
          this.form.sid = "000" + x
        }
        else {
          this.form.sid = "000" + 1
        }
      }

},
    userName(newValue) {
      this.form.school = newValue

    },
    id(newValue) {

      this.item = null

      if (newValue) {
        this.getData()
      }
    }
  }
}
</script>

