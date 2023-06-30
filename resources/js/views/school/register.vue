<template>
    <div>


            Schools
            <router-link slot="right" to="/school/index" class="button" style="margin-left: 900px; margin-top: 20px;">
                Back
            </router-link>

        <section class="section is-main-section">

            <tiles>
                <card-component title="New School" icon="account-edit" class="tile is-child">

                    <form @submit.prevent="submit">
                        <template v-if="id">
                            <b-input type="hidden" :value="id" custom-class="is-static" readonly />
                        </template>

                        <b-field label="School Logo" horizontal>
                            <file-picker @file-id-updated="fileIdUpdated" :current-file="form.avatar_filename" />
                        </b-field>

                        <b-field label="Name">
                            <b-input type="taxt" v-model="form.name" placeholder="School name" required>
                            </b-input>
                        </b-field>
                        <b-field label="Gobolka" >
                            <b-select v-model="form.region">
                                <option>Galgaduud</option>
                                <option>Mudug</option>
                            </b-select>

                        </b-field>
                        <b-field label="Degmada" >
                            <b-select v-model="form.district">
                                <option v-for="degmo of degmada" :key="degmo">
                                  {{ degmo.label }}
                                </option>

                            </b-select>

                        </b-field>

                        <b-field label="Xafda">
                            <b-input type="taxt" v-model="form.village" placeholder="Village" required>
                            </b-input>
                        </b-field>


                        <b-field label="Emailka Machadka">
                            <b-input type="email" v-model="form.email" placeholder="Emailka Machadka" required>
                            </b-input>
                        </b-field>
                        <b-field label="Lambarka Machadka">
                            <b-input type="number" v-model="form.no" placeholder="Lambarka Machadka" required>
                            </b-input>
                        </b-field>


                        <b-field label="Maamulaha">
                            <b-input type="taxt" v-model="form.manager" placeholder="Maamulaha" required>
                            </b-input>
                        </b-field>
                        <b-field label="Lambarka maamulka">
                            <b-input type="number" v-model="form.tell" placeholder="Lambarka maamulka" required>
                            </b-input>
                        </b-field>
                        <b-field label="Email">
                            <b-input type="email" v-model="form.oemail" placeholder="Email-ka maamulaha" required>
                            </b-input>
                        </b-field>
                        <hr>
                        <b-field horizontal>
                            <b-button type="is-primary" :loading="isLoading" native-type="submit">Save</b-button>
                        </b-field>
                    </form>
                </card-component>
                <card-component v-if="isProfileExists" title="School Information" icon="account" class="tile is-child">
                    <user-avatar :avatar="item.avatar" :is-current-user="true"
                        class="image has-max-width is-aligned-center" />
                    <hr>
                     <b-field label="User Email">
                              <b-input type="email" v-model="form.email" placeholder="user email" required>
                              </b-input>
                          </b-field>
                          <b-field label="User Password">
                              <b-input type="password" v-model="form.password" placeholder="User Password" required>
                              </b-input>
                          </b-field>
                        <span style="color:red">{{ perror }}</span>
                             <b-field label="Confirm Password">
                                <b-input type="password" v-model="form.pconfirm" placeholder="User Password" required>
                                </b-input>
                            </b-field>
                           <b-field horizontal>
                              <b-button type="is-info" :disabled="isdiabled" :loading="isLoading" native-type="submit" @click="submitUser">Submit</b-button>
                          </b-field>
                </card-component>
            </tiles>
        </section>
    </div>
</template>
<script>
import clone from 'lodash/clone'

import Tiles from '@/components/Tiles'
import CardComponent from '@/components/CardComponent'
import FilePicker from '@/components/FilePicker'
import UserAvatar from '@/components/UserAvatar'

import { mapGetters , mapActions } from 'vuex'
import axios from 'axios'
export default {
    name: 'newschool',
    components: { CardComponent, Tiles, FilePicker, UserAvatar },
    props: {
        id: {
            default: null
        }
    },
    data() {
        return {
            isLoading: false,
            item: null,
          perror: null,
          isdiabled:false,
            form: {

            },
            createdReadable: null,
        }
    },
    computed: {
      ...mapGetters(["degmada"]),

        isProfileExists() {
            return !!this.item
        }
    },
  created() {
    this.fetchDistrict()
      this.userValidate()
      this.getData()


    },
  methods: {
        ...mapActions(["fetchDistrict"]),
        fileIdUpdated(fileId) {
            this.form.file_id = fileId
            this.form.avatar_filename = null
    },
    userValidate() {
      if (this.form.password != this.form.pconfirm) {
        this.perror = "password mismatch";
         this.isdiabled = true
      }
      else {
        this.perror = "";
        this.isdiabled = false
      }
    },

        getData() {
            if (this.id) {
                axios
                    .get(`/school/${this.id}`)
                    .then(r => {
                        this.form = r.data.data
                        this.item = clone(r.data.data)

                        // this.form.created_date = new Date(r.data.data.created_mm_dd_yyyy)
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
    submitUser() {
      this.isLoading=true
      axios.post("school/userStore", this.form).then(r => {
        this.isLoading = false
         this.$buefy.snackbar.open({
          message: r.data.msg,
          queue: false
        })
      })
        },
        submit() {
            this.isLoading = true
            let method = 'post'
            let url = '/school/Store'

            if (this.id) {
                method = 'patch'
                url = `/school/${this.id}`
            }

            axios({
                method,
                url,
                data: this.form
            }).then(r => {
                this.isLoading = false

                if (!this.id && r.data.data.id) {
                    this.$router.push({ name: 'school.edit', params: { id: r.data.data.id } })

                    this.$buefy.snackbar.open({
                        message: 'Employee Data Created',
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
    "form.password"(newValue) {
        this.userValidate()
    },
      "form.pconfirm"(newValue) {
      this.userValidate()
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
