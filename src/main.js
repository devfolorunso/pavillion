import {createApp} from 'vue'
import {createPinia} from 'pinia'
import {Quasar} from 'quasar'
import quasarIconSet from 'quasar/icon-set/mdi-v6'
import {Notify} from "quasar";
// Import icon libraries
import '@quasar/extras/roboto-font-latin-ext/roboto-font-latin-ext.css'
import '@quasar/extras/mdi-v6/mdi-v6.css'
import '@quasar/extras/material-icons/material-icons.css'

// Import Extensions & Assets
import NProgress from 'nprogress'
import './assets/css/_init.css'
import '@space-css/space-css/space.min.css'

import axios from 'axios'


// Import Quasar css
import 'quasar/src/css/index.sass'

// Assumes your root component is App.vue
// and placed in same folder as main.js
import App from './App.vue'
import router from './router'

const myApp = createApp(App)

myApp.use(Quasar,{
    plugins: {Notify}, // import Quasar plugins and add here
    iconSet: quasarIconSet,
})

// Connect Pinia
myApp.use(createPinia());
myApp.config.globalProperties.axios = axios
// Connect Vue Router
myApp.use(router);
myApp.use(NProgress);
NProgress.configure({easing: 'ease',showSpinner: true})



myApp.mount('#app')
