import { shallowMount } from "@vue/test-utils"
import Orderbook from '../../src/views/Orderbook.vue'

describe(`Orderbook`, () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(Orderbook, {
      propsData:  {
        bids: [],
        asks: [],
        Bids: [],
        Asks: [],
        lastUpdate: 0
    },
      stubs: [`router-link`],
    })
  })

  it(`should show the Orderbook page`, async () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
