describe('Hero Info', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/heroes/10')
  })

  it('should contain a name for the hero', () => {
    cy.get('h1').contains('Agent Bob')
  })

  it('should contain an image of the error', () => {
    cy.get('.hero-image-large').should('exist')
  })

  it('should have a general info section', () => {
    cy.get('.general-info').should('exist')
  })

  it('should have a specific power set section', () => {
    cy.get('.specific-stats').should('exist')
  })

  it('should be able to add a hero to future archenemies', () => {
    cy.get('.archenemy').click()
    cy.visit('http://localhost:3000/favorites').get('.hero-card').contains('Agent Bob')
  })

  it('should remove hero from favorites', () => {
    cy.get('.archenemy').click()
    cy.visit('http://localhost:3000/favorites').get('.hero-card-container a').first().click().get('.archenemy').click()
    cy.visit('http://localhost:3000/favorites').get('.hero-card-container').contains('Agent Bob').should('not.exist')
  })

  it('should display a message on the favorites page when there are no favorited heroes', () => {
    cy.visit('http://localhost:3000/favorites').get('.hero-card-container').contains('No archenemies added yet')
  })
})
