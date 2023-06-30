<template>
<div>
    <title-bar :title-stack="['Admin', 'Finance']"/>
    <hero-bar>
     Income Statment
      <router-link to="/" class="button" slot="right">
        Home
      </router-link>
    </hero-bar>
     <section class="section is-main-section">
     <div class="container">
  <b-col md="4">
                    <form @submit.prevent="searchDateFrom">
                        <label for="">Choose File Status:</label>
                <div class="input-group">

                    <input
                        v-model="fdate"
                        type="date"
                        placeholder="Search File Status"
                        class="form-control"
                    />
                    <input
                        v-model="Sdate"
                        type="date"
                        placeholder="Search File Status"
                        class="form-control"
                    />
                    <div class="input-group-append">
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-search"></i>
                        </button>
                    </div>
                </div>
            </form>
            </b-col>
      </div>
      <p>
        {{report}}
      </p>
    <card-component class="has-table has-mobile-sort-spaced"
     title="Expense" icon="account-multiple">

    <b-table
          :checked-rows.sync="checkedRows"
          :checkable="true"
          :loading="isLoading"
          :paginated="paginated"
          :per-page="perPage"
          :striped="true"
          :hoverable="true"
          default-sort="name"
          :data="list">

            <b-table-column label="BudgetLine" field="company" sortable v-slot="props">
              {{ props.row.budgetline }}
            </b-table-column>
            <b-table-column label="amount" field="company" sortable v-slot="props">
              {{ props.row.amount }}
            </b-table-column>
          <b-table-column label="Requestedby" field="requested by" sortable v-slot="props">
              {{ props.row.requestedby }}
            </b-table-column>
            <b-table-column label="Date" v-slot="props">
              <small class="has-text-grey is-abbr-like" 
              :title="props.row.date">{{ props.row.created_at }}</small>
            </b-table-column>
           
         <b-table-footer label="Date">
            Total: 
        </b-table-footer>
          <section class="section" slot="empty">
            <div class="content has-text-grey has-text-centered">
              <template v-if="isLoading">
                <p>
                  <b-icon icon="dots-horizontal" size="is-large"/>
                </p>
                <p>Fetching data...</p>
              </template>
              <template v-else>
                <p>
                  <b-icon icon="emoticon-sad" size="is-large"/>
                </p>
                <p>Nothing's here&hellip;</p>
              </template>
            </div>
          </section>
        </b-table>
        
      </card-component>

    </section>
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
import { ref } from 'vue';
export default {
   components: {CardToolbar,HeroBar, TitleBar, ModalBox, CardComponent,Notification},
    data() {
        const errors  = ref([]);
         const a  = ref([]);
        return {
            isLoading: false,
            paginated: true,
            perPage: 10,
            list: [],
            fdate: "",
             Sdate: "",
              payee: "",
           
             errors,
            report:[],
        };
      

    },
     
   computed: {

     ...mapState(['userName','Role'])
  },
  created () {
    
    this.getList()
  },
    methods: {
     
  searchDateFrom(){
      axios.post('/expense/getDate', { params: { fdate: this.fdate, 
      Sdate:this.Sdate, payee:this.payee} })
                .then(response => this.report = response.data)
                .catch(error => {});
    },
    getList()  {
      this.isLoading = true
            axios
                .get("expense")
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
   
    },
    watch: {
       Role (newValue) {
     this.a = newValue
  }
    },

    mounted() {
    this.getList();
    },
};
</script>