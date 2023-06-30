<template>
    <div>

        <div class="is-right">
            Transfer
            <router-link slot="right" to="/transfers/index" class="button" style="margin-left: 900px; margin-top: 30px;">
                Back
            </router-link>
        </div>
        <section class="section is-main-section">
            <card-component v-if="isProfileExists" title="Transfer Report" icon="account" class="tile is-child">
                <b-field label="Name">
                    <b-input :value="item.teacher" custom-class="is-static" readonly />
                </b-field>
                <b-field label="Former Region">
                    <b-input :value="item.fregion" custom-class="is-static" readonly />
                </b-field>
                <b-field label="New Region">
                    <b-input :value="item.region" custom-class="is-static" readonly />
                </b-field>
                <b-field label="Former District">
                    <b-input :value="item.fdistrict" custom-class="is-static" readonly />
                </b-field>
                <b-field label="New District">
                    <b-input :value="item.district" custom-class="is-static" readonly />
                </b-field>
                <b-field label="Former School">
                    <b-input :value="item.fschool" custom-class="is-static" readonly />
                </b-field>
                <b-field label="New School">
                    <b-input :value="item.school" custom-class="is-static" readonly />
                </b-field>
                <b-field label="Transfer Details">
                    <b-input :value="item.note" custom-class="is-static" readonly />
                </b-field>
            </card-component>
            <card-component title="New Transfer" icon="account-edit" class="tile is-child">

                <form @submit.prevent="submit">
                    <template v-if="id">
                        <b-input type="hidden" :value="id" custom-class="is-static" readonly />
                    </template>
                    <div class="form-group row">
                        <div class="col-sm-6">
                            <b-field label="Teacher" placeholder="Select Teacher" required>
                                <b-select v-model="form.teacher">
                                    <option v-for="(teacher, index) in teacher" :key="index" :value="teacher.name">
                                        {{ teacher.name }}
                                    </option>
                                </b-select>

                            </b-field>
                        </div>
                        <div class="col-sm-6">
                            <b-field label="Transfer Date">
                                <b-input type="date" v-model="form.date" placeholder="Date" required>
                                </b-input>
                            </b-field>

                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-6">
                            <b-field label="Regin" placeholder="Select Region" required>
                                <b-select v-model="form.region">
                                    <option>Mudug</option>
                                    <option>Galgaduud</option>
                                </b-select>

                            </b-field>

                        </div>
                        <div class="col-sm-6">

                            <b-field label="Former Regin" required>
                                <b-input type="teaxt" v-model="form.fregion" readonly>
                                </b-input>

                            </b-field>
                        </div>
                    </div>
                    <div class="form-group row">
                        <div class="col-sm-6">
                            <b-field label="District" placeholder="Select District" required>
                                <b-select v-model="form.district">
                                    <option>Abudwak</option>
                                    <option>Dhusamareb</option>
                                </b-select>

                            </b-field>
                        </div>
                        <div class="col-sm-6">

                            <b-field label="Former District" required>
                                <b-input type="teaxt" v-model="form.fdistrict" readonly>
                                </b-input>



                            </b-field>
                        </div>


                    </div>

                    <div class="form-group row">
                        <div class="col-sm-6">

                            <b-field label="Village" required>
                                <b-input type="teaxt" v-model="form.village" required>
                                </b-input>

                            </b-field>
                        </div>
                        <div class="col-sm-6">

                            <b-field label="Former Village" required>
                                <b-input type="teaxt" v-model="form.fvillage" readonly>
                                </b-input>



                            </b-field>
                        </div>


                    </div>


                    <div class="form-group row">
                        <div class="col-sm-6">



                            <b-field label="School" placeholder="Select School" required>
                                <b-select v-model="form.school">
                                    <option v-for="(school, index) in school" :key="index" :value="school.name">
                                        {{ school.name }}
                                    </option>
                                </b-select>

                            </b-field>

                        </div>
                        <div class="col-sm-6">



                            <b-field label="Former School">
                                <b-input type="text" v-model="form.fschool" readonly>
                                </b-input>

                            </b-field>



                        </div>

                    </div>

                    <b-field label="Note">
                        <b-input type="textarea" placeholder="Other Notes included the reason behind the transfer"
                            v-model="form.note" maxlength="255" required />
                    </b-field>
                    <hr>

                    <b-button type="is-primary" :loading="isLoading" native-type="submit">Transfer</b-button>

                </form>
            </card-component>


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
            isLoading: false,
            item: null,
            school: null,
            teacher: null,
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
        this.getSchools()
        this.getteachers()

    },
    methods: {
        fileIdUpdated(fileId) {
            this.form.file_id = fileId
            this.form.avatar_filename = null
        },
        getData() {
            if (this.id) {
                axios
                    .get(`/transfer/${this.id}`)
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
        getSchools() {
            axios.get('/school').then(r => {
                this.school = r.data.data.filter(x => x.district == this.form.district)
            })
        },
        getteachers() {
            axios.get('/teacher').then(r => {
                this.teacher = r.data.data
            })
        },
        submit() {
            this.isLoading = true
            let method = 'post'
            let url = '/transfer/Store'

            if (this.id) {
                method = 'patch'
                url = `/transfer/${this.id}`
            }

            axios({
                method,
                url,
                data: this.form
            }).then(r => {
                this.isLoading = false

                if (!this.id && r.data.data.id) {
                    this.$router.push({ name: 'newtransfer.edit', params: { id: r.data.data.id } })

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
        "form.teacher"(newValue) {
            let fregion = this.teacher.filter(x => x.name == this.form.teacher)
            this.form.fregion = fregion[0]?.region
            this.form.fdistrict = fregion[0]?.district
            this.form.fschool = fregion[0]?.school
            this.form.fvillage = fregion[0]?.village

        },
        "form.district"(newValue) {
            this.getSchools()
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
  