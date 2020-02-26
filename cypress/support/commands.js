Cypress.Commands.add('seedAndVisit', () => {
  cy.server()
  cy.route('GET', '/api/v1/events', 'fixtures: event_list')
  cy.visit('/')
})