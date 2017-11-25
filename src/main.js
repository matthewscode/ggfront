// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

require('../plugins/switchery/switchery.min.css')
require('../plugins/jquery-circliful/css/jquery.circliful.css')
require('./assets/css/bootstrap.min.css')
require('./assets/css/icons.css')
require('./assets/css/style.css')
require('./assets/images/favicon.ico')

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false
var apiUrl = 'http://localhost:8080/api';
/* eslint-disable no-new */
new Vue({
  el: '#app',
      router,
  template: '<App/>',
  components: { App },
  data: function() { return {apiUrl: apiUrl}}
});

