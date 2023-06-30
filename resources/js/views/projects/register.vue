<template>
    <div>

        <div class="is-right">
            projects
            <router-link slot="right" to="/projects/index" class="button">
                Back
            </router-link>
        </div>
        <section class="section is-main-section">
            <tiles>
                <card-component title="Project" icon="account-edit" class="tile is-child">

                    <form @submit.prevent="submit">
                        <template v-if="id">
                            <b-input type="hidden" :value="id" custom-class="is-static" readonly />
                        </template>



                        <b-field label="Name">
                            <b-input type="taxt" v-model="form.name" placeholder="Project name" required>
                            </b-input>
                        </b-field>


                        <b-field label="Funder">
                            <b-input type="taxt" v-model="form.funder" placeholder="Funder" required>
                            </b-input>
                        </b-field>
                        <b-field label="Agency">
                            <b-input type="text" v-model="form.agency" placeholder="Agency" required>
                            </b-input>
                        </b-field>
                        <b-field label="Start Date">
                            <b-input type="date" v-model="form.start" placeholder="Start Date" required>
                            </b-input>
                        </b-field>


                        <b-field label="End date">
                            <b-input type="date" v-model="form.end" placeholder="End Date" required>
                            </b-input>
                        </b-field>
                        <b-field label="Number of Schools">
                            <b-input type="number" v-model="form.schools" placeholder="Supported Schools as number"
                                required>
                            </b-input>
                        </b-field>
                        <b-field label="Number of Teachers">
                            <b-input type="number" v-model="form.teachers" placeholder="Supported Teachers as number"
                                required>
                            </b-input>
                        </b-field>
                        <hr>
                        <b-field horizontal>
                            <b-button type="is-primary" :loading="isLoading" native-type="submit">Save</b-button>
                        </b-field>
                    </form>
                </card-component>
                <card-component v-if="isProfileExists" title="Project Activities" icon="account" class="tile is-child">
                    <card-component :title="formCardTitle" icon="account-edit" class="tile is-child">
                        <form @submit.prevent="submit">

                            <table class="table">
                                <thead>
                                    <tr>
                                        <th>#</th>

                                        <th>activty</th>
                                        <th>Description</th>
                                        <th>Date</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) of form.items" :key="index">
                                        <td>{{ item.id }}</td>

                                        <td>
                                            <input type="text" style="min-height: 33px;min-width: 200px; "
                                                v-model="form.items[index].name"
                                                class="form-control form-control-sm my-input"
                                                placeholder="Activity title" />
                                        </td>
                                        <td>
                                            <input type="text" style="min-height: 93px; min-width: 200px; "
                                                v-model="form.items[index].description" class="form-control"
                                                placeholder="Description" />
                                        </td>



                                        <td><input type="date" style="min-height: 33px; min-width: 33px;"
                                                v-model="form.items[index].date"
                                                class="form-control form-control-sm my-input" placeholder="Activity Date" />
                                        </td>


                                        <td>
                                            <i @click="removeRow(form.items[index].id)"
                                                style="cursor: pointer; font-size: 20px; color: red"
                                                class="mdi mdi-archive"></i>
                                        </td>
                                        {{
                                            modifyItem(item)
                                        }}
                                    </tr>
                                    <button @click="addRow()" class="btn btn-sm btn-info mb-5 mt-1"
                                        type="button">add</button>
                                </tbody>
                            </table>

                            <b-field horizontal>
                                <b-button type="is-primary" :loading="isLoading" native-type="submit">Save</b-button>
                            </b-field>
                        </form>
                    </card-component>

                </card-component>
            </tiles>
        </section>
    </div>
</template>
<script>
import clone from 'lodash/clone'

import Tiles from '@/components/Tiles'
import CardComponent from '@/components/CardComponent'

export default {
    name: 'Employee',
    components: { CardComponent, Tiles },
    props: {
        id: {
            default: null
        }
    },
    data() {
        return {
            isLoading: false,
            item: null,
            item1: null,

            form: {
                items: [
                    {
                        id: 1,
                        description: "",
                        name: "",
                        project: "",

                        date: "",

                    },
                ],
            },

        }
    },
    computed: {

        isProfileExists() {
            return !!this.item1
        }
    },
    created() {
        this.getData()

    },
    methods: {
        modifyItem(item) {

        },
        addRow() {
            this.form.items.push({
                id: this.form.items.length + 1,

                description: "",
                name: "",
                project: "",

                date: "",

            });
        },
        removeRow(id) {
            this.form.items = this.form.items
                .filter((row) => row.id != id)
                .map((item, index) => {
                    return {
                        ...item,
                        id: index + 1,
                    };
                });
        },
        getData() {
            if (this.id) {
                axios
                    .get(`/project/${this.id}`)
                    .then(r => {
                        this.form = r.data.data
                        this.item1 = clone(r.data.data)

                        // this.form.created_date = new Date(r.data.data.created_mm_dd_yyyy)
                    })
                    .catch(e => {
                        this.item1 = null

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
            let url = '/project/Store'

            if (this.id) {
                method = 'patch'
                url = `/project/${this.id}`
            }

            axios({
                method,
                url,
                data: this.form
            }).then(r => {
                this.isLoading = false

                if (!this.id && r.data.data.id) {
                    this.$router.push({ name: 'projects.edit', params: { id: r.data.data.id } })

                    this.$buefy.snackbar.open({
                        message: 'New Project Created',
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
        id(newValue) {
            this.form = this.getClearFormObject()
            this.item = null

            if (newValue) {
                this.getData()
            }
        }
    }
}
</script>
  