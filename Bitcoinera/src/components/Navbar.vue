<template>
    <header class="shadow w-screen">
        <nav>
            <nav
                class="flex items-center justify-between flex-wrap bg-green-400 p-6"
            >
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <exchange-icon class="mr-2" />
                    <router-link
                        :to="{ name: 'home' }"
                        class="font-semibold text-xl tracking-tight"
                    >
                        CryptoExchange
                    </router-link>
                </div>
                <div
                    class="hidden sm:block w-full block flex-grow lg:flex lg:items-center lg:w-auto"
                >
                    <div class="text-md lg:flex-grow">
                        <router-link
                            v-for="l in links"
                            :key="l.title"
                            :to="l.to"
                            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-20"
                        >
                            {{ l.title }}
                        </router-link>
                    </div>
                </div>
                <div class="header-menu-section">
                    <template v-if="isMobileApp">
                        <div v-if="open" class="close-menu" @click="close()">
                        <i class="material-icons notranslate mobile-menu-action">close</i>
                        </div>
                        <div v-if="!open" class="open-menu" @click="show()">
                        <i class="material-icons notranslate mobile-menu-action"
                            >more_vert</i
                        >
                        </div>
                    </template>
                </div>
            </nav>
        </nav>
    </header>
</template>

<script>
import ExchangeIcon from '@/components/ExchangeIcon'
export default {
    name: 'Navbar',
    components: { ExchangeIcon },
    props: {
        links: {
            type: Array,
            default: () => []
        }
    },
    data: () => ({
        open: false,
    }),
    computed: {
        isMobileApp() {
            return screen.width < 625
        }
    },
    methods: {
        close() {
            this.open = false
        },
        show() {
            this.open = true
        },
    }
}
</script>
