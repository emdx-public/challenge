<template>
  <div id="app" data-app>
    <v-app-bar>
      <router-link to="/">Bitcoin converter</router-link>
      <router-link to="/dashboard">Candlesticks graphic</router-link>

      <v-spacer></v-spacer>
    </v-app-bar>

    <router-view />
  </div>
</template>

<script>
export default {
  data: () => ({
    collapsed: false,
  }),
};
</script>

<style lang="scss">
#app {
  font-family: "Roboto", sans-serif;
  background-color: #f2f2f2;
  .v-app-bar {
    height: 55px;
    .v-toolbar__content {
      background-color: #311b92;

      a {
        text-decoration: none;
        color: #fff;
        padding: 10px 30px;
      }
    }
  }
}
</style>
