import Vue from 'vue'
import Vuex from 'vuex'
import registerWeb3 from './vuex-web3'

Vue.use(Vuex)

const vuexStore = new Vuex.Store({
  state: { 
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

registerWeb3(vuexStore, 'w3')

export default vuexStore;