<template>
    <div>

        <div class="is-right">
            projects
            <router-link slot="right" to="/teachers/index" class="button" style="margin-left: 900px; margin-top: 30px;">
                Back
            </router-link>
        </div>
        <section class="section is-main-section">
            <tiles>
                <card-component title="New Teacher" icon="account-edit" class="tile is-child">

                    <form @submit.prevent="submit" class="grid-container">
                        <template v-if="id">
                            <b-input type="hidden" :value="id" custom-class="is-static" readonly />
                        </template>

                        <b-field label="Photo" horizontal>
                            <file-picker @file-id-updated="fileIdUpdated" :current-file="form.avatar_filename" required />
                        </b-field>




                                <b-field label="Name">
                                    <b-input type="taxt" v-model="form.name" placeholder="Teacher name" required>
                                    </b-input>
                                </b-field>

                                <b-field label="Tel">
                                    <b-input type="number" v-model="form.tel" placeholder="Tell" pattern="[252][0-9]{9}"
                                        required>
                                    </b-input>
                                </b-field>

                                      <b-input type="hidden" v-model="form.tid"
                                          >
                                      </b-input>

                                <b-field label="Email">
                                    <b-input type="email" v-model="form.email" placeholder="Email" required>
                                    </b-input>
                                </b-field>

                                <b-field label="Gender" placeholder="Select Gender">
                                    <b-select v-model="form.gender">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </b-select>

                                </b-field>

                                <b-field label="Level" placeholder="Select Level" required>
                                    <b-select v-model="form.level">
                                        <option>Primary</option>
                                        <option>Secondary</option>
                                    </b-select>

                                </b-field>

                                <b-field label="Region" placeholder="Select Region" required>
                                    <b-select v-model="form.region">
                                        <option>Mudug</option>
                                        <option>Galgaduud</option>
                                    </b-select>

                                </b-field>


                                <b-field label="District" required>
                                    <v-select v-model="selecteddistrict" :options="district">
                                        <option>

                                        </option>

                                    </v-select>
                                    <input type="hidden" v-model="form.district" />




                                </b-field>


                                <b-field label="Village">
                                    <b-input type="text" v-model="form.village" placeholder="Village" required>
                                    </b-input>
                                </b-field>




                                    <input type="hidden" v-model="form.school" />







                                <b-field label="Registred Date">
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



                    <modal-box :is-active="isModalActive" :trash-object-name="trashSubject" @confirm="trashConfirm"
                        @cancel="trashCancel" />

                    <div class="form-group row">

                        <ul v-for="row of teacherfiles" :key="row.id">
                            <div class="file-man-box">
                                <button class="button is-small is-danger" type="button" @click.prevent="trashModal(row)">
                                    <b-icon icon="trash-can" size="is-small" />
                                </button>
                                <!-- <a href="" class="file-close"><i class="fa fa-times-circle"></i></a> -->
                                <div v-if="row.mime == 'image/jpeg'">
                                    <div class="file-img-box">
                                        <img :src="'storage/uploads/teachers/' + row.file" alt="icon">
                                    </div>
                                </div>
                                <div v-if="row.mime == 'image/png'">
                                    <div class="file-img-box">
                                        <img :src="'storage/uploads/teachers/' + row.file" alt="icon">
                                    </div>
                                </div>
                                <div v-if="row.mime == 'application/pdf'">
                                    <div class="file-img-box">
                                        <img src="https://coderthemes.com/highdmin/layouts/assets/images/file_icons/pdf.svg"
                                            alt="icon">
                                    </div>
                                </div>


                                <a :href="'storage/uploads/teachers/' + row.file" class="file-download"><i
                                        class="fa fa-download"></i></a>
                                <div class="file-man-title">
                                    <li class="mb-0 text-overflow">{{ row.name }}</li>
                                    <li class="mb-0"><small>{{ row.size }} kb</small></li>
                                </div>
                            </div>
                        </ul>


                    </div>

                    <div class="text-center mt-3">

                        <button type=" button" :loading="isLoading"
                            class="btn btn-outline-danger w-md waves-effect waves-light">
                            <i class="mdi mdi-refresh"></i> Load More
                            Files</button>
                        <form @submit="upload" enctype="multipart/form-data">
                            <input horizontal type="hidden" id="name" v-model="form.file_id" placeholder="ID"
                                aria-label=" Name" />




                            <input type="file" ref="inputFile" class="btn btn-outline-danger w-md waves-effect waves-light"
                                v-on:change="onFileChange">

                            <b-field horizontal>
                                <b-button type="is-primary" :loading="isLoading" native-type="submit">Submit</b-button>
                            </b-field>

                        </form>

                    </div>




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
            selecteddistrict: "",
            district: "",
            teacherfiles: null,
            isLoading: false,
            item: null,
            school: null,
            project: null,
            trashObject: null,
            isModalActive: false,
            form: {

            },
      tList:null,

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
      this.getTeacher()
        this.getData()

        this.getOptions()
        this.getFile()

    },
    methods: {
      getTeacher() {
        axios.get("/teacher").then(r => {
  this.tList=r.data.data.filter(x=> x.school==this.userName)
 })
},

        trashModal(trashObject = null) {
            if (trashObject || this.checkedRows.length) {
                this.trashObject = trashObject
                this.isModalActive = true
            }
        },
        trashConfirm() {
            let url
            let method
            let data = null

            this.isModalActive = false

            if (this.trashObject) {
                method = 'get'
                url = `docs/${this.trashObject.file}/destroy`
            }

            axios({
                method,
                url,
                data
            }).then(r => {
                this.getData()

                this.trashObject = null


                this.$buefy.snackbar.open({
                    message: r.data.msg,
                    queue: false
                })
            }).catch(err => {
                this.$buefy.toast.open({
                    message: `Error: ${err.message}`,
                    type: 'is-danger',
                    queue: false
                })
            })
        },
        trashCancel() {
            this.isModalActive = false
        },

        fileIdUpdated(fileId) {
            this.form.file_id = fileId
            this.form.avatar_filename = null
        },
        getData() {
            if (this.id) {
                axios
                    .get(`/teacher/${this.id}`)
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
        getFile() {
            if (this.id) {
                axios
                    .get(`docs/${this.id}`)
                    .then(r => {
                        this.teacherfiles = r.data.data;


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

        getOptions() {
            axios.get('/setting/select').then(r => {
                this.project = r.data.project
                this.school = r.data.school
                this.district = r.data.district.filter(x => x.value == this.form.region)
            })
        },
        onFileChange(e) {
            console.log(e.target.files[0]);
            this.file = e.target.files[0];
            this.file_id = this.id;
        },
        upload(e) {
            this.isLoading = true
            e.preventDefault();
            let existingObj = this;

            let data = new FormData();
            data.append('file', this.file);
            data.append('file_id', this.file_id);
            axios.post('/docs/store', data)
                .then((r) => {
                    this.isLoading = false
                    // this.$refs.fileupload.value = null;
                    this.$refs.inputFile.value = null;
                    existingObj.success = r.data.msg;

                    this.getFile()
                    this.$buefy.snackbar.open({
                        message: r.data.msg,
                        queue: false
                    })

                })
                .catch(function (err) {
                    existingObj.output = err;
                });

        },
        submit() {
            this.isLoading = true
            let method = 'post'
            let url = '/teacher/Store'

            if (this.id) {
                method = 'patch'
                url = `/teacher/${this.id}`
            }

            axios({
                method,
                url,
                data: this.form
            }).then(r => {
                this.isLoading = false

                if (!this.id && r.data.data.id) {
                    this.$router.push({ name: 'teachers.edit', params: { id: r.data.data.id } })

                    this.$buefy.snackbar.open({
                        message: 'Teachers Data Created',
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


        "selecteddistrict"(newValue) {
        this.form.district = newValue.label
             let Tids = this.tList[0]?.tid
      let x = + (Number(Tids) + 1);

      if (x > 0) {
        this.form.tid = "000" + x
      }
      else {
        this.form.tid = "000" + 1
      }
        },
        "form.region"(newValue) {
            this.getOptions()
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
<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: auto auto ;
  grid-gap: 10px;
  background-color: #2196F3;
  padding: 10px;
}
.card-box {
    padding: 20px;
    border-radius: 3px;
    margin-bottom: 30px;
    background-color: #fff;
}

.file-man-box {
    padding: 20px;
    border: 1px solid #e3eaef;
    border-radius: 5px;
    position: relative;
    margin-bottom: 20px
}

.file-man-box .file-close {
    color: #f1556c;
    position: absolute;
    line-height: 24px;
    font-size: 24px;
    right: 10px;
    top: 10px;
    visibility: hidden
}

.file-man-box .file-img-box {
    line-height: 120px;
    text-align: center
}

.file-man-box .file-img-box img {
    height: 64px
}

.file-man-box .file-download {
    font-size: 32px;
    color: #98a6ad;
    position: absolute;
    right: 10px
}

.file-man-box .file-download:hover {
    color: #313a46
}

.file-man-box .file-man-title {
    padding-right: 25px
}

.file-man-box:hover {
    -webkit-box-shadow: 0 0 24px 0 rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .02);
    box-shadow: 0 0 24px 0 rgba(0, 0, 0, .06), 0 1px 0 0 rgba(0, 0, 0, .02)
}

.file-man-box:hover .file-close {
    visibility: visible
}

.text-overflow {
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
    width: 100%;
    overflow: hidden;
}

h5 {
    font-size: 15px;
}
</style>
