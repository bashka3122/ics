<template>
    <div>

        <div class="is-right">
            Transfer
            <router-link slot="right" to="/assign/index" class="button" style="margin-left: 900px; margin-top: 30px;">
                Back
            </router-link>
        </div>
        <section class="section is-main-section">
            <tiles>
                <card-component title="Assign teacher to project" icon="account-edit" class="tile is-child">

                    <form @submit.prevent="submit">
                        <template v-if="id">
                            <b-input type="hidden" :value="id" custom-class="is-static" readonly />
                        </template>
                        <div class="alert alert-danger" role="alert" v-if="error">
                            {{ error }}
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6">
                                <b-field label="project" placeholder="Select project" required>
                                    <b-select v-model="form.project">
                                        <option v-for="(teacher, index) in project" :key="index" :value="teacher.name">
                                            {{ teacher.name }}
                                        </option>
                                    </b-select>

                                </b-field>
                            </div>
                            <div class="col-sm-6">

                                <b-field label="Teacher" placeholder="Select Teacher" required>
                                    <b-select v-model="form.teacher">
                                        <option v-for="(teacher, index) in teacher" :key="index" :value="teacher.name">
                                            {{ teacher.name }}
                                        </option>
                                    </b-select>

                                </b-field>
                            </div>
                        </div>
                        <div class="form-group row">
                            <div class="col-sm-6">
                                <b-field label="Assign Date">
                                    <b-input type="date" v-model="form.date" placeholder="Date" required>
                                    </b-input>
                                </b-field>

                            </div>
                            <div class="col-sm-6">

                                <b-field label="Salary" required>
                                    <b-input type="number" v-model="form.salary">
                                    </b-input>

                                </b-field>
                            </div>
                        </div>

                        <hr>

                        <b-button type="is-primary" :loading="isLoading" native-type="submit">Save</b-button>

                    </form>
                </card-component>
                <card-component v-if="isProfileExists" title="Assign History" icon="account" class="tile is-child">
                    Teacher {{ form.teacher }} {{ "'s'" }} assigned projects

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
            error: null,
            teacher: null,
            project: null,
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
        this.getprojects()
        this.getteachers()

    },
    methods: {

        getData() {
            if (this.id) {
                axios
                    .get(`/asignproject/${this.id}`)
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
        getprojects() {
            axios.get('/project').then(r => {
                this.project = r.data
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
            let url = '/asignproject/Store'

            if (this.id) {
                method = 'patch'
                url = `/asignproject/${this.id}`
            }

            axios({
                method,
                url,
                data: this.form
            }).then(r => {
                this.isLoading = false
                if (r.data.status == false) {
                    this.$buefy.snackbar.open({
                        message: 'Duplicate Error!',
                        queue: false
                    })
                    this.error = "Opps! Duplicate Error!"
                }
                else {
                    if (!this.id && r.data.data.id) {
                        this.$router.push({ name: 'assign.edit', params: { id: r.data.data.id } })

                        this.$buefy.snackbar.open({
                            message: 'Data Created',
                            queue: false
                        })
                    }
                    else {
                        this.item = r.data.data

                        this.$buefy.snackbar.open({
                            message: 'Sucessfully Updated',
                            queue: false
                        })
                    }
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

        id(newValue) {

            this.item = null

            if (newValue) {
                this.getData()
            }
        }
    }
}
</script>
  