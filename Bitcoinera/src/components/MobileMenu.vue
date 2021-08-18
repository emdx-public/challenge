<template>
    <div id="menuToggle" class="bg-green-400">
        <div
            class="text-md lg:flex-grow"
            style="display: flex; flex-direction: column;"
        >
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
</template>

<script>
export default {
    name: 'MobileMenu',
    props: {
        links: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style scoped>
#menuToggle {
    display: flex;
    flex-direction: column;
}
</style>
