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

                <card-component v-if="isProfileExists" title="Teacher Report" icon="bi bi-file-earmark-richtext"
                    class="tile is-child">

                    <form @submit.prevent="submit">
                        <template v-if="id">
                            <b-input type="hidden" :value="id" custom-class="is-static" readonly />
                        </template>

                        <user-avatar :avatar="form.avatar" :is-current-user="false"
                            class="image has-max-width is-aligned-center" />
                        <div class="row gy-2 gx-3 align-items-center">


                            <div class="col-auto">
                                <b-field label="Name">
                                    <b-input type="taxt" v-model="form.name" placeholder="Teacher name" readonly>
                                    </b-input>
                                </b-field>
                            </div>


                            <div class="col-auto">
                                <b-field label="Tel">
                                    <b-input type="number" v-model="form.tel" placeholder="Tell" pattern="[252][0-9]{9}"
                                        readonly>
                                    </b-input>
                                </b-field>
                            </div>
                            <div class="col-auto">
                                <b-field label="Email">
                                    <b-input type="email" v-model="form.email" placeholder="Email" readonly>
                                    </b-input>
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
                                <b-field label="Level" placeholder="Select Level" readonly>
                                    <b-select v-model="form.level">
                                        <option>Primary</option>
                                        <option>Secondary</option>
                                    </b-select>

                                </b-field>
                            </div>
                            <div class="col-auto">
                                <b-field label="Type" placeholder="Select Type" readonly>
                                    <b-select v-model="form.type">
                                        <option>Head of teachers</option>
                                        <option>Normal teacher</option>
                                    </b-select>

                                </b-field>
                            </div>
                            <div class="col-auto">
                                <b-input type="email" v-model="form.project" placeholder="Email" readonly>
                                </b-input>




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
                                    <b-input type="email" v-model="form.district" placeholder="Email" readonly>
                                    </b-input>




                                </b-field>

                            </div>
                            <div class="col-auto">
                                <b-field label="Village">
                                    <b-input type="text" v-model="form.village" placeholder="Village" required>
                                    </b-input>
                                </b-field>

                            </div>
                            <div class="col-auto">
                                <b-field label="School" placeholder="Select school" required>
                                    <b-input type="text" v-model="form.school" placeholder="Village" required>
                                    </b-input>


                                </b-field>
                            </div>
                            <div class="col-auto">
                                <b-field label="Account No">
                                    <b-input type="number" v-model="form.acc" placeholder="Acc Number" min="8" required>
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
                                <b-field label="Date">
                                    <b-input type="date" v-model="form.date" placeholder="Date" readonly>
                                    </b-input>
                                </b-field>
                            </div>


                        </div>
                        <hr>

                    </form>
                    {{ list }}
                    <h2>Assigned Projects</h2>
                    <table id="example" class="table table-striped table-bordered" style="width:100%">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Project</th>
                                <th scope="col">Salary</th>

                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="row of list" :key="row.id">
                                <td>{{ row.id }}</td>
                                <td>{{ row.project }}</td>
                                <td>{{ row.salary }}</td>
                                <td>{{ row.date }}</td>



                            </tr>
                        </tbody>
                        <!-- <tfoot style="background-color:green;">
                            <tr v-for="row of total" :key="row.id">
                                <td></td>
                                <td></td>
                                <td></td>
                                <td>Total:{{ row.blance }}</td>
                            </tr>
                        </tfoot> -->
                    </table>




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

            item: null,

            form: {},
            list: null,


        }
    },
    computed: {
        ...mapState([
            'team',
            'school'

        ]),
        isProfileExists() {
            return !!this.item
        },


    },
    created() {
        this.getData()
        this.getProjects()


    },
    methods: {

        getProjects() {
            this.isLoading = true
            axios
                .get("asignproject")
                .then((res) => {
                    this.isLoading = false

                    this.list = res.data.filter(x => x.teacher == this.form.name)
                })
                .catch((e) => {
                    this.isLoading = false
                    console.log(e);
                });
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
