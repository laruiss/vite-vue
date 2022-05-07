describe('Home', () => {
  it('Title', () => {
    cy.visit('/')
      .get('h1')
      .should('contain', 'App Vue3+Vite')
  })
})
