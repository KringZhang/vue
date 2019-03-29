// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios from 'axios'

Vue.use(ElementUI)
Vue.config.productionTip = false

axios.defaults.baseURL = 'http://localhost:8080/api';
Vue.prototype.$axios = axios;
axios.interceptors.request.use(config => {
    console.log(config)
	return config;
}, error => {
	return Promise.reject(error);
});
axios.interceptors.response.use(response => {
    console.log(response)
	return response;
}, error => {
	return Promise.reject(error);
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
