<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="7">
        <Table />
      </v-col>
      <v-col cols="12" md="5">
        <Calculator />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import Table from "@/components/Table.vue";
import Calculator from "@/components/Calculator.vue";

export default {
  components: {
    Table,
    Calculator,
  },
};
</script>
