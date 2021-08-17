<template>
    <v-row>
        <v-col cols="12">
            <trading-vue :data="this.$data">{{ ohlcv }}</trading-vue>
        </v-col>
    </v-row>
</template>
<script>
import TradingVue from 'trading-vue-js'

export default {
    components: { TradingVue },

    data() {
        return {
            ohlcv: [
                [
                    1563727680000,
                    10384.09,
                    10397.76,
                    10380.49,
                    10389.86,
                    14.232304
                ],
                [
                    1563727740000,
                    10389.85,
                    10390.0,
                    10377.01,
                    10388.16,
                    35.418958
                ],
                [
                    1563727800000,
                    10386.03,
                    10388.16,
                    10367.79,
                    10369.58,
                    39.760436
                ],
                [
                    1563727860000,
                    10369.58,
                    10376.33,
                    10362.6,
                    10364.54,
                    117.406486
                ],
                [
                    1563727920000,
                    10363.82,
                    10364.54,
                    10355.36,
                    10358.01,
                    10.331995
                ]
            ]
        }
    }
    // Consumo API con informacion de grafico
    //     created() {
    //     this.axios.get("https://api-pub.bitfinex.com/v2/candles/trade:1h:fUSD:a30:p2:p30/hist").then((response) => {
    //       this.ohlcv = response.data;
    //     });
    //   },
}
</script>
