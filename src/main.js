import Vue from 'vue';
import Vuelidate from 'vuelidate';
import { BootstrapVue } from 'bootstrap-vue';
import InputFacade from 'vue-input-facade';
import scrolTo from 'vue-scrollto';
import App from './App.vue';
import router from './router';
import store from './store';
import './assets/styles/custom.scss';

Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.use(scrolTo);
Vue.use(InputFacade);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
