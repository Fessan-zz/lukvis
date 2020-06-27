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
      return axios('https://peaceful-harbor-09047.herokuapp.com/api/products', {
        method: 'GET',
      }).then((products) => {
        commit('SET_PRODUCTS', products.data);
        return products;
      }).catch((err) => {
        console.log(err);
        return err;
      });
    },
  },
  getters: {
    GET_PRODUCTS_TO_STATE(state) {
      return state.products;
    },
  },
};
