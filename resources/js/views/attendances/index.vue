<template>
    <div>

        <div class="is-right">
            projects
            <router-link slot="right" to="/att/index" class="button" style="margin-left: 900px; margin-top: 30px;">
                Back
            </router-link>
        </div>
        <section class="section is-main-section">
            <tiles>

                <card-component v-if="isProfileExists" title="Attendance Report" icon="account" class=""
                    style="width:100%; overflow:hidden">
                    <div v-if="item.file_id">
                        <form @submit.prevent="submit">
                            <a :href="item.avatar" target="blank">Download File</a>
                            <b-field label="file upload">
                                <file-picker @file-id-updated="fileIdUpdated" :current-file="form.avatar_filename"
                                    required />
                                <b-button type="is-primary" :loading="isLoading" native-type="submit">Update File</b-button>
                            </b-field>
                        </form>
                    </div>
                    <div v-else>
                        <form @submit.prevent="submit">

                            <b-field label="file upload">
                                <file-picker @file-id-updated="fileIdUpdated" :current-file="form.avatar_filename"
                                    required />
                                <b-button type="is-primary" :loading="isLoading" native-type="submit">Save File</b-button>
                            </b-field>
                        </form>
                    </div>



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


                            <input type="hidden" id="start-date" v-model="form.startDate">

                            <input type="hidden" id="end-date" v-model="form.endDate">
                            <center>
                                <h2>Attendance report</h2>
                                <h2> NB: head teacher must use ( Ö=Present, A= Absent, S= Sick, L = leave)
                                </h2>
                                <hr>

                                <h1 class="">Month: {{ item.month }}</h1>

                                <h1 class="">Project: {{ item.project }}</h1>
                                <h1 class="">School: {{ item.school }}</h1>
                                <hr style="background-color:blue;">




                            </center>






                            <table class="" style="width:auto; overflow:hidden;">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col" v-for="date in  dateArray " :key="date">

                                            <p v-if="formatDate(date) == 'Fri' || formatDate(date) == 'Thu'">

                                            </p>
                                            <p v-else>
                                                {{ formatDate(date) }}
                                                {{ dayname(date) }}
                                            </p>
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(row, index)   in   teachers  " :key="index">
                                        <td>{{ index + 1 }}</td>
                                        <td>{{ row.name }}</td>

                                        <td v-for="date in  dateArray" :key="date" style="border-right: 1px dashed #333;">

                                        </td>




                                    </tr>
                                </tbody>

                            </table>
                        </div>
                    </vue-html2pdf>
                </card-component>
                <card-component title="New Attendance" icon="account-edit" class="col-lg-8 col-xs-12 col-centered" v-else>

                    <form @submit.prevent="submit">

                        <div>
                            <label for="start-date">Start Date:</label>
                            <input type="date" id="start-date" v-model="form.startDate" @change="validateInput">
                            <div v-if="startDateError" class="error">{{ startDateError }}</div>
                        </div>



                        <div>
                            <label for="end-date">End Date:</label>
                            <input type="date" id="end-date" v-model="form.endDate" @change="validateInput">
                            <div v-if="endDateError" class="error">{{ endDateError }}</div>
                        </div>
                        <div v-if="monthError" class="error">{{ monthError }}</div>

                        you selected <input type="text" v-model="form.month" readonly />
                        <b-field label="Project" placeholder="Select Project" required>
                            <b-select v-model="form.project">
                                <option v-for="(project, index) in project" :key="index" :value="project.name">
                                    {{ project.name }}
                                </option>
                            </b-select>

                        </b-field>
                        <b-field label="School" placeholder="Select school" required>
                            <b-select v-model="form.school">
                                <option v-for="(school, index) in school" :key="index" :value="school.name">
                                    {{ school.name }}
                                </option>
                            </b-select>

                        </b-field>



                        <hr>
                        <b-field horizontal>
                            <b-button type="is-primary" :loading="isLoading" native-type="submit"
                                :disabled="savebtn">Save</b-button>
                        </b-field>
                    </form>
                </card-component>

            </tiles>
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
            show: true,
            startDate: '',
            endDate: '',
            dateArray: [],
            startDateError: '',
            endDateError: '',
            monthError: '',
            date: new Date(),
            isLoading: false,
            item: null,
            school: null,
            project: null,
            teachers: null,
            savebtn: true,
            rtype: "landscape",
            form: {

            },


        }
    },
    computed: {
        isProfileExists() {
            return !!this.item
        },
        thismonth() {
            const date = new Date(this.form.startDate);
            const month = date.toLocaleString('default', { month: 'long' });
            const year = new Date().getFullYear()
            this.form.month = month + year;
            return month;
        },
        endmonth() {
            const date = new Date(this.form.endDate);
            const lmonth = date.toLocaleString('default', { month: 'long' });
            return lmonth;
        }

    },
    created() {
        this.getData()
        this.getSchools()
        this.getProjects()
        this.getDates()

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
        getDates() {
            if (this.form.startDate && this.form.endDate) {
                const start = new Date(this.form.startDate);
                const end = new Date(this.form.endDate);
                const days = Math.floor((end - start) / (1000 * 60 * 60 * 24));
                this.dateArray = [];
                for (let i = 0; i <= days; i++) {
                    const currentDate = new Date(start.getTime() + (i * 24 * 60 * 60 * 1000));
                    this.dateArray.push(currentDate);
                }
            }
        },
        formatDate(date) {
            const dayName = date.toString().split(' ')[0];
            const day = date.getDate().toString().padStart(2, '0');
            const day1 = date.getDate().toString();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const year = date.getFullYear().toString();


            return `${dayName}`;
        },
        dayname(date) {
            const day1 = date.getDate().toString();
            return `${day1}`;
        },
        validateInput() {
            const start = new Date(this.form.startDate);
            const end = new Date(this.form.endDate);
            this.startDateError = '';
            this.endDateError = '';
            if (start > end) {
                this.savebtn = true
                this.startDateError = 'Start date must be before end date';
            }
            else if (this.thismonth != this.endmonth) {
                this.savebtn = true
                this.monthError = "Attendance start date and end date will be based on one month";
            }
            else {
                this.monthError = '';
                this.savebtn = false
            }
        },




        fileIdUpdated(fileId) {
            this.form.file_id = fileId
            this.form.avatar_filename = null
        },
        getData() {
            if (this.id) {
                axios
                    .get(`/att/${this.id}`)
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
        getTeachers() {
            axios.get('teacher').then(r => {
                this.teachers = r.data.data.filter(x => x.project == this.form.project && x.school == this.form.school)
            })
        },
        getSchools() {
            axios.get('/school').then(r => {
                this.school = r.data.data
            })
        },
        getProjects() {
            axios.get('/project').then(r => {
                this.project = r.data
            })
        },
        submit() {
            this.isLoading = true
            let method = 'post'
            let url = '/att/Store'

            if (this.id) {
                method = 'patch'
                url = `/att/${this.id}`
            }

            axios({
                method,
                url,
                data: this.form
            }).then(r => {
                this.isLoading = false

                if (!this.id && r.data.data.id) {
                    this.$router.push({ name: 'att.edit', params: { id: r.data.data.id } })

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

        "form.school"(newValue) {
            this.getTeachers()
            this.getDates()
        },
        "form.project"(newValue) {
            this.getTeachers()
            this.getDates()
        },
        id(newValue) {

            this.item = null

            if (newValue) {
                this.getData()
                this.getDates()
            }
        }
    }
}
</script>
<style scoped>
.table {
    width: auto;
}

td {
    border: 1px solid #000;
}

tr td:last-child {
    width: 1%;
    white-space: nowrap;
}

thead {
    background-color: lightblue;
    border: 1px solid #000;
}

.error {
    color: red;
}
</style>