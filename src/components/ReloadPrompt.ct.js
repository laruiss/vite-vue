import { mount } from '@cypress/vue'

import ReloadPrompt from './ReloadPrompt.vue'

describe('ReloadPrompt', () => {
  it('should render ReloadPrompt with offline ready button', () => {
    mount(ReloadPrompt, {
      props: {
        offlineReady: true,
      },
    })

    cy.get('button')
      .should('contain', 'Fermer')
  })
  it('should render ReloadPrompt with refresh button', () => {
    mount(ReloadPrompt, {
      props: {
        needRefresh: true,
      },
    })

    cy.get('button:nth-child(1)')
      .should('contain', 'Recharger')
      .should('not.have.class', 'secondary')
    cy.get('button:nth-child(2)')
      .should('contain', 'Fermer')
      .should('have.class', 'secondary')
  })
})
