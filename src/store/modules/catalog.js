import axios from 'axios';

export default {
  state: {
    products: [],
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
  },
  actions: {
    GET_PRODUCTS({ commit }) {
      return axios('http://localhost:3000/products', {
        method: 'GET',
      }).then((products) => {
        commit('SET_PRODUCTS', products.data);
      }).catch((err) => {
        console.log(err);
      });
    },
  },
  getters: {
    GET_PRODUCTS_TO_STATE(state) {
      return state.products;
    },
  },
};
