import axios from 'axios';

export default {
  state: {
    products: [],
    productItem: {},
  },
  mutations: {
    SET_PRODUCTS(state, products) {
      state.products = products;
    },
    SET_PRODUCT_ITEM(state, item) {
      state.productItem = item;
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
    GET_PRODUCT_ITEM({ commit }, id) {
      return axios(`https://peaceful-harbor-09047.herokuapp.com/api/products/${id}`, {
        method: 'GET',
      }).then((response) => {
        commit('SET_PRODUCT_ITEM', response.data);
        return response;
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
    GET_PRODUCT_ITEM_TO_STATE(state) {
      return state.productItem;
    },
  },
};
