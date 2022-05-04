import { vi } from 'vitest'
import { render } from '@testing-library/vue'

import ReloadPrompt from './ReloadPrompt.vue'

vi.mock('virtual:pwa-register/vue', () => {
  return {
    useRegisterSW () {
      return {
        offlineReady: true,
        needRefresh: false,
        updateServiceWorker: vi.fn(),
      }
    },
  }
})

describe('ReloadPrompt', () => {
  it('should render ReloadPrompt with right content', async () => {
    // Given

    // When
    const { container, getByRole } = render(ReloadPrompt, {
      props: {
        offlineReady: true,
      },
    })

    const navEl = getByRole('alert')
    const buttons = container.querySelectorAll('button')

    // Then
    expect(navEl.tagName).toBe('DIV')
    expect(buttons).toHaveLength(1)
    expect(navEl).toHaveClass('new-content-wrapper')
  })

  it('should render ReloadPrompt with need refresh', async () => {
    // Given

    // When
    const { container, getByRole } = render(ReloadPrompt, {
      props: {
        needRefresh: true,
      },
    })

    const navEl = getByRole('alert')
    const buttons = container.querySelectorAll('button')

    // Then
    expect(navEl.tagName).toBe('DIV')
    expect(buttons).toHaveLength(2)
    expect(navEl).toHaveClass('new-content-wrapper')
  })
})
