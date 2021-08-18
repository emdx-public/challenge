import Vue from 'vue'
import Router from 'vue-router'

/* Views */
import Home from '@/views/Home'
import Orderbook from '@/views/Orderbook'
import Candlesticks from '@/views/Candlesticks'
import Wallet from '@/views/Wallet'
import Error from '@/views/Error'

Vue.use(Router)

export default new Router({
    mode: 'history',

    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/orderbook',
            name: 'Orderbook',
            component: Orderbook
        },
        {
            path: '/candlesticks',
            name: 'Candlesticks',
            component: Candlesticks
        },
        {
            path: '/wallet',
            name: 'Wallet',
            component: Wallet
        },
        {
            path: '*',
            name: 'Error',
            component: Error
        }
    ]
})
