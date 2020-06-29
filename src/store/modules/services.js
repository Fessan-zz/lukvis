import axios from 'axios';

export default {
  state: {
    services: [],
    servicesItem: {},
  },
  mutations: {
    SET_SERVICES(state, services) {
      state.services = services;
    },
    SET_SET_SERVICES_ITEM(state, item) {
      state.servicesItem = item;
    },
  },
  actions: {
    GET_SERVICES({ commit }) {
      return axios('https://peaceful-harbor-09047.herokuapp.com/api/services', {
        method: 'GET',
      }).then((item) => {
        commit('SET_SERVICES', item.data);
        return item;
      }).catch((err) => {
        console.log(err);
        return err;
      });
    },
    GET_SERVICES_ITEM({ commit }, id) {
      return axios(`https://peaceful-harbor-09047.herokuapp.com/api/services/${id}`, {
        method: 'GET',
      }).then((response) => {
        commit('SET_SET_SERVICES_ITEM', response.data);
        return response;
      }).catch((err) => {
        console.log(err);
        return err;
      });
    },
  },
  getters: {
    GET_SERVICES_TO_STATE(state) {
      return state.services;
    },
    GET_SERVICES_ITEM_TO_STATE(state) {
      return state.servicesItem;
    },
  },
};
