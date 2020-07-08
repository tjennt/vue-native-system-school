import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = 'debug';

const store = new Vuex.Store({
    state: {
      checkLogin: true,
      nameApp: 'POLYTECHNIC',
      authHeader: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      authHeaderApi: {
        'Authorization': ''
      }
    },
    actions: {
      chageLogin({ commit }) {
          commit('setChangeLogin')
      }
  },
  mutations: {
    setChangeLogin: (state, status) => state.checkLogin = status,
    setToken: (state, token) => state.authHeaderApi.Authorization = 'Bearer ' + token
  },
    strict: debug,
});
  

Vue.prototype.$store = store;

export default store;