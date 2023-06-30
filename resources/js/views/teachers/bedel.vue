<template>
    <div>
        <title-bar :title-stack="['Admin', 'Teachers', 'Substitutions']" />

        <card-component class="has-table has-mobile-sort-spaced" icon="account-multiple">
            <card-toolbar>
                <router-link slot="left" to="/bedel/new">
                    <b-button size="is-small" icon-left="github-circle">
                        Add
                    </b-button>
                </router-link>
                <button slot="right" type="button" class="button is-primary ">

                    Availble Data:{{ bedel.length }}

                </button>
            </card-toolbar>

            <modal-box :is-active="isModalActive" :trash-object-name="trashSubject" @confirm="trashConfirm"
                @cancel="trashCancel" />
            <b-field>
                <p class="control">

                    <b-select v-model="perPage">
                        <option>
                            5
                        </option>
                        <option>
                            10
                        </option>
                        <option>
                            25
                        </option>
                        <option>
                            50
                        </option>
                        <option>
                            100
                        </option>
                        <option>
                            200
                        </option>
                    </b-select>
                </p>
                <b-input icon="magnify" type="search" v-model="search" placeholder="Search..."></b-input>
            </b-field>
            <b-table :checked-rows.sync="checkedRows" :checkable="true" :loading="isLoading" :paginated="paginated"
                :per-page="perPage" :striped="true" :hoverable="true" default-sort="name" :data="filteredItems">
                <b-table-column class="has-no-head-mobile is-image-cell" v-slot="props">
                    <div v-if="props.row.avatar" class="image">
                        <img :src="props.row.avatar" class="is-rounded">
                    </div>
                </b-table-column>
                <b-table-column label="Previous teacher" field="name" sortable v-slot="props">
                    {{ props.row.pteacher }}
                </b-table-column>

                <b-table-column label="New Teacher" field="amount" sortable v-slot="props">
                    {{ props.row.nteacher }}
                </b-table-column>
                <b-table-column label="Project" field="note" sortable v-slot="props">
                    {{ props.row.project }}
                </b-table-column>
                <b-table-column label="Sub date" field="note" sortable v-slot="props">
                    {{ props.row.sdate }}
                </b-table-column>


                <b-table-column custom-key="actions" class="is-actions-cell" v-slot="props">
                    <div class="buttons is-right">
                        <router-link :to="{ name: 'bedel.edit', params: { id: props.row.id } }"
                            class="button is-small is-primary">
                            <b-icon icon="account-edit" size="is-small" />
                        </router-link>
                        <button class="button is-small is-danger" type="button" @click.prevent="trashModal(props.row)">
                            <b-icon icon="trash-can" size="is-small" />
                        </button>
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
    </div>
</template>
<script>
import { mapState } from 'vuex'
import map from 'lodash/map'
import CardComponent from '@/components/CardComponent'
import ModalBox from '@/components/ModalBox'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import CardToolbar from '@/components/CardToolbar'
import Notification from '@/components/Notification'
import axios from "axios";

export default {
    components: { CardToolbar, HeroBar, TitleBar, ModalBox, CardComponent, Notification },
    data() {
        return {

            trashObject: null,
            isModalActive: false,
            isLoading: false,
            paginated: true,
            perPage: 5,
            bedel: [],
            isUpdateMode: false,
            edited_id: "",
            checkedRows: [],
            search: '',
        };


    },

    computed: {
        filteredItems() {
            return this.bedel.filter(item => {
                return item.pteacher.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                    || item.nteacher.toLowerCase().indexOf(this.search.toLowerCase()) > -1

                // || item.phone.toLowerCase().indexOf(this.search.toLowerCase()) > -1

                // || item.type.toLowerCase().indexOf(this.search.toLowerCase()) > -1

            })

        },
        trashSubject() {
            if (this.trashObject) {
                return this.trashObject.name
            }

            if (this.checkedRows.length) {
                return `${this.checkedRows.length} entries`
            }

            return null
        },
        ...mapState(['userName'])
    },
    created() {

        this.getteachers()
    },
    methods: {
        getteachers() {
            this.isLoading = true
            axios
                .get("bedel")
                .then((res) => {
                    this.isLoading = false

                    this.bedel = res.data
                })
                .catch((e) => {
                    this.isLoading = false
                    console.log(e);
                });
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
                method = 'delete'
                url = `teachers/${this.trashObject.id}/destroy`
            } else if (this.checkedRows.length) {
                method = 'post'
                url = 'teachers/destroy'
                data = {
                    ids: map(this.checkedRows, row => row.id)
                }
            }

            axios({
                method,
                url,
                data
            }).then(r => {
                this.getteachers()

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
        }
    },
    watch: {},

    mounted() {

    },
};
</script>