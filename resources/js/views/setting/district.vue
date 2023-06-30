<template>
    <div v-if="Role == 'HR' || Role == 'Administrator' || Role == 'User'">
        <section class="section is-main-section">
            <tiles>
                <card-component title="Departments" icon="account-edit" class="tile is-child">
                    <form @submit.prevent="submit">
                        <template v-if="id">
                            <b-field horizontal>
                                <b-input type="hidden" :value="id" custom-class="is-static" readonly />
                            </b-field>
                            <hr>
                        </template>

                        <b-input horizontal type="text" id="name" v-model="form.name" placeholder="District name"
                            aria-label=" Name" required />


                        <b-field label="Region" placeholder="Select Region">
                            <b-select v-model="form.region">
                                <option>Galgaduud</option>
                                <option>Mudug</option>
                            </b-select>

                        </b-field>


                        <hr>

                        <div v-if="id">
                            <b-button type="is-info" :loading="isLoading" native-type="submit">Update</b-button>
                        </div>
                        <div v-else>

                            <b-button type="is-primary" :loading="isLoading" native-type="submit">Save</b-button>
                        </div>


                    </form>
                </card-component>
                <card-component class="has-table has-mobile-sort-spaced tile is-child" icon="account-multiple">
                    <card-toolbar>
                        <router-link slot="left" to="/depts/new">
                            <b-button size="is-small" icon-left="github-circle">
                                Add
                            </b-button>
                        </router-link>


                    </card-toolbar>

                    <modal-box :is-active="isModalActive" :trash-object-name="trashSubject" @confirm="trashConfirm"
                        @cancel="trashCancel" />

                    <b-table :checked-rows.sync="checkedRows" :checkable="true" :loading="isLoading" :paginated="paginated"
                        :per-page="perPage" :striped="true" :hoverable="true" default-sort="name" :data="list">
                        <b-table-column label="Name" field="name" sortable v-slot="props">
                            {{ props.row.name }}
                        </b-table-column>
                        <b-table-column label="Description" field="note" sortable v-slot="props">
                            {{ props.row.note }}
                        </b-table-column>


                        <b-table-column custom-key="actions" class="is-actions-cell" v-slot="props">
                            <div class="buttons is-right">
                                <router-link :to="{ name: 'depts.edit', params: { id: props.row.id } }"
                                    class="button is-small is-primary">
                                    <b-icon icon="account-edit" size="is-small" />
                                </router-link>
                                <div v-if="id">

                                </div>

                                <div v-else>
                                    <div v-if="Role == 'Administrator' || Role == 'Operator1'">
                                        <button class="button is-small is-danger" type="button"
                                            @click.prevent="trashModal(props.row)">
                                            <b-icon icon="trash-can" size="is-small" />
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </b-table-column>
                        <section class="section" slot="empty">
                            <div class="content has-text-grey has-text-centered">
                                <template v-if="isLoading">
                                    <p>
                                        <b-icon icon="dots-horizontal" size="is-large" />
                                    </p>
                                    <p>Fetching data...</p>
                                </template>
                                <template v-else>
                                    <p>
                                        <b-icon icon="emoticon-sad" size="is-large" />
                                    </p>
                                    <p>Nothing's here&hellip;</p>
                                </template>
                            </div>
                        </section>
                    </b-table>
                </card-component>

            </tiles>
        </section>
    </div>

    <div v-else>
        <Errorcomponent />


    </div>
</template>
<script>
import clone from 'lodash/clone'

import Tiles from '@/components/Tiles'
import CardComponent from '@/components/CardComponent'
import CardToolbar from '@/components/CardToolbar'
import ModalBox from '@/components/ModalBox'

import map from 'lodash/map'
import { mapState } from 'vuex'
export default {
    name: 'chartForm',
    components: { CardComponent, CardToolbar, ModalBox, Tiles },
    props: {
        id: {
            default: null
        }
    },
    data() {
        return {
            roles: [],
            form: {
                name: "",
                note: ""

            },

            trashObject: null,
            isModalActive: false,
            isLoading: false,
            paginated: true,
            perPage: 10,
            list: [],
            isUpdateMode: false,
            edited_id: "",
            checkedRows: []

        }
    },
    computed: {
        ...mapState([
            'userName',
            'Role',
            'userID'

        ]),
        trashSubject() {
            if (this.trashObject) {
                return this.trashObject.name
            }

            if (this.checkedRows.length) {
                return `${this.checkedRows.length} entries`
            }

            return null
        },


        isProfileExists() {
            return !!this.item
        }
    },
    created() {

        this.form.user = this.userName;
        this.getData()

        this.getList()
    },
    methods: {


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
                method = 'delete'
                url = `setting/district/${this.trashObject.id}/destroy`
            } else if (this.checkedRows.length) {
                method = 'post'
                url = 'setting/district/destroy'
                data = {
                    ids: map(this.checkedRows, row => row.id)
                }
            }

            axios({
                method,
                url,
                data
            }).then(r => {
                this.getList()

                this.trashObject = null
                this.checkedRows = []

                this.$buefy.snackbar.open({
                    message: `Deleted`,
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

        getList() {
            this.isLoading = true
            axios
                .get("setting/district")
                .then((res) => {
                    this.isLoading = false
                    console.log(res);
                    this.list = res.data;
                })
                .catch((e) => {
                    this.isLoading = false
                    console.log(e);
                });
        },
        getData() {
            if (this.id) {
                axios
                    .get(`/setting/district/${this.id}`)
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

        submit() {
            this.isLoading = true
            let method = 'post'
            let url = '/setting/district'

            if (this.id) {
                method = 'patch'
                url = `/setting/district/${this.id}`
            }

            axios({
                method,
                url,
                data: this.form
            }).then(r => {
                this.isLoading = false

                if (!this.id && r.data.data.id) {
                    this.$router.push({ name: 'district.new' })

                    this.form.name = ""
                    this.form.note = ""
                    this.getList()
                    this.$buefy.snackbar.open({
                        message: 'Created',
                        queue: false
                    })
                } else {
                    this.$router.push({ name: 'district.new' })
                    this.form.name = ""
                    this.form.code = ""
                    this.getList()
                    this.$buefy.snackbar.open({
                        message: 'Updated',
                        queue: false
                    })
                }
            }).catch(e => {
                this.isLoading = false

                this.$buefy.toast.open({
                    message: `Error: ${e.message}`,
                    type: 'is-danger',
                    queue: false
                })
            })
        },

    },
    mounted() {

    },
    watch: {
        userName(newValue) {

            this.form.user = newValue
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

