// Axios & Echo global
require('./bootstrap');

/* Core */
import Vue from 'vue'
import Buefy from 'buefy'

/* Router & Store */
import router from './router'
import store from './store'
//v-select
import vSelect from "vue-select";

Vue.component("v-select", vSelect);
/* Vue. Main component */
import App from './App.vue'
//select 2
import Select2 from 'v-select2-component';

Vue.component('Select2', Select2);

/* Collapse mobile aside menu on route change */
router.afterEach(() => {
  store.commit('asideMobileStateToggle', false)
})
import "vue-select/dist/vue-select.css"
Vue.config.productionTip = false

/* Main component */
Vue.component('App', App)

/* Buefy */
Vue.use(Buefy)

/* This is main entry point */

new Vue({
  store,
  router,
  render: h => h(App),
  mounted() {
    document.documentElement.classList.remove('has-spinner-active')
  }
}).$mount('#app')
