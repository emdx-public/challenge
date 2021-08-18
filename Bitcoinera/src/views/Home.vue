<template>
    <div>
        <bounce-loader
            :loading="isLoading"
            :color="'#68d391'"
            :size="100"
        ></bounce-loader>
        <orderbook :assetsData="assets" v-if="!isLoading" />
    </div>
</template>

<script>
import api from '@/api'
import Orderbook from '@/views/Orderbook.vue'
export default {
    name: 'Home',
    components: { Orderbook },

    data() {
        return {
            assets: [],
            isLoading: false
        }
    },

    created() {
        this.isLoading = true
        api.getAssets()
            .then(assets => (this.assets = assets))
            .finally(() => (this.isLoading = false))
    }
}
</script>
