import axios from 'axios';

export default {
  state: {
    services: [],
  },
  mutations: {
    SET_SERVICES(state, services) {
      state.services = services;
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
  },
  getters: {
    GET_SERVICES_TO_STATE(state) {
      return state.services;
    },
  },
};
