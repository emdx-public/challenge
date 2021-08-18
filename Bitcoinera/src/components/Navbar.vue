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
                    v-if="!isMobileApp"
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
                            <i class="material-icons notranslate">close</i>
                        </div>
                        <div v-if="!open" class="open-menu" @click="show()">
                            <i class="material-icons notranslate">more_vert</i>
                        </div>
                    </template>
                </div>
            </nav>
        </nav>
        <MobileMenu
            :hidden="!(isMobileApp && open)"
            :links="links"
            class="slider"
            :class="{ closed: !open }"
        />
    </header>
</template>

<script>
import ExchangeIcon from '@/components/ExchangeIcon'
import MobileMenu from '@/components/MobileMenu'
export default {
    name: 'Navbar',
    components: { ExchangeIcon, MobileMenu },
    props: {
        links: {
            type: Array,
            default: () => []
        }
    },
    data: () => ({
        open: false
    }),
    computed: {
        isMobileApp() {
            return screen.width < 667
        }
    },
    methods: {
        close() {
            this.open = false
        },
        show() {
            this.open = true
        }
    }
}
</script>

<style>
.material-icons {
    color: #fff;
    font-weight: normal;
    font-style: normal;
    font-size: 1.5rem;
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    direction: ltr;
    cursor: pointer;
    margin-right: 2rem;
}

.slider {
    overflow-y: hidden;
    max-height: 500px; /* approximate max height */
    padding: 1rem;

    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
}

.slider.closed {
    max-height: 0;
    padding: 0;
}
</style>
