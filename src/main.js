import Vue from 'vue';
import { BootstrapVue } from 'bootstrap-vue';
import scrolTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/custom.scss';

Vue.use(BootstrapVue);
Vue.use(scrolTo);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
