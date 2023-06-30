<template>
    <div>
        
        <hero-bar>
         Income Report 
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
                        
                          <option value="statement"> Income Statement  </option>
                          <optgroup label="Income By Sources"></optgroup>
                          <option value="shops">Tax on shops</option>
                          <option value="livestock">Tax on Livestock</option>
                          <option value="vehicles">Tax on Vehicles</option>
                          <option value="fees">Tax on Fees & charges</option>
                          <option value="grant">Grants</option>
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
    <div v-if="type=='shops'">
                <card-component id="printMe" class="tile is-child"
                title="Tax on shops" icon="account-multiple">
        
                <b-image
            :src="'images/otech-dis.PNG'"
          
            alt="Logo"
           
        ></b-image>
            <div class="col-md-12 text-center">
            <h2>Tax on Shops Report</h2>
            
            </div>
                <table id="example" class="table table-striped table-bordered" 
            style="width:100%">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Shop Name</th>
                        <th scope="col">Location</th>
                        <th scope="col">Grade</th>
                        <th scope="col">Data Entry</th>
                        <th scope="col">Collector</th>
                        <th scope="col">Method</th>
                        <th scope="col">Amount</th>
                            <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row of report" :key="row.id">
                    <td>{{ row.id }}</td>
                        <td>{{ row.name }}</td>
                        <td>{{ row.location }}</td>
                        <td>{{ row.grade }}</td>
                        <td>{{ row.Entry }}</td>
                        <td>{{ row.collector }}</td>
                        <td>{{ row.method }}</td>
                        <td>{{ row.amount }}</td>
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
    <div v-if="type=='livestock'">
                <card-component id="printMe" class="tile is-child"
                title="Tax on Livestocks" icon="account-multiple">
        
                <b-image
            :src="'images/otech-dis.PNG'"
          
            alt="Logo"
           
        ></b-image>
            <h2>Income From Tax on Livestocks</h2>
                <table id="example" class="table table-striped table-bordered" 
            style="width:100%">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Area</th>
                        <th scope="col">Collector</th>
                        <th scope="col">Data Entry</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Note</th>
                    
                            <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row of report" :key="row.id">
                    <td>{{ row.id }}</td>
                        <td>{{ row.area }}</td>
                        <td>{{ row.name }}</td>
                        <td>{{ row.Entry }}</td>
                        <td>{{ row.amount }}</td>
                        <td>{{ row.note }}</td>
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
    <div v-if="type=='fees'">
                <card-component id="printMe" class="tile is-child"
                title="Tax on Fees & Charges" icon="account-multiple">
        
                <b-image
            :src="'images/otech-dis.PNG'"
          
            alt="Logo"
           
        ></b-image>
        
            <h2>Income From Tax on Fees & charges</h2>
                <table id="example" class="table table-striped table-bordered" 
            style="width:100%">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Fullname</th>
                        <th scope="col">Location</th>
                        <th scope="col">responsible</th>
                        <th scope="col">Type</th>
                        <th scope="col">collector</th>
                        <th scope="col">Data Entry</th>
                        <th scope="col">Method</th>

                        <th scope="col">Amount</th>
                       
                    
                            <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row of report" :key="row.id">
                    <td>{{ row.id }}</td>
                        <td>{{ row.name }}</td>
                        <td>{{ row.location }}</td>
                        <td>{{ row.responsible }}</td>
                        <td>{{ row.type }}</td>
                        <td>{{ row.collector }}</td>
                        <td>{{ row.Entry }}</td>
                        <td>{{ row.method }}</td>
                        <td>{{ row.amount }}</td>
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
    <div v-if="type=='vehicles'">
                <card-component id="printMe" class="tile is-child"
                title="Tax on Vehicles" icon="account-multiple">
        
                <b-image
            :src="'images/otech-dis.PNG'"
          
            alt="Logo"
           
        ></b-image>
        
            <h2>Income From Tax on Fees & charges</h2>
                <table id="example" class="table table-striped table-bordered" 
            style="width:100%">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Owner</th>
                        
                        <th scope="col">Taargo</th>
                        <th scope="col">Type</th>
                        <th scope="col">collector</th>
                        <th scope="col">Data Entry</th>
                        <th scope="col">Method</th>

                        <th scope="col">Amount</th>
                       
                    
                            <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row of report" :key="row.id">
                    <td>{{ row.id }}</td>
                        <td>{{ row.owner }}</td>
                        <td>{{ row.taarko }}</td>
                        
                        <td>{{ row.type }}</td>
                        <td>{{ row.collector }}</td>
                        <td>{{ row.Entry }}</td>
                        <td>{{ row.method }}</td>
                        <td>{{ row.amount }}</td>
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
    <div v-if="type=='grant'">
                <card-component id="printMe" class="tile is-child"
                title="Grants" icon="account-multiple">
        
                <b-image
            :src="'images/otech-dis.PNG'"
          
            alt="Logo"
           
        ></b-image>
        
            <h2>Income From Grants</h2>
                <table id="example" class="table table-striped table-bordered" 
            style="width:100%">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">doner</th>
                        
                        <th scope="col">Purpose</th>
                        <th scope="col">responsible</th>
                         <th scope="col">Amount</th>
                         <th scope="col">Note</th>
                         <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="row of report" :key="row.id">
                    <td>{{ row.id }}</td>
                        <td>{{ row.doner }}</td>
                        <td>{{ row.purpose }}</td>
                        
                        <td>{{ row.responsible }}</td>
                        <td>{{ row.amount }}</td>
                        <td>{{ row.note }}</td>
                     
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
    <div v-if="type=='statement'">
         <div class="container" id="printMe">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 body-main">
                        <div class="col-md-12">
                        
                            <br />
                            <div class="row">
                                <b-image
                          :src="'images/otech-dis.PNG'"
          
                        alt="Logo"
           
        ></b-image>
                            </div>
                            <div class="row">
                         
                                <div class="col-md-12 text-center">
                                    <h1>Income Statement</h1>
                                    <h5>From {{from}} To {{to}}</h5>
                                </div>
                            </div>
                            <br />
                            <div>
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th><h5><strong>Income</strong></h5></th>
                                            <th ><h5><strong>Amount</strong></h5></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr  >
                                            <td class="col-md-9">Grants</td>
                                            <td class="col-md-3"><i class="fas fa-rupee-sign" area-hidden="true"></i>{{sumgrants}}</td>
                                        </tr>
                                        <tr  >
                                            <td class="col-md-9">Tax</td>
                                            <td class="col-md-3"><i class="fas fa-rupee-sign" area-hidden="true"></i> {{sumtax}} </td>
                                        </tr>
                                        <tr >
                                            <td class="col-md-9">Total Income</td>
                                            <td class="col-md-3"><i class="fas fa-rupee-sign" area-hidden="true"></i> {{all}} </td>
                                        </tr>
                                        <tr >
                                            <td class="col-md-9"><strong>Expense</strong></td>
                                            <td class="col-md-3"><i class="fas fa-rupee-sign" area-hidden="true"></i> <strong>Amount</strong> </td>
                                        </tr>
                                        <tr v-for="row of budget">
                                            <td class="col-md-9">{{row.budgetline}}</td>
                                            <td class="col-md-3">
                                        <i class="fas fa-rupee-sign" area-hidden="true"></i> {{row.amount}} </td>
                                 </tr>
                                 <tr v-for="row of expense">
                                            <td class="col-md-9">Total Expense</td>
                                            <td class="col-md-3"><i class="fas fa-rupee-sign" area-hidden="true"></i> {{row.amount}} </td>
                                 </tr>
                                       
                                       
                                    </tbody>
                                </table>
                              
                             
                               
                            </div>
                            <div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        
    </div>
    
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
                list: [],
    form: {
                  fdate: "",
                 Sdate: "",
                  
                },
                from:"",
                to:"",
                Printpart:"",
                 errors,
                 budget:[],
                 expense:[],
                 type:[],
                 tax:[],
                 all:[],
                 grants:[],
                 sumgrants:[],
                 sumtax:[],
                report:[],
                total:[],
            };
          
    
        },
         
       computed: {
    
         ...mapState(['userName','Role'])
      },
      created () {
        
        this.getList()
      },
        methods: {
         async print () {
          // Pass the element id here
          await this.$htmlToPaper('printMe',null, () =>{
      console.log('Printing completed or was cancelled!');
    });},
      searchDateFrom(){
          axios.post('/expense/getDate',this.form)
                    .then(response => {
                    this.Printpart="a";
                    this.budget = response.data.budget;
                    this.sumgrants = response.data.sumgrants;
                    this.all=response.data.all;
                    this.expense = response.data.expense;
                    this.sumtax = response.data.sumtax;
                    this.report = response.data.data;
                    this.type = response.data.type;
                    this.from = response.data.fdate;
                    this.to = response.data.sdate;
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
    <style>
         .body-main {
        background: #ffffff;
        border-bottom: 15px solid #1E1F23;
        border-top: 15px solid #1E1F23;
        margin-top: 30px;
        margin-bottom: 30px;
        padding: 40px 30px !important;
        position: relative ;
        box-shadow: 0 1px 21px #808080;
        font-size:10px;
        
        
        
    }

    .main thead {
		background: #1E1F23;
        color: #fff;
		}
    
    h1{
       text-align: center;
    }

    
    </style>