import Vue from 'vue';
import Vuex from 'vuex';
import catalog from './modules/catalog';
import services from './modules/services';
import claim from './modules/claim';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    catalog,
    services,
    claim,
  },
});
