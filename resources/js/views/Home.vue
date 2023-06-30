<template>
  <div>
    <title-bar :title-stack="titleStack" />
    <hero-bar :has-right-visible="false">

    </hero-bar>
    <section class="section is-main-section">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.12.1/css/all.min.css"
        integrity="sha256-mmgLkCYLUQbXn0B1SRqzHar6dCnv9oZFPEC1g1cwlkk=" crossorigin="anonymous" />

      <card-component title="" class="has-table has-mobile-sort-spaced">

        <div class="col-md-10 ">
          <div class="row ">

            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-blue-dark">
                <div class="card-statistic-3 p-4">
                  <div class="card-icon card-icon-large">
                    <i class="fas fa-building-columns"></i>
                  </div>
                  <div class="mb-4">
                    <h5 class="card-title mb-0">Projects</h5>
                  </div>
                  <div class="row align-items-center mb-2 d-flex">
                    <div class="col-8">
                      <h2 class="d-flex align-items-center mb-0">
                        {{ project.length }}
                      </h2>
                    </div>

                  </div>
                  <div class="progress mt-1 " data-height="8" style="height: 8px;">
                    <div class="progress-PaymentsControllerbar l-bg-orange" role="progressbar" data-width="25%"
                      aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                  </div>

                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-orange-dark">
                <div class="card-statistic-3 p-4">
                  <div class="card-icon card-icon-large">
                    <i class="bi bi-image-alt"></i>
                  </div>
                  <div class="mb-4">
                    <h5 class="card-title mb-0">Schools</h5>
                  </div>
                  <div class="row align-items-center mb-2 d-flex">
                    <div class="col-8">
                      <h2 class="d-flex align-items-center mb-0">
                        {{ school.length }}
                      </h2>
                    </div>
                    <div class="col-4 text-right">
                      <span> <i class="fa fa-arrow-up"></i></span>
                    </div>
                  </div>
                  <div class="progress mt-1 " data-height="8" style="height: 8px;">
                    <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25"
                      aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-green-dark">
                <div class="card-statistic-3 p-4">
                  <div class="card-icon card-icon-large"><i class="fas fa-ticket-alt"></i></div>
                  <div class="mb-4">
                    <h5 class="card-title mb-0">Teachers</h5>
                  </div>
                  <div class="row align-items-center mb-2 d-flex">
                    <div class="col-8">
                      <h2 class="d-flex align-items-center mb-0">
                        {{ teacher.length }}
                      </h2>
                    </div>
                    <div class="col-4 text-right">
                      <span><i class="fa fa-arrow-up"></i></span>
                    </div>
                  </div>
                  <div class="progress mt-1 " data-height="8" style="height: 8px;">
                    <div class="progress-PaymentsControllerbar l-bg-orange" role="progressbar" data-width="25%"
                      aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-xl-3 col-lg-6">
              <div class="card l-bg-cherry">
                <div class="card-statistic-3 p-4">
                  <div class="card-icon card-icon-large">
                    <i class="bi bi-database-check"></i>
                  </div>
                  <div class="mb-4">
                    <h5 class="card-title mb-0">Substitutions </h5>
                  </div>
                  <div class="row align-items-center mb-2 d-flex">
                    <div class="col-8">
                      <h2 class="d-flex align-items-center mb-0">
                        {{ bedel.length }}

                      </h2>
                    </div>
                    <div class="col-4 text-right">
                      <span><i class="bi bi-arrow-down-up"></i></span>
                    </div>
                  </div>
                  <div class="progress mt-1 " data-height="8" style="height: 8px;">
                    <div class="progress-bar l-bg-cyan" role="progressbar" data-width="25%" aria-valuenow="25"
                      aria-valuemin="0" aria-valuemax="100" style="width: 25%;"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </card-component>
      <tiles>
        <!-- <card-component title="Expense by Budgetline" 
     class="tile is-child">
        
       <b-table
          
          :loading="isLoading"
          
          :data="budget">

            <b-table-column label="BudgetLine" field="company" sortable v-slot="props">
              {{props.row.budgetline}}
            </b-table-column>
            <b-table-column label="Amount" field="company" sortable v-slot="props">
              {{props.row.amount}}
            </b-table-column>
            </b-table>
      </card-component>
      <card-component title="Revenue by Sources" 
     class="tile is-child">
     <b-table
          
          :loading="isLoading"
          
          :data="income">

            <b-table-column label="Tax" field="company" sortable v-slot="props">
              {{props.row.taxtype}}
            </b-table-column>
            <b-table-column label="Amount" field="company" sortable v-slot="props">
              {{props.row.amount}}
            </b-table-column>
      </b-table>
      <b-table
        
          :data="grant">

            <b-table-column label="Grants" field="company" sortable v-slot="props">
              {{props.row.taxtype}}
            </b-table-column>
            <b-table-column label="Amount" field="company" sortable v-slot="props">
              {{props.row.amount}}
            </b-table-column>
      </b-table>
    
     </card-component> -->
      </tiles>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src
import * as chartConfig from '@/components/Charts/chart.config'
import TitleBar from '@/components/TitleBar'
import HeroBar from '@/components/HeroBar'
import Tiles from '@/components/Tiles'
import CardWidget from '@/components/CardWidget'
import CardComponent from '@/components/CardComponent'
import axios from 'axios'
export default {
  name: 'home',
  components: {
    CardComponent,
    CardWidget,
    Tiles,
    HeroBar,
    TitleBar
  },
  data() {
    return {
      teacher: '',
      bedel: '',
      school: '',
      project: '',


      isLoading: false,

    }
  },
  computed: {
    titleStack() {
      return [
        'Admin',
        'Dashboard',

      ]
    }
  },
  created() {
    this.getList()



  },
  mounted() {
    this.$buefy.snackbar.open({
      message: 'Welcome back',
      queue: false
    })
  },
  methods: {

    getList() {
      axios.get('/setting/dash').then(r => {
        this.project = r.data.project
        this.school = r.data.school
        this.teacher = r.data.teacher
        this.bedel = r.data.bedel

      })
    },


  }
}
</script>
<style >
.card {
  background-color: #fff;
  border-radius: 10px;
  border: none;
  position: relative;
  margin-bottom: 30px;
  box-shadow: 0 0.46875rem 2.1875rem rgba(90, 97, 105, 0.1), 0 0.9375rem 1.40625rem rgba(90, 97, 105, 0.1), 0 0.25rem 0.53125rem rgba(90, 97, 105, 0.12), 0 0.125rem 0.1875rem rgba(90, 97, 105, 0.1);
}

.l-bg-cherry {
  background: linear-gradient(to right, #493240, #f09) !important;
  color: #fff;
}

.l-bg-blue-dark {
  background: linear-gradient(to right, #373b44, #4286f4) !important;
  color: #fff;
}

.l-bg-green-dark {
  background: linear-gradient(to right, #0a504a, #38ef7d) !important;
  color: #fff;
}

.l-bg-orange-dark {
  background: linear-gradient(to right, #a86008, #ffba56) !important;
  color: #fff;
}

.card .card-statistic-3 .card-icon-large .fas,
.card .card-statistic-3 .card-icon-large .far,
.card .card-statistic-3 .card-icon-large .fab,
.card .card-statistic-3 .card-icon-large .fal {
  font-size: 110px;
}

.card .card-statistic-3 .card-icon {
  text-align: center;
  line-height: 50px;
  margin-left: 15px;
  color: #000;
  position: absolute;
  right: -5px;
  top: 20px;
  opacity: 0.1;
}

.l-bg-cyan {
  background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
  color: #fff;
}

.l-bg-green {
  background: linear-gradient(135deg, #23bdb8 0%, #43e794 100%) !important;
  color: #fff;
}

.l-bg-orange {
  background: linear-gradient(to right, #f9900e, #ffba56) !important;
  color: #fff;
}

.l-bg-cyan {
  background: linear-gradient(135deg, #289cf5, #84c0ec) !important;
  color: #fff;
}
</style>