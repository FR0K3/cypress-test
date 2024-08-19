describe('Fundamentals test', () => {
  it('Contains correct header text', () => {
    cy.visit(`/fundamentals`)
    
    cy.get('[data-test="fundamentals-header"]').contains(/Testing Fundamentals/i)  // /i is to make it case insensitive
    cy.get('[data-test="fundamentals-header"]').should('contain.text', 'Testing Fundamentals')
    
  })
  
  it('Accordion works correctly', ()=> {
    cy.visit(`/fundamentals`)
    
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')
    cy.get('[data-test="accordion-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('be.visible')
    cy.get('[data-test="accordion-1"] div[role="button"]').click()
    cy.contains(/Your tests will exist in a describe block/i).should('not.be.visible')


  })

})