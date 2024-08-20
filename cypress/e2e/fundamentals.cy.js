describe('Fundamentals test', () => {
  beforeEach(() => {
    cy.visit(`/fundamentals`)
  })

  it('Contains correct header text', () => {
    // cy.visit(`/fundamentals`)
    cy.getDataTest('fundamentals-header').contains(/Testing Fundamentals/i) // /i is to make it case insensitive
    cy.getDataTest('fundamentals-header').should('contain.text', 'Testing Fundamental')
  })

  it('Accordion works correctly', () => {
    // cy.visit(`/fundamentals`)
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
  }) 

})