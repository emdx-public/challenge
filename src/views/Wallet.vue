<template>
    <div>
        <vue-metamask userMessage="msg" @onComplete="onComplete">
        </vue-metamask>
        <div>
            <textarea
                v-model="address"
                label="Your Wallet Address"
                readonly
            ></textarea>
            <textarea v-model="balance" label="Balance" readonly></textarea>
        </div>
        <div>
            <textarea v-model="receiver" label="To Address"></textarea>
            <textarea v-model="amount" label="Amount"></textarea>
            <v-btn
                color="primary"
                elevation="3"
                raised
                rounded
                text
                v-on:click="signData()"
                >Sign Data</v-btn
            >
        </div>
    </div>
</template>

<script>
import VueMetamask from 'vue-metamask'
// import { ethers } from 'ethers'
// import Web3 from "web3";
export default {
    name: 'Metamask',
    components: {
        VueMetamask
    },
    data() {
        return {
            msg: 'This is demo net work',
            address: '',
            web3: null,
            balance: 0,
            BalanceInterval: null,
            amount: 0.1,
            receiver: '0x63D8fdD998834accC847b55705135d3EE1B7bc90'
        }
    },
    methods: {
        onComplete(data) {
            if (data.type == 'MAINNET') {
                alert('Network should be testnet')
            } else {
                alert('This is testnet')
            }
            this.address = data.metaMaskAddress
            this.web3TimerCheck(data.web3)
        },
        callback(err, balance) {
            this.balance = balance
        },

        signData() {
            const msgParams = [
                {
                    type: 'string', // Any valid solidity type
                    name: 'From Address', // Any string label you want
                    value: this.address
                },
                {
                    type: 'uint32',
                    name: 'Send Amount',
                    value: this.amount
                }
            ]
            window.ethereum
                .request({
                    method: 'eth_signTypedData',
                    params: [msgParams, this.address],
                    from: this.address
                })
                .then(raw => {
                    alert(raw)
                })
        },
        getAccountsUsingWeb3() {
            if (this.web3 === null) return
            this.web3.eth.getBalance(this.address, this.callback)
        },
        web3TimerCheck(web3) {
            this.web3 = web3
            this.getAccountsUsingWeb3()
            this.BalanceInterval = setInterval(
                () => this.getAccountsUsingWeb3(),
                1000
            )
        }
    }
}
</script>

<style></style>
