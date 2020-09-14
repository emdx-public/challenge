<template >
  <div>
    <div class="calculator">
      <h2>Calculator</h2>
      <v-row>
        <v-col cols="12" md="6">
          <p>Change</p>
          <v-text-field
            label="Cambio"
            solo
            dense
            v-model="num"
            type="number"
            @keyup="changeRes('num')"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="6" class="contentDropdown">
          <p>Coin</p>
          <select v-model="countries" class="dropdown" solo @change="changeRes('num')">
            <option v-for="(value, key) in currencies" :key="(value, key)">{{key}}</option>
          </select>
          <v-icon v-text="'$dropdown'"></v-icon>
        </v-col>
      </v-row>

      <v-row class="calc">
        <v-col cols="12">
          <p>Bitcoin</p>
          <v-text-field
            type="number"
            label="Bitcoin"
            solo
            dense
            v-model="bitcoin"
            @keyup="changeRes('btc')"
          ></v-text-field>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      countrySelect: "",
      bitcoin: 1,
      num: 1,
      countries: [],
      currencies: {},
    };
  },
  methods: {
    changeNum: function () {
      this.countrySelect = this.currencies[this.countries];
      this.resolve = this.num / this.countrySelect.last;
      return this.resolve;
    },
    changeBtc: function () {
      this.countrySelect = this.currencies[this.countries];
      this.resolve = this.bitcoin * this.countrySelect.last;
      return this.resolve;
    },
    changeRes: function (type) {
      if (type == "btc") {
        this.num = this.changeBtc();
      } else if (type == "num") {
        this.bitcoin = this.changeNum();
      } else {
        this.num = 0;
        this.bitcoin = 0;
      }
    },
    iconDrop: () => {
      console.log('holis')
     
    }
  },
  created() {
    this.axios.get("https://blockchain.info/ticker").then((response) => {
      this.currencies = response.data;
    });
  },
};
</script>

<style scoped lang="scss">
.calculator {
  padding: 20px;
  background-color: #e0e0e0;
  border-radius: 10%;
  margin-top: 50px;
  h2 {
    text-align: center;
  }
  p {
    margin: 0 0 10px 20px;
  }
  @media screen and (min-width: 600px) {
    margin-left: 30px;
  }
  .contentDropdown {
    position: relative;
    .dropdown {
      border: 1px solid rgb(195, 195, 195);
      box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
        0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
      border-radius: 4px;
      height: 38px;
      padding: 0 10px 0 10px;
      background-color: #fff;
      width: 100%;
      margin: 0;
      cursor: pointer;
    }
    .v-icon {
      position: absolute;
      right: 35px;
      bottom: auto;
      top: 50px;
      cursor: pointer;
    }
  }
}
</style>