import axios from 'axios';

export default {
  state: {
    post: '',
  },
  mutations: {
    ADD_POST(state, resp) {
      state.post = resp;
    },
  },
  actions: {
    POST_CLAIM({ commit }, data) {
      return axios.post('https://peaceful-harbor-09047.herokuapp.com/api/send', data,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }).then((resp) => {
        commit('ADD_POST', resp);
        return resp;
      }).catch((e) => e);
    },
  },
  getters: {},
};
