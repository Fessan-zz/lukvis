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
      return axios('http://localhost:3000/services', {
        method: 'GET',
      }).then((item) => {
        commit('SET_SERVICES', item.data);
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  getters: {
    GET_SERVICES_TO_STATE(state) {
      return state.services;
    },
  },
};
