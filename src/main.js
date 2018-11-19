// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import firebase from 'firebase/app'
import Vuetify from 'vuetify'
import dotEnv from 'dotenv'

// import vuetify css | comment out to get initial login css
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

// load env variables
dotEnv.config()

var config = {
    apiKey: process.env.apiKey,
    authDomain: process.env.authDomain,
    databaseURL: process.env.databaseURL,
    projectId: process.env.projectId,
    storageBucket: process.env.storageBucket,
    messagingSenderId: process.env.messagingSenderId
};

firebase.initializeApp(config);

// use vuetify
Vue.use(Vuetify);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})