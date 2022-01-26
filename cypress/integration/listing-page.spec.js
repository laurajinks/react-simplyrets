/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
    window.localStorage.removeItem("listings");
    cy.visit('/listings')
    cy.intercept('https://api.simplyrets.com/properties').as('getListings')
  })

  it('renders the correct text in header', () => {
    cy.wait('@getListings')
    cy.get('[data-cy=header]').should('have.text', 'Property Listings')
  })

  it('loads the listings', () => {
    cy.wait('@getListings')
    cy.get('[data-cy=listing-container]').should('be.visible')
  })

  it('toggles favorite status', () => {
    cy.wait('@getListings')
    cy.get('[data-cy=listing]').eq(0).within(() => {
      cy.get('[data-cy=unfavorite-icon]').should('be.visible')
      cy.get('[data-cy=listing-icon]').click({force: true})
      cy.get('[data-cy=favorite-icon]').should('be.visible')
    })
  })
})
