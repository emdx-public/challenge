<template>
  <div>
    <v-app-bar app light color="indigo">
      <router-link to="/" class="white--text text-decoration-none">
        <span class="mx-2 headline">EMDX Challenge</span>
      </router-link>
      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        @click="drawer = true"
        class="d-flex d-md-none white--text"
      ></v-app-bar-nav-icon>
      <v-btn text to="/" class="d-none d-md-flex white--text">OrderBook</v-btn>
      <v-btn text to="/chart" class="d-none d-md-flex white--text">Chart</v-btn>
      <v-btn text to="/metamask" class="d-none d-md-flex white--text"
        >Metamask</v-btn
      >
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute right temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item to="/">
            <v-list-item-title>OrderBook</v-list-item-title>
          </v-list-item>
          <v-list-item to="/chart">
            <v-list-item-title>Chart</v-list-item-title>
          </v-list-item>
          <v-list-item to="/metamask">
            <v-list-item-title>Metamask</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: false,
      selectedPage: null,
      routes: ["/", "/chart", "/metamask"],
    };
  },
  watch: {
    selectedPage() {
      if (this.selectedPage === undefined) return;
      let path = this.routes[this.selectedPage];
      if (this.$route.path !== path) this.$router.push(path);
    },
  },
  methods: {
    connect() {
      this.$store.dispatch('initWeb3');
    }
  }
};
</script>