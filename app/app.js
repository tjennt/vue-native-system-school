import Vue from "nativescript-vue";
import Vuex from "vuex";
import VueDevtools from 'nativescript-vue-devtools';

import App from "./components/App";
import Login from "./components/Login";
import Home from "./components/Home";
import DrawerContent from "./components/DrawerContent";
import RadSideDrawer from "nativescript-ui-sidedrawer/vue";
import store from './store';

Vue.use(Vuex);
Vue.use(RadSideDrawer);
Vue.use(VueDevtools, { host: '192.168.1.42' });

Vue.config.silent = (TNS_ENV === 'production');

let checkLogin = false;
new Vue({
    render (h) {
        return h(
          App,
          [
            h(DrawerContent, { slot: 'drawerContent' }),
            h(checkLogin ? Home : Login, { slot: 'mainContent' })
          ]
        )
    },
    store
}).$start();
