describe('Home page', () => {
  beforeEach(() => {
    cy.fixture('heroes').then((testHeroes) => {
      cy.intercept('https://akabab.github.io/superhero-api/api/all.json', testHeroes)
    })
    cy.visit('http://localhost:3000')
  })

  it('should have a title', () => {
    cy.get('h2').contains('HERO FINDER')
  });

  it('should have a button in the nav for future archenemies', () => {
    cy.get('header').contains('Archenemies')
  });

  it('should have section with 3 hero cards at the top', () => {
    cy.get('.top-three').children('.hero-card').should('have.length', '3')
  })

  it('should have a section with all heroes', () => {
    cy.get('.hero-card-container').children('.hero-card').should('have.length', '6')
  })

  it('should be able to search all heroes by name', () => {
    cy.get('.search-input').type('agent').get('.hero-card-container').children('.hero-card').contains('Agent Bob')
  })

  it('should filter based on power level', () => {
    cy.get('.power-dd').select('average').get('.hero-card-container').children('.hero-card').contains('Agent Bob')
  })

  it('should update the url when clickin on a hero card', () => {
    cy.get('.hero-card-container a').first().click()
    cy.url().should('include', 'heroes/1')
  })

  it('should update the url when clicking the future archenemies button', () => {
    cy.get('.button').click()
    cy.url().should('include', 'favorites')
  })
})

describe('Home page errors', () => {
  beforeEach(() => {
    cy.fixture('heroes').then((testHeroes) => {
      cy.intercept('https://akabab.github.io/superhero-api/api/all.json', testHeroes)
    })
    cy.visit('http://localhost:3000')
  })
  it('should display an error mesage when a data request is broken with 400 error', () => {
    cy.intercept('GET', 'https://akabab.github.io/superhero-api/api/all.json', {
      statusCode: 404
    })
    cy.visit('http://localhost:3000')
    cy.get('.error-message').contains('Something went wrong')
  })

  it('should display an error mesage when a data request is broken with 500 error', () => {
    cy.intercept('GET', 'https://akabab.github.io/superhero-api/api/all.json', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000')
    cy.get('.error-message').contains('Something went wrong')
  })

  it('should show an error message when no hero matches search criteria', () => {
    cy.get('.search-input').type('asdad').get('.hero-card-container').contains('No hero')
  })

  it('should show an error message when no hero matches power level', () => {
    cy.get('.power-dd').select('god-like-power').get('.hero-card-container').contains('No hero')
  })
})
