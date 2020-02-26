describe('Event Calendar App', function () {

  // VISIT WEBSITE TO TEST
  beforeEach(function () {
    cy.visit('/')
    cy.clearCookies()
    cy.clearLocalStorage()
  })

  // LOAD DATABASE TEST
  it.only("Load all events data", () => {
    cy.seedAndVisit()

    cy.get('.event-card')
      .should('have.length', 4)
  })


  // NEW EVENT FORM TEST
  it.only('accepts input', () => {
    const titleText = 'Sample title',
      descriptionText = 'This is a sample description',
      startDate = '2020-02-02',
      endDate = '2020-02-03';

    cy.get('.event-form .title')
      .type(titleText)
      .should("have.value", titleText)
    cy.get('.event-form .description')
      .type(descriptionText)
      .should("have.value", descriptionText)
    cy.get('.event-form .start')
      .type(startDate)
      .should("have.value", startDate)
    cy.get('.event-form .end')
      .type(endDate)
      .should("have.value", endDate)
    cy.get('.new-event-submit').submit();
  })
})

