import { shallowMount } from '@vue/test-utils'
import Candlesticks from '../../src/views/Candlesticks.vue'

describe(`Candlesticks`, () => {
    let wrapper

    beforeEach(() => {
        wrapper = shallowMount(Candlesticks, {
            propsData: {
                ohlcv: [
                    [
                        1563727680000,
                        10384.09,
                        10397.76,
                        10380.49,
                        10389.86,
                        14.232304
                    ],
                    [
                        1563727740000,
                        10389.85,
                        10390.0,
                        10377.01,
                        10388.16,
                        35.418958
                    ]
                ]
            },
            stubs: [`router-link`]
        })
    })

    it(`should show the Candlesticks page`, async () => {
        expect(wrapper.element).toMatchSnapshot()
    })
})
