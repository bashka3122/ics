<template>
    <div>
     
      <hero-bar>
        {{ heroTitle }}
        <router-link slot="right" to="/income/index" class="button">
          Back
        </router-link>
      </hero-bar>
      <section class="section is-main-section">
       
          <button @click="print" class="btn btn-print">
             <b-icon icon="printer" aria-hidden="true"></b-icon>Print
            
            </button>
         <card-component id="printMe"
           title="Invoice" icon="account" class="tile is-child">
           <div bgcolor="#f6f6f6" style="color: #333; height: 100%; 
           width: 100%;" height="100%" width="100%">
    <table bgcolor="#f6f6f6" cellspacing="0" style="border-collapse:
     collapse; padding: 40px; width: 100%;" width="100%">
        <tbody>
            <tr>
                <td width="5px" style="padding: 0;"></td>
                <td style="clear: both; display: block; margin: 0 auto; max-width: 600px; padding: 10px 0;">
                    <table width="100%" cellspacing="0" style="border-collapse: collapse;">
                        <tbody>
                            <tr>
                                <td style="padding: 0;">
                                    <a
                                        href="#"
                                        style="color: #348eda;"
                                        target="_blank"
                                    >
                                        <img
                                            src="images/odmis1.jpeg"
                                            alt="Bootdey.com"
                                            style="height: 50px; max-width: 100%; width: 157px;"
                                            height="50"
                                            width="157"
                                        />
                                    </a> 
                                </td>
                                <td style="color: #999; font-size: 12px; padding: 0; text-align: right;" align="right">
                                    ODMIS<br />
                                    Invoice #{{item.taxtype}}{{item.id}}<br />
                                    {{item.created}}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td width="5px" style="padding: 0;"></td>
            </tr>

            <tr>
                <td width="5px" style="padding: 0;"></td>
                <td bgcolor="#FFFFFF" style="border: 1px solid #000; clear: both; 
                display: block; margin: 0 auto; max-width: 600px; padding: 0;">
                    <table width="100%" style="background: #f9f9f9; border-bottom:
                     1px solid #eee; border-collapse: collapse; color: #999;">
                        <tbody>
                            <tr>
                                <td width="50%" style="padding: 20px;">
                                  <strong style="color: #333; font-size: 24px;">${{item.amount}}</strong> Paid</td>
                                <td align="right" width="50%" style="padding: 20px;"><span class="il">Waaxda Canshuuraha Ee Dagmada</span></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td style="padding: 0;"></td>
                <td width="5px" style="padding: 0;"></td>
            </tr>
            <tr>
                <td width="5px" style="padding: 0;"></td>
                <td style="border: 1px solid #000; border-top: 0; clear: both; display: block; margin: 0 auto; max-width: 600px; padding: 0;">
                    <table cellspacing="0" style="border-collapse: collapse; border-left: 1px solid #000; margin: 0 auto; max-width: 600px;">
                        <tbody>
                            <tr>
                                <td valign="top"  style="padding: 20px;">
                                    <h3
                                        style="
                                            border-bottom: 1px solid #000;
                                            color: #000;
                                            font-family: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
                                            font-size: 18px;
                                            font-weight: bold;
                                            line-height: 1.2;
                                            margin: 0;
                                            margin-bottom: 15px;
                                            padding-bottom: 5px;
                                        "
                                    >
                                        Summary
                                    </h3>
                                    <table cellspacing="0" style="border-collapse: collapse; margin-bottom: 40px;">
                                        <tbody>
                                            <tr>
                                                <td style="padding: 5px 0;">Tax Purpose</td>
                                                <td align="right" style="padding: 5px 0;">Tax on {{item.taxtype}}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 5px 0;">Payment Method</td>
                                                <td align="right" style="padding: 5px 0;">{{item.method}}</td>
                                            </tr>
                                            <tr>
                                                <td style="padding: 5px 0;">Collector</td>
                                                <td align="right" style="padding: 5px 0;">${{item.collector}}</td>
                                            </tr>
                                            <tr>
                                                <td style="border-bottom: 2px solid #000; border-top: 2px solid #000; font-weight: bold; padding: 5px 0;">Amount paid</td>
                                                <td align="right" style="border-bottom: 2px solid #000; border-top: 2px solid #000; font-weight: bold; padding: 5px 0;">${{item.amount}}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td width="5px" style="padding: 0;"></td>
            </tr>

            <tr style="color: #666; font-size: 12px;">
                <td width="5px" style="padding: 10px 0;"></td>
                <td style="clear: both; display: block; margin: 0 auto; max-width: 600px; padding: 10px 0;">
                    <table width="100%" cellspacing="0" style="border-collapse: collapse;">
                        <tbody>
                            <tr>
                                <td width="40%" valign="top" style="padding: 10px 0;">
                                    <h4 style="margin: 0;">Questions?</h4>
                                    <p style="color: #666; font-size: 12px; font-weight: normal; margin-bottom: 10px;">
                                        Please visit our
                                        <a
                                            href="#"
                                            style="color: #666;"
                                            target="_blank"
                                        >
                                            Support Center
                                        </a>
                                        with any questions.
                                    </p>
                                </td>
                               
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td width="5px" style="padding: 10px 0;"></td>
            </tr>
        </tbody>
    </table>
</div>
           
          </card-component>
        
      </section>
    </div>
  </template>
  <script>
  import clone from 'lodash/clone'
  import TitleBar from '@/components/TitleBar'
  import HeroBar from '@/components/HeroBar'
  import Tiles from '@/components/Tiles'
  import CardComponent from '@/components/CardComponent'
  
  import Notification from '@/components/Notification'
  
  export default {
    name: 'gradeForm',
    components: {CardComponent, Tiles, HeroBar, TitleBar, Notification },
    props: {
      id: {
        default: null
      }
    },
    data () {
      return {
        isLoading: false,
        item: null,
        form: this.getClearFormObject(),
        createdReadable: null,
      }
    },
    computed: {
      titleStack () {
        let lastCrumb
  
        if (this.isProfileExists) {
          lastCrumb = this.form.name
        } else {
          lastCrumb = 'New Grade'
        }
  
        return [
          'Admin',
          'Revenue',
          lastCrumb
        ]
      },
      heroTitle () {
        if (this.isProfileExists) {
          return this.form.name
        } else {
          return 'income'
        }
      },
      formCardTitle () {
        if (this.isProfileExists) {
          return 'Edit Grade'
        } else {
          return 'New Grade'
        }
      },
      isProfileExists () {
        return !!this.item
      }
    },
    created () {
      this.getData()
    },
    methods: {
      async print () {
      // Pass the element id here
      await this.$htmlToPaper('printMe',null, () =>{
  console.log('Printing completed or was cancelled!');
});},
      getClearFormObject () {
        return {
          id: null,
          name: null,
          amount: null,
          description: null,
          created_date: new Date(),
          created_mm_dd_yyyy: null,
         
        }
      },
      getData () {
      if (this.id) {
        axios
          .get(`/tax/${this.id}`)
          .then(r => {
            this.form = r.data.data
            this.item = clone(r.data.data)
            
            this.form.expiredate = 
            new Date(r.data.data.expiredate)
           
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
     
      submit () {
        this.isLoading = true
        let method = 'post'
        let url = '/grade/Store'
  
        if (this.id) {
          method = 'patch'
          url = `/grade/${this.id}`
        }
  
        axios({
          method,
          url,
          data: this.form
        }).then(r => {
          this.isLoading = false
  
          if (!this.id && r.data.data.id) {
            this.$router.push({name: 'grade.edit',params: {id: r.data.data.id}})
  
            this.$buefy.snackbar.open({
              message: 'Created',
              queue: false
            })
          } else {
            this.item = r.data.data
  
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
      }
    },
    watch: {
      id (newValue) {
        this.form = this.getClearFormObject()
        this.item = null
  
        if (newValue) {
          this.getData()
        }
      }
    }
  }
  </script>
  
  