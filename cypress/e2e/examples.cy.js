describe('Various examples', () => {
    beforeEach(() => {
        cy.visit('/examples')
    })

    it('Multi-page testing', () => {
        cy.getDataTest('nav-why-cypress').click()
        cy.location('pathname').should('equal', '/some-path')





    })
})