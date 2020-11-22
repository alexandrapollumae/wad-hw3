import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import Header from "@/components/Header";
import Login from "@/components/Login";
import Browse from "@/components/Browse";

Vue.config.productionTip = false
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {path: '/', component: Header},
  {path: '/login', component: Login},
  {path: '/browse', component: Browse}
];
const router = new VueRouter({routes});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
