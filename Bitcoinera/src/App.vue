<template>
    <main>
        <navbar :links="links" />

        <router-view
            class="container px-5 sm:px-20 py-20 flex justify-center"
        />
    </main>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
    name: 'App',
    components: {
        Navbar
    },

    data() {
        return {
            links: [
                {
                    title: 'RT Orderbook',
                    to: '/orderbook'
                },
                {
                    title: 'Candlesticks graphic',
                    to: '/candlesticks'
                },
                {
                    title: 'Wallet integration',
                    to: '/wallet'
                }
            ]
        }
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
}
</style>
