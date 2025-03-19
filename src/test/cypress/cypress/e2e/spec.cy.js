describe('Pages', () => {
  it('Accueil', () => {
    cy.visit('http://localhost:8081/')
    cy.contains("HOME")
  }),
  it('Page1', () => {
    cy.visit('http://localhost:8081/page1')
    cy.contains("PAGE 1")
  }),
  it('Page2', () => {
    cy.visit('http://localhost:8081/page2')
    cy.contains("PAGE 2")
  }),
  it('Accueil -> Page1', () => {
    cy.visit('http://localhost:8081')
    cy.contains("HOME")
    cy.get('[href="/page1"]').click()
    cy.contains("PAGE 1")
  })
})