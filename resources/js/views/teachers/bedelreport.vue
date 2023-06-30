<template>
    <div>

        <div class="is-right">
            Substitution form
            <router-link slot="right" to="/bedel/index" class="button" style="margin-left: 900px; margin-top: 30px;">
                Back
            </router-link>
        </div>
        <section class="section is-main-section">


            <card-component>
                <b-field>

                    <i class="bi bi-symmetry-horizontal"></i>
                    <p class="control">

                        <b-select v-model="rtype">

                            <option selected>landscape</option>
                            <option>portrait</option>
                        </b-select>
                    </p>
                    <button @click="generateReport" class="btn btn-print">
                        <b-icon icon="printer" aria-hidden="true"></b-icon>Print

                    </button>
                </b-field>
                <vue-html2pdf :show-layout="true" :float-layout="false" :enable-download="false" :preview-modal="true"
                    :filename="'type + new Date()'" :pdf-quality="2" :manual-pagination="true" pdf-format="a4"
                    :pdf-orientation="rtype" pdf-content-width="100%" ref="html2Pdf">


                    <div slot="pdf-content" class="card" id="printMe" ref="content" style="width:100%;">
                        <b-image :src="'images/MOE.jpeg'" alt="Logo"></b-image>
                        <card-component title="The previus teacher" icon="account-edit">
                            <center>
                                <h1>Substitution Report</h1>
                                <h2>Substitution Date: {{ form.sdate }}</h2>
                                <h2>Substitution No{{ form.id }}</h2>
                            </center>
                            <hr>
                            <form @submit.prevent="submit">
                                <template v-if="id">
                                    <b-input type="hidden" v-model="form.pteacher" custom-class="is-static" readonly />
                                    <b-input type="hidden" v-model="form.nteacher" custom-class="is-static" readonly />
                                </template>





                                <user-avatar :avatar="pteacher.avatar" :is-current-user="false"
                                    class="image has-max-width is-aligned-center" />

                                <div class="form-group row">
                                    <div class="col-auto">
                                        <b-field label="Name">
                                            <b-input type="taxt" v-model="pteacher.name" readonly>
                                            </b-input>
                                        </b-field>
                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Tel">
                                            <b-input type="number" v-model="pteacher.tel" readonly>
                                            </b-input>
                                        </b-field>

                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Email">
                                            <b-input type="email" v-model="pteacher.email" readonly>
                                            </b-input>
                                        </b-field>
                                    </div>

                                    <div class="col-auto">
                                        <b-field label="Gender">
                                            <b-input type="text" v-model="pteacher.gender" readonly>
                                            </b-input>

                                        </b-field>
                                    </div>
                                    <div class="col-auto">
                                        <b-field label="School">
                                            <b-input type="text" v-model="pteacher.school" readonly>
                                            </b-input>
                                        </b-field>

                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Region">
                                            <b-input type="text" v-model="pteacher.region" readonly>
                                            </b-input>

                                        </b-field>

                                    </div>


                                    <div class="col-auto">
                                        <b-field label="District">
                                            <b-input type="email" v-model="pteacher.district" readonly>
                                            </b-input>

                                        </b-field>

                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Village">
                                            <b-input type="text" v-model="pteacher.village" readonly>
                                            </b-input>
                                        </b-field>

                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Level">
                                            <b-input type="text" v-model="pteacher.level" readonly>
                                            </b-input>

                                        </b-field>

                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Type">
                                            <b-input type="text" v-model="pteacher.type" readonly>
                                            </b-input>
                                        </b-field>

                                    </div>


                                    <div class="col-auto">
                                        <b-field label="Salary">
                                            <b-input type="text" v-model="pteacher.salary" readonly>
                                            </b-input>
                                        </b-field>
                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Account No">
                                            <b-input type="number" v-model="pteacher.acc" readonly>
                                            </b-input>
                                        </b-field>
                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Date">
                                            <b-input type="date" v-model="pteacher.date" readonly>
                                            </b-input>
                                        </b-field>
                                    </div>
                                </div>




                                <hr>



                            </form>
                        </card-component>
                        <card-component title="New Teacher" icon="account">
                            <form @submit.prevent="submit">
                                <template v-if="id">
                                    <b-input type="hidden" :value="id" custom-class="is-static" readonly />
                                </template>




                                <user-avatar :avatar="nteacher.avatar" :is-current-user="false"
                                    class="image has-max-width is-aligned-center" />

                                <div class="form-group row">
                                    <div class="col-auto">
                                        <b-field label="Name">
                                            <b-input type="taxt" v-model="nteacher.name" placeholder="Teacher name">
                                            </b-input>
                                        </b-field>
                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Tel">
                                            <b-input type="number" v-model="nteacher.tel" placeholder="Tell">
                                            </b-input>
                                        </b-field>

                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Email">
                                            <b-input type="email" v-model="nteacher.email" placeholder="Email">
                                            </b-input>
                                        </b-field>
                                    </div>

                                    <div class="col-auto">
                                        <b-field label="Gender">
                                            <b-input type="text" v-model="nteacher.gender" readonly>
                                            </b-input>

                                        </b-field>
                                    </div>
                                    <div class="col-auto">
                                        <b-field label="School">
                                            <b-input type="text" v-model="pteacher.school" readonly>
                                            </b-input>
                                        </b-field>

                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Region">
                                            <b-input type="text" v-model="pteacher.region" readonly>
                                            </b-input>

                                        </b-field>

                                    </div>


                                    <div class="col-auto">
                                        <b-field label="District">
                                            <b-input type="email" v-model="pteacher.district" readonly>
                                            </b-input>

                                        </b-field>

                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Level">
                                            <b-input type="text" v-model="nteacher.level" readonly>
                                            </b-input>

                                        </b-field>

                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Type">
                                            <b-input type="text" v-model="nteacher.type" readonly>
                                            </b-input>
                                        </b-field>

                                    </div>

                                    <div class="col-auto">
                                        <b-field label="Salary">
                                            <b-input type="text" v-model="nteacher.salary">
                                            </b-input>
                                        </b-field>
                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Account No">
                                            <b-input type="number" v-model="nteacher.acc">
                                            </b-input>
                                        </b-field>
                                    </div>
                                    <div class="col-auto">
                                        <b-field label="Date">
                                            <b-input type="date" v-model="nteacher.date">
                                            </b-input>
                                        </b-field>
                                    </div>
                                </div>




                                <hr>


                            </form>

                        </card-component>
                    </div>
                </vue-html2pdf>
            </card-component>



        </section>
    </div>
</template>
<script>
import clone from 'lodash/clone'
import VueHtml2pdf from 'vue-html2pdf'
import Tiles from '@/components/Tiles'
import CardComponent from '@/components/CardComponent'
import FilePicker from '@/components/FilePicker'
import UserAvatar from '@/components/UserAvatar'
export default {
    name: 'newteacher',
    components: { CardComponent, Tiles, FilePicker, UserAvatar, VueHtml2pdf },
    props: {
        id: {
            default: null
        }
    },
    data() {
        return {
            isLoading: false,
            item: null,
            rtype: "landscape",
            teacher: {

            },
            pteacher: null,
            nteacher: null,
            form: {

            },

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


    },
    methods: {
        async beforeDownload({ html2pdf, options, pdfContent }) {
            await html2pdf().set(options).from(pdfContent).toPdf().get('pdf').then((pdf) => {
                const totalPages = pdf.internal.getNumberOfPages()
                for (let i = 1; i <= totalPages; i++) {
                    pdf.setPage(i)
                    pdf.setFontSize(10)
                    pdf.setTextColor(150)
                    pdf.text('Page ' + i + ' of ' + totalPages, (pdf.internal.pageSize.getWidth() * 0.88), (pdf.internal.pageSize.getHeight() - 0.3))
                }
            }).save()
        },
        generateReport() {
            this.$refs.html2Pdf.generatePdf()
        },
        getData() {
            if (this.id) {
                axios
                    .get(`/bedel/${this.id}`)
                    .then(r => {
                        this.form = r.data.data


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
            axios.get('/teacher').then(r => {
                this.pteacher = r.data.data.filter(x => x.name == this.form.pteacher)[0]
                this.nteacher = r.data.data.filter(x => x.name == this.form.nteacher)[0]

            })
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
  