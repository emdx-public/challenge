import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify/lib'
import '@/assets/css/tailwind.css'
import { VueSpinners } from '@saeris/vue-spinners'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'

import router from '@/router'
import { dollarFilter, percentFilter } from '@/filters'

const vuetify = new Vuetify({
    // theme: {dark: true}
})
Vue.use(vuetify)
Vue.use(VueSpinners)
Vue.use(Chartkick.use(Chart))
Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)

Vue.config.silent = true
Vue.prototype.$vuetify = { rtl: false }
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
