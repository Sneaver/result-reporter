// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//require('bootstrap/dist/css/bootstrap.min.css');

import 'buefy/lib/buefy.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase'
import VueFire from 'vuefire'
import Buefy from 'buefy'


Vue.config.productionTip = false

Vue.use(VueFire)
Vue.use(Buefy)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
