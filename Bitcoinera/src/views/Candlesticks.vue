<template>
    <v-row>
        <v-col cols="12">
            <trading-vue :data="ohlcv" :width="width" :height="height"
                title-txt="BTCUSD"
                :toolbar="true"
                :overlays="overlays">
            </trading-vue>
        </v-col>
    </v-row>
</template>
<script>
import TradingVue from 'trading-vue-js'
import { DataCube } from 'trading-vue-js'
import Data from '@/assets/chartdata.json'
import TestOverlay from '@/components/TestOverlay.vue'

export default {
    components: { TradingVue },
    props: ['width', 'height'],
    data() {
        return {
            ohlcv: new DataCube(Data),
            overlays: [TestOverlay]
        }
    },
    // Websocket connected to Bitfinex API
    created() {
        const wss = new WebSocket('wss://api-pub.bitfinex.com/ws/2')
        wss.onopen = () => {
            wss.send(JSON.stringify({"event":"subscribe", "channel":"ticker", "pair":"BTCUSD"}))
        }
        wss.onmessage = (msg) => {
            let res = JSON.parse(msg.data)
            if (Array.isArray((res)) && Array.isArray(res[1]) && res[1].length > 2) {
                const newData = Data.chart.data.push(res[1])
                this.ohlcv = new DataCube(newData)
            }
        }
    },
}
</script>
