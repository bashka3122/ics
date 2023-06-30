<template>
    <div>

        <div class="is-right">
            Substitution form
            <router-link slot="right" to="/bedel/index" class="button" style="margin-left: 900px; margin-top: 30px;">
                Back
            </router-link>
        </div>
        <section class="section is-main-section">
            <div v-if="!isProfileExists">
                <card-component title="The previus teacher" icon="account-edit" class="tile is-child">

                    <form @submit.prevent="submit">
                        <template v-if="id">
                            <b-input type="hidden" :value="id" custom-class="is-static" readonly />
                        </template>
                        <div class="form-group row">
                            <div class="col-sm-6">


                                <b-field label="Project">
                                    <v-select v-model="selected" :options="project">
                                        <option>

                                        </option>

                                    </v-select>
                                    <input type="hidden" v-model="form.project" />




                                </b-field>
                            </div>
                            <div class="col-sm-6">

                                <b-field label="Teacher" required>

                                    <v-select v-model="selectedpTeacher" :options="tbp">
                                        <option>

                                        </option>

                                    </v-select>
                                    <input type="hidden" v-model="form.pteacher" />
                                </b-field>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6">
                                <b-field label="Previous teacher account">
                                    <b-input type="taxt" v-model="form.pacc" placeholder="Teacher account" readonly>
                                    </b-input>
                                </b-field>


                            </div>

                            <div class="col-sm-6">
                                <b-field label="Previus Teachers phone">
                                    <b-input type="taxt" v-model="form.ptell" placeholder="Tell" readonly>
                                    </b-input>
                                </b-field>

                            </div>
                        </div>
                        <hr>
                        <card-component title="new Teacher info" icon="account-edit" class="tile is-child" v-if="show">


                            <b-field label="Photo" horizontal>
                                <file-picker @file-id-updated="fileIdUpdated" :current-file="form.avatar_filename"
                                    required />
                            </b-field>
                            <div class="row gy-2 gx-3 align-items-center">

                                <div class="col-sm-6">
                                    <b-field label="Name">
                                        <b-input type="taxt" v-model="form.name" placeholder="Teacher name" required>
                                        </b-input>
                                    </b-field>
                                </div>
                                <div class="col-sm-6">
                                    <b-field label="Tel">
                                        <b-input type="number" v-model="form.tel" placeholder="Tell" required>
                                        </b-input>
                                    </b-field>

                                </div>
                                <div class="col-auto">
                                    <b-field label="Email">
                                        <b-input type="email" v-model="form.email" placeholder="Email" required>
                                        </b-input>
                                    </b-field>
                                </div>

                                <div class="col-auto">
                                    <b-field label="Level" placeholder="Select Level" required>
                                        <b-select v-model="form.level">
                                            <option>Primary</option>
                                            <option>Secondary</option>
                                        </b-select>

                                    </b-field>
                                </div>
                                <div class="col-auto">
                                    <b-field label="Type" placeholder="Select Type" required>
                                        <b-select v-model="form.type">
                                            <option>Head of teachers</option>
                                            <option>Normal teacher</option>
                                        </b-select>

                                    </b-field>
                                </div>

                                <div class="col-auto">
                                    <b-field label="Gender" placeholder="Select Gender">
                                        <b-select v-model="form.gender">
                                            <option>Male</option>
                                            <option>Female</option>
                                        </b-select>

                                    </b-field>
                                </div>
                                <div class="col-auto">


                                    <input type="hidden" v-model="form.school" />

                                    </b-field>
                                </div>
                                <div class="col-auto">
                                    <b-field label="Region" placeholder="Select Region" required>
                                        <b-select v-model="form.region">
                                            <option>Mudug</option>
                                            <option>Galgaduud</option>
                                        </b-select>

                                    </b-field>

                                </div>
                                <div class="col-auto">

                                    <b-field label="District" required>
                                        <v-select v-model="selecteddistrict" :options="district">
                                            <option>

                                            </option>

                                        </v-select>
                                        <input type="hidden" v-model="form.district" />




                                    </b-field>

                                </div>
                                <div class="col-sm-6">
                                    <b-field label="Village">
                                        <b-input type="text" v-model="form.village" placeholder="Village" required>
                                        </b-input>
                                    </b-field>

                                </div>


                                <div class="col-auto">
                                    <b-field label="Salary">
                                        <b-input type="text" v-model="form.salary" placeholder="Salary" required>
                                        </b-input>
                                    </b-field>
                                </div>
                                <div class="col-auto">
                                    <b-field label="Account No">
                                        <b-input type="number" v-model="form.acc" placeholder="Acc Number" required>
                                        </b-input>
                                    </b-field>
                                </div>
                                <div class="col-auto">
                                    <b-field label="Date">
                                        <b-input type="date" v-model="form.date" placeholder="Date" required>
                                        </b-input>
                                    </b-field>
                                </div>

                            </div>



                            <hr>

                            <b-button type="is-primary" :loading="isLoading" native-type="submit">Save</b-button>
                        </card-component>
                    </form>
                </card-component>
            </div>









        </section>
    </div>
</template>
<script>
import clone from 'lodash/clone'

import Tiles from '@/components/Tiles'
import CardComponent from '@/components/CardComponent'
import FilePicker from '@/components/FilePicker'
import UserAvatar from '@/components/UserAvatar'
export default {
    name: 'newteacher',
    components: { CardComponent, Tiles, FilePicker, UserAvatar },
    props: {
        id: {
            default: null
        }
    },
    data() {
        return {
            selected: "",
            selectedTeacher: "",
            selectedpTeacher: "",

            selectedSchool: "",
            selecteddistrict: "",
            isLoading: false,
            item: null,
            tbp: null,
            teacher: null,
            teachers: null,
            project: null,
            school: null,
            show: false,
            form: {

            },
            createdReadable: null,
        }
    },
    computed: {

        isProfileExists() {
            return !!this.item
        }
    },
    created() {
        this.getData()
        this.getteachers()

        this.getOptions()


    },
    methods: {
        fileIdUpdated(fileId) {
            this.form.file_id = fileId
            this.form.avatar_filename = null
        },
        getData() {
            if (this.id) {
                axios
                    .get(`/bedel/${this.id}`)
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

        getteachers() {
            axios.get('teacher').then(r => {
                this.teachers = r.data.data
            })
        },
        getOptions() {
            axios.get('/setting/select').then(r => {
                this.project = r.data.project
                this.school = r.data.school
                this.teacher = r.data.teachers
                this.tbp = r.data.teacherbyproject.filter(x => x.value == this.form.project)

                this.district = r.data.district.filter(x => x.value == this.form.region)
            })
        },
        submit() {
            this.isLoading = true
            let method = 'post'
            let url = '/bedel/Store'

            if (this.id) {
                method = 'patch'
                url = `/bedel/${this.id}`
            }

            axios({
                method,
                url,
                data: this.form
            }).then(r => {
                this.isLoading = false

                if (!this.id && r.data.data.id) {
                    this.$router.push({ name: 'bedel.edit', params: { id: r.data.data.id } })

                    this.$buefy.snackbar.open({
                        message: 'Data Created',
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
        "selected"(newValue) {
            this.getOptions()
            this.form.project = newValue.label



        },
        "selectedpTeacher"(newValue) {
            this.form.pteacher = newValue.label

            this.getteachers()
            let x = this.teachers.filter(x => x.name == this.form.pteacher)

            this.form.pacc = x[0]?.acc
            this.form.ptell = x[0]?.tel
            this.form.school = x[0]?.school
            this.show = true
        },

        "selecteddistrict"(newValue) {
            this.form.district = newValue.label
        },
        "form.region"(newValue) {
            this.getOptions()
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
  