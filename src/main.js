import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import {phoneStore} from "@/stores/phone";

import './assets/styles/global.scss';
import './assets/fonts/roboto/stylesheet.css'
import {phoneCallApp} from "@/stores/phone-call-app";
import {phoneGpsApp} from "@/stores/phone-gps-app";
import {phoneTaxiApp} from "@/stores/phone-taxi-app";
import {phoneAdsApp} from "@/stores/phone-ads-app";

Vue.config.productionTip = false

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    phone: phoneStore,
    phoneCallApp,
    phoneGpsApp,
    phoneTaxiApp,
    phoneAdsApp,
  }
})

new Vue({
  render: h => h(App),
  store
}).$mount('#app')
