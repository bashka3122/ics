<template>
<div>
   
    <hero-bar>
     Expense Report 
      <router-link to="/" class="button" slot="right">
        Home
      </router-link>
    </hero-bar>
    <section class="section is-main-section">
      <tiles>
       
      <card-component :title="Eaxpense" icon="account-edit" class="tile is-child">

                    <form @submit.prevent="searchDateFrom">
                        
               
                  <b-field label="Expense" horizontal>
                        <b-select placeholder="Select Report" v-model="form.type" required>
                          <optgroup label="Expenses"></optgroup>
                          <option value="expense"> Expense  </option>
                          <optgroup label="Expense By Budgetline"></optgroup>
                          <option v-for="(department, index) in budget" :key="index" 
                          :value="department">
                            {{ department }}
                          </option>
                        </b-select>
                 </b-field>
                <b-field label="From" horizontal>
                    <input
                        v-model="form.fdate"
                        type="date"
                        placeholder="Search File Status"
                        class="form-control"
                        required
                    />
                    </b-field>
                    <b-field label="To" horizontal>
                    <input
                        v-model="form.Sdate"
                        type="date"
                        placeholder="Search File Status"
                        class="form-control"
                        required
                    />
                    </b-field>
                    
                    
                      <b-field horizontal>
                        <button type="submit" class="btn btn-primary">
                            <i class="fas fa-search">search</i>
                        </button>
                      </b-field>
                    
               
            </form>
            <br>
            
     </card-component>
   <div v-if="Printpart=='a'">
 
       <button @click="print" class="btn btn-print">
             <b-icon icon="printer" aria-hidden="true"></b-icon>Print
            
            </button>
           
      <card-component id="printMe" class="tile is-child"
     title="Expense" icon="account-multiple">
    <b-image
            :src="'images/shot.png'"

            alt="Logo"
           
        ></b-image>
      
        <h2>Expense Report</h2>
            <table id="example" class="table table-striped table-bordered" 
        style="width:100%">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">budgetline</th>
                    <th scope="col">payee</th>
                    <th scope="col">Amount</th>
                        <th>Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="row of report" :key="row.id">
                <td>{{ row.id }}</td>
                    <td>{{ row.budgetline }}</td>
                    <td>{{ row.payee }}</td>
                    <td>{{ row.blance }}</td>
                    <td>{{ row.created_at }}</td>
                  
                        
                </tr>
            </tbody>
           <tfoot style="background-color:green;">
            <tr v-for="row of total" :key="row.id" >
              <td></td>
              <td></td>
              <td></td>
            <td >Total:{{row.blance}}</td>
            </tr>
           </tfoot>
        </table>
 
        
      </card-component>
    </div>
    
   </tiles>
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
            output: null,
            isLoading: false,
            paginated: true,
            perPage: 10,
            budget:[],
            list: [],
form: {
              fdate: "",
             Sdate: "",
              
            },
            
            Printpart:"",
             errors,
             total:[],
             type:[],
            report:[],
        };
      

    },
     
   computed: {

     ...mapState(['userName','Role'])
  },
  created () {
    this.getBudgetline()
    this.getList()
  },
    methods: {
     async print () {
      // Pass the element id here
      await this.$htmlToPaper('printMe',null, () =>{
  console.log('Printing completed or was cancelled!');
});},
getBudgetline(){
             axios
                .get("payments/revenue")
                .then((res) => {
                    console.log(res);
                    this.budget = res.data;
                })
                .catch((e) => {
                    console.log(e);
                });
    },
  searchDateFrom(){
      axios.post('/expense/getDate',this.form)
                .then(response => {
                  this.Printpart="a"
                  this.type = response.data.type;
                this.report = response.data.data;
                this.total=response.data.amount;
                })
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