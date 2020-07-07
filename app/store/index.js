import Vue from 'nativescript-vue';
import Vuex from 'vuex';

import shipStore from './modules/shipStore.js';
import gobal from './modules/gobal.js';

Vue.use(Vuex);

const debug = 'debug';

const store = new Vuex.Store({
    state: {
      items: [],
      bills: 50000,
      processingTasks: [],
    //   this.$store.state.shipStore.state.bill
      shipStore,
      gobal
    },
    strict: debug,
});
  

Vue.prototype.$store = store;

export default store;