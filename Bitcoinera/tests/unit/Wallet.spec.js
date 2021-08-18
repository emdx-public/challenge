import { shallowMount } from '@vue/test-utils'
import Wallet from '../../src/views/Wallet.vue'

describe(`Wallet`, () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Wallet, {
            propsData: {
                msg: 'This is demo net work',
                address: '',
                web3: null,
                balance: 0,
                BalanceInterval: null,
                amount: 0.1,
                receiver: '0x63D8fdD998834accC847b55705135d3EE1B7bc90'
            },
            stubs: [`router-link`]
        })
    })

    it(`should show the Wallet page`, async () => {
        expect(wrapper.element).toMatchSnapshot()
    })
})
