<template>
  <div class="dashboard">
    <Graph/>
  </div>
</template>

<script>
// @ is an alias to /src
import Graph from "@/components/Graph.vue";


export default {
  components: {
      Graph
  },
};
</script>

<style scoped lang="scss">
.dashboard {
   height: 100vh;
}
</style>
