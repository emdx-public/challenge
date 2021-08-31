<template>
  <v-container>
    <p class="text-center text-h3 font-weight-light pt-5">OrderBook</p>
    <!-- <v-container style="width: 80%" class="d-flex w-md-100">
            <v-btn color="primary" elevation="3" raised rounded text v-on:click="subscribeMessage()">Send Subscribe Message</v-btn>
            <v-btn color="primary" elevation="3" raised rounded text v-on:click="unSubscribeMessage()">Send UnSubscribe Message</v-btn>
        </v-container> -->
    <v-container
      style="width: 100%"
      class="d-flex justify-center w-md-100 align-stretch"
    >
    <div class="flex-grow-1">
        <p class="text-center text-h5 font-weight-light pt-5">Sell Order</p>
      <v-simple-table fixed-header class="order-table" light height="60vh">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-right">Ask Price</th>
              <th class="text-right">Amount</th>
              <th class="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-right"
              v-for="ask in Asks"
              :key="ask.price"
              @click="showAlert(ask.price)"
            >
              <td v-bind:class="{ updated_ask: lastUpdate - ask.lastUpdate < 3 }">
                {{ ask.price }}
              </td>
              <td v-bind:class="{ updated_ask: lastUpdate - ask.lastUpdate < 3 }">
                {{ ask.amount }}
              </td>
              <td v-bind:class="{ updated_ask: lastUpdate - ask.lastUpdate < 3 }">
                {{ formatPrice(ask.amount * ask.price, 3) }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    <div class="flex-grow-1">
      <p class="text-center text-h5 font-weight-light pt-5">Buy Order</p>
      <v-simple-table fixed-header class="order-table" light height="60vh">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-right">Bid Price</th>
              <th class="text-right">Amount</th>
              <th class="text-right">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="text-right"
              v-for="bid in Bids"
              :key="bid.price"
              @click="showAlert(bid.price)"
            >
              <td v-bind:class="{ updated_bid: lastUpdate - bid.lastUpdate < 3 }">
                {{ bid.price }}
              </td>
              <td v-bind:class="{ updated_bid: lastUpdate - bid.lastUpdate < 3 }">
                {{ bid.amount }}
              </td>
              <td v-bind:class="{ updated_bid: lastUpdate - bid.lastUpdate < 3 }">
                {{ formatPrice(bid.amount * bid.price, 3) }}
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
    </v-container>
  </v-container>
</template>

<script>
export default {
  name: "Orderbook",
  methods: {
    formatPrice(value, precision) {
      // let val = (value/1).toFixed(precision).replace('.', ',')
      // return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
      return value
        .toFixed(precision)
        .replace(/(\d)(?=(\d{3})+(?:\.\d+)?$)/g, "$1,");
    },
    onopen: function (event) {
      console.log(event);
      console.log("Successfully connected to the echo websocket server...");
      this.subscribeMessage();
    },
    subscribeMessage: function () {
      var com = { channel: "orderbook", market: "BTC/USD", op: "subscribe" };
      console.log(this.connection);
      this.connection.send(JSON.stringify(com));
    },
    unSubscribeMessage: function () {
      var com = { channel: "orderbook", market: "BTC/USD", op: "unsubscribe" };
      console.log(this.connection);
      this.connection.send(JSON.stringify(com));
    },
    updateData: function (event) {
      if (event.isTrusted) {
        var data = JSON.parse(event.data);
        var i, j;
        if (data.type == "partial") {
          this.bids = [];
          this.asks = [];
          for (i = 0; i < data.data.bids.length; i++) {
            if (data.data.bids[i][1] > 0)
              this.bids.push({
                price: data.data.bids[i][0],
                amount: data.data.bids[i][1],
                lastUpdate: this.lastUpdate,
              });
          }
          for (j = data.data.asks.length - 1; j >= 0; j--) {
            if (data.data.asks[j][1] > 0)
              this.asks.push({
                price: data.data.asks[j][0],
                amount: data.data.asks[j][1],
                lastUpdate: this.lastUpdate,
              });
          }
        } else if (data.type == "update") {
          this.lastUpdate++;
          var price, amount;
          for (i = 0; i < data.data.bids.length; i++) {
            price = data.data.bids[i][0];
            amount = data.data.bids[i][1];

            for (j = 0; j < this.bids.length; j++) {
              if (this.bids[j].price == price) {
                if (amount == 0) {
                  this.bids.splice(j, 1);
                } else {
                  this.bids[j].amount = amount;
                  this.bids[j].lastUpdate = this.lastUpdate;
                }
                break;
              } else if (this.bids[j].price < price) {
                this.bids.splice(j, 0, {
                  price,
                  amount,
                  lastUpdate: this.lastUpdate,
                });
                break;
              }
            }

            if (j == this.bids.length && amount != 0)
              this.bids.push({ price, amount, lastUpdate: this.lastUpdate });
          }

          for (i = data.data.asks.length - 1; i >= 0; i--) {
            price = data.data.asks[i][0];
            amount = data.data.asks[i][1];

            for (j = 0; j < this.asks.length; j++) {
              if (this.asks[j].price == price) {
                if (amount == 0) {
                  this.asks.splice(j, 1);
                } else {
                  this.asks[j].amount = amount;
                  this.asks[j].lastUpdate = this.lastUpdate;
                }
                break;
              } else if (this.asks[j].price < price) {
                this.asks.splice(j, 0, {
                  price,
                  amount,
                  lastUpdate: this.lastUpdate,
                });
                break;
              }
            }

            if (j == this.asks.length && amount != 0)
              this.asks.push({ price, amount, lastUpdate: this.lastUpdate });
          }
          this.Bids = this.bids;
          this.Asks = this.asks;
        }
      }
    },
    showAlert: function (msg) {
      alert('Selected order\'s price is ' + msg);
    },
  },
  created: function () {
    console.log("Starting connection to WebSocket Server");
    this.connection = new WebSocket("wss://ftx.com/ws/");

    this.connection.onmessage = this.updateData;

    this.connection.onopen = this.onopen;
  },

  data() {
    return {
      bids: [],
      asks: [],
      Bids: [],
      Asks: [],
      lastUpdate: 0,
    };
  },
};
</script>

<style scoped>
td {
  height: 25px !important;
}
.updated_bid {
  background-color: lightgreen;
}
.updated_ask {
  background-color: lightcoral;
}
.order-table {
  width: 95%;
  margin-left: 10px;
  min-width: 350px;
}
.v-data-table {
    border: 1px solid lightgrey;
}
</style>