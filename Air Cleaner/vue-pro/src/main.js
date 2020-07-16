import Vue from 'vue'
import App from './App.vue'
import {store} from "./store/index.js"

import router from "./route/router"

import axios from 'axios'
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)
Vue.axios.defaults.baseURL='http://101.96.128.94:9999/mfresh/data/'
Vue.axios.defaults.headers={
  "content-type":"application/x-www-form-urlencoded"
}

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
