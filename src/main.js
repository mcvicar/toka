import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Routes from "./router"
import '@aws-amplify/ui-vue';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';

Amplify.configure(awsconfig);

Vue.config.productionTip = false
Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
