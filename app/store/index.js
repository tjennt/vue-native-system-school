import Vue from 'nativescript-vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const debug = 'debug';

const store = new Vuex.Store({
    state: {
      checkLogin: true
    },
    actions: {
      chageLogin({ commit }) {
          commit('setChangeLogin')
      }
  },
  mutations: {
    setChangeLogin: state => state.checkLogin = !state.checkLogin,
  },
    strict: debug,
});
  

Vue.prototype.$store = store;

export default store;