import Vue from 'nativescript-vue';
import Vuex from 'vuex';


// IMPORT MODULES 
import auth from './modules/auth';
import locale from './modules/locale';


Vue.use(Vuex);

const debug = 'debug';

const store = new Vuex.Store({
  modules: {
    auth : auth,
    locale: locale
  },
  strict: debug
});
  

Vue.prototype.$store = store;

export default store;