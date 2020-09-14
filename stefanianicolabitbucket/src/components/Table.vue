<template>
  <v-simple-table class="table">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Code</th>
          <th class="text-left">Symbol</th>
          <th class="text-left">Last Price</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(value, key) in currencies" :key="(value, key)">
          <td>{{ key }}</td>
          <td>{{ value.symbol }}</td>
          <td>{{ value.last }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  data() {
    return {
      currencies: {},
    };
  },
  created() {
    this.axios.get("https://blockchain.info/ticker").then((response) => {
      this.currencies = response.data;
    });
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.table {
  border: 2px solid #f2f2f2;
  thead {
    th {
      text-align: left;
      font-size: 18px;
    }
  }
}
</style>
