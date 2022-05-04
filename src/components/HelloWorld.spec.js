import { render } from '@testing-library/vue'

import HelloWorld from './HelloWorld.vue'

describe('HelloWorld', () => {
  it('should display header text', () => {
    const msg = 'Hello Vue 3'
    const {getByText} = render(HelloWorld, { props: { msg } })

    const h1 = getByText(msg)

    expect(h1.tagName).toEqual('H1')
  })
})
