## EMDX Front End technical test

### Summary
The goal of this test is to make you code a small VueJS app.

The app will have three views, real time updated orderbook, a small dashboard with a graphic view and Metamask form interaction. Each view can be acceded via a link in a top navbar at the top of the app. The top navbar should read "RT Orderbook", "Candlesticks graphic" and "Wallet integration".

#### 1. Realtime orderbook

For the first tab, the dev will have to create an orderbook, as seen on any exchange, with price level, colored amounts, side, real time update, etc.
For this you can check the FTX WS/API (https://docs.ftx.com/) to fetch proper data, any pair will be ok, suggested btc/usd.

The order book will need to update real time and reflect proper updates by flashing the side / level that changed (with flash we say background color momentarily changed)

Finally, the price on each level should be clickeable, and the click event will have to fetch said price and show it on a alert or any div/tag/input on the same page.

#### 2. Candlesticks graphic view

The Candlesticks graphic should have an OHLCV chart (we recommend trading-vue-js) and it should be filled with proper formatted data. An example source can be:

https://api-pub.bitfinex.com/v2/candles/trade:1h:fUSD:a30:p2:p30/hist


* Information should also be updated real time coming from a websocket and the graph component should react to reflect changes properly.

#### 3. Metamask interaction

Browser wallets like Metamask (or Nifty or Liquality) are a practical way to interact with dApps and Dex projects using the web browser and in our case a essential part of the ecosystem.
It is critical that our developers knows how to code applications that connects to user's wallets and perform operations such as balance check, network detect, send orders, etc.

For this challenge the developer should be able to write proper VueJS component(s) to connect to Metamask and perform the following operations:

- Connect the VueJS app with Metamask and any testnet blockchain (Kovan, Ropsten, Rinkeby, RSK testnet, AVAX fuji, etc)
- Force check that network should be testnet
- On the UX (inside the aforementioned tab) show connected address balance
- keep the component and vuejs store updated realtime to reflect proper balance (even when a transaction receiving or sending is made)
- Construct and sign a transaction (no need to send to blockchain) but have the hexadecimal raw result is mandatory

Useful links:

- https://infura.io/
- https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=es
- https://developers.rsk.co/rsk/public-nodes/


### Submission

Fork this repository and send us a pull request with your code.
* Put the code within a folder named as your github/bitbucket username. 
* Add a readme file with the steps to run the app. 

We'll review it and get back to you in order to talk about the submission

### Extra points

* Use a component library (We recommend Vuetify).
* Responsive design (Grid system, Flexbox, CSS Grid).
* Add test cases to components.



Contact us at  [jobs@emdx.io](mailto:jobs@emdx.io)  if you need more details.
