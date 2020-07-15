import Vue from "nativescript-vue";
import Vuex from "vuex";

import App from "./components/App";
import Login from "./components/Login";
import Home from "./components/Home";
import DrawerContent from "./components/DrawerContent";
// import DrawerContent from "./components/DrawerMenuV2";

import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import store from './store';

Vue.config.silent = (TNS_ENV === 'production');

Vue.use(Vuex);
Vue.use(RadSideDrawer);

Vue.mixin({
  data: function() {
    return {
      domain: 'http://note.tantien.info/',
      checkLogin: false
    }
  }
});

new Vue({
    render (h) {
        return h(
          App,
          [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(this.checkLogin ? Home : Login, { slot: 'mainContent' })
          ]
        )
    },
    store
}).$start();
