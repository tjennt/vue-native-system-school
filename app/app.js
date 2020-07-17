// Import vue, vuex, localstorage
import Vue from "nativescript-vue";
import Vuex from "vuex";
import * as AppSetting from "application-settings";

// Import components: app, login, home
import App from "./components/App";
import Login from "./components/Login";
import Home from "./components/Home";

// Import menu app
import DrawerContent from "./components/DrawerContent";
// import DrawerContent from "./components/DrawerMenuV2";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";

// Import data vuex
import store from './store';


Vue.config.silent = (TNS_ENV === 'production');

Vue.use(Vuex);
Vue.use(RadSideDrawer);


Vue.mixin({
  computed: {
    checkLogin() {
      let token = AppSetting.getString('token');
      if(token){
        this.$store.commit("setToken", token);
        return true;
      }
      return false;
    }
  },
  data() {
    return {
      domain: 'http://api.tantien.info/'
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
