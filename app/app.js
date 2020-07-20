// Import vue, vuex, localstorage
import Vue from "nativescript-vue";
import Vuex from "vuex";
import * as AppSetting from "application-settings";

// Import components: app, login, home
import App from "./components/App";
import Login from "./components/Login";
import Home from "./components/Home";


// Import home student 
import HomeStudent from "./components/Student/Home";
import DrawerContentStudent from "./components/Student/DrawerContent";

// Import menu app
import DrawerContent from "./components/DrawerContent";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";

// Import data vuex
import store from './store';


Vue.config.silent = (TNS_ENV === 'production');

Vue.use(Vuex);
Vue.use(RadSideDrawer);

Vue.mixin({
  components: {
    HomeStudent,
    DrawerContentStudent,
    Home
  },
  computed: {
    checkLogin() {
      let token = AppSetting.getString('token');
      if(token){
        this.$store.commit("setToken", token);
        return true;
      }
      return false;
    },
    redirectHome() {
      return this.Student.Home;
    },
    drawerContent() {
      return this.Student.DrawerContent;
    }
  },
  data() {
    return {
      domain: 'http://api.tantien.info/',
      Student: {
        DrawerContent: DrawerContentStudent,
        Home: HomeStudent
      }
    }
  }
});

new Vue({
    render (h) {
        return h(
          App,
          [
            h(this.drawerContent, { slot: 'drawerContent' }),
            h(this.checkLogin ? this.redirectHome : Login, { slot: 'mainContent' })
          ]
        )
    },
    store
}).$start();
