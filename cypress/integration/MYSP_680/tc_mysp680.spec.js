import loccator from '../Locators/locator'
import assertion from '../Assertions/assertion'

before(function () {
  cy.fixture('devdata', 'endpoint').then(function (data) {
    this.data = data
  })
})

describe('Mysp-2079', function () {

  const login = new loccator()
  const assert = new assertion()
  it('Testing the Acceptance Criteria of office', function () {
    cy.visit(Cypress.env('officeUrl'))
    login.click_office().click()
    login.redirect_office().click()


    cy.login('prku', 'prku')
    login.login_button().click()
    login.application().click()
    login.newapplication().click()
    login.aircraft().click()
    login.licenceinfo().click({ force: true })

    login.licencesearch().click({ force: true })
    cy.wait(5000)
    login.licencesearchinput().type(this.data.discount)
    cy.wait(5000)
    login.licencesearchenternew().click({ force: true })
    login.licencecontact().click({ force: true })
    cy.wait(5000)



    // cy.wait(5000)
    login.licencecontactadd().click({ force: true })


    login.paymentcontact().click({ force: true })
    login.paymentcontactadd().click({ force: true })




    login.paymentcontact().click({ force: true })
    cy.wait(5000)
    login.paymentcontactadd().click({ force: true })
    cy.get('select').select('More than 14,000 kg')

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    cy.get('[id="licenceInfoViewModel_LicenceInfoSpecificsViewModel_licenceDate"]').type(today)
    cy.get('#next > span').click()
    cy.get('#subProductList_internalList_0_aircraftInfoViewModel_registrationMark').type(this.data.registration)
    cy.get('#subProductList_internalList_0_aircraftInfoViewModel_manufacturer').type(this.data.aircraft)
    cy.get('#subProductList_internalList_0_aircraftInfoViewModel_model').type(this.data.model)

    cy.get('.dropdown > .btn > .filter-option > .filter-option-inner > .filter-option-inner-inner').click()


    cy.get('.inner > .dropdown-menu > li:nth-child(9) > .dropdown-item > .text').click()

    cy.get('.col-12 > .form-group > .col-sm-9 > .dropdown > #subProductList_internalList_0_aircraftInfoViewModel_equipCat').select('ESN', { force: true })

    login.next_office().click()
    cy.wait(3000)
    login.next_office().click()
    cy.wait(5000)
    cy.get('.col-12 > .form-group > span > .custom-control > .custom-control-label').click()
    login.terms_condition().check('on')
    login.next_office().click()
    login.product_submit().click()
    cy.wait(5000)
    login.copy_application_no().invoke('text').as('apid')
    login.Applications().click()
    cy.wait(5000)
    login.SubApplications().click()
    cy.wait(5000)
    cy.get('@apid').then((apid) => {
      cy.get('[style="width: 10%; "] > .fht-cell > .filter-control > .input-group > :nth-child(2) > .form-control').type(apid)
      cy.log(apid)
    })
    cy.wait(3000)
    login.View().click({ force: true })
    login.Submit().click({ force: true })
    cy.wait(2000)
    cy.contains('Financial').click()
    cy.get('@apid').then((apid) => {
      cy.get(':nth-child(4) > .mySp-Table-filterRow > :nth-child(2) > label > input').type(apid)
      cy.log(apid)
    })

    cy.wait(5000)
    cy.contains('Status').should('be.visible')
    cy.wait(5000)
    cy.get('table').contains('td', 'Unpaid')
    cy.contains('Service / SubService').should('be.visible')
    cy.contains('Aeronautical/Aircraft').should('be.visible')
    cy.contains('Customer Ref.').should('be.visible')
    cy.get('thead > :nth-child(1) > :nth-child(12)').click()
    cy.contains('Payment Method').should('be.visible')
    cy.get('thead > :nth-child(1) > :nth-child(14)').click()
    cy.contains('Invoice Type').should('be.visible')

    cy.wait(5000)

    cy.get('table').contains('td', 'Direct Debit')
    //API CODE Starts
    cy.contains('Financial').click()
    cy.get('@apid').then((apid) => {
      cy.get(':nth-child(4) > .mySp-Table-filterRow > :nth-child(2) > label > input').type(apid)
      cy.log(apid)
    })

    cy.wait(5000)
    cy.contains('Status').should('be.visible')
    cy.wait(5000)
    cy.get('table').contains('td', 'Unpaid')
    cy.contains('Service / SubService').should('be.visible')
    cy.contains('Aeronautical/Aircraft').should('be.visible')
    cy.contains('Customer Ref.').should('be.visible')
    cy.get('thead > :nth-child(1) > :nth-child(12)').click()
    cy.contains('Payment Method').should('be.visible')
    cy.get('thead > :nth-child(1) > :nth-child(14)').click()
    cy.contains('Invoice Type').should('be.visible')

    cy.wait(5000)

    cy.get('table').contains('td', 'Direct Debit')
    //API CODE Starts
    cy.contains('Financial').click()
    cy.get('@apid').then((apid) => {
      cy.get(':nth-child(4) > .mySp-Table-filterRow > :nth-child(2) > label > input').type(apid)
      cy.log(apid)
    })

    cy.wait(5000)
    cy.contains('Status').should('be.visible')
    cy.wait(5000)
    cy.get('table').contains('td', 'Unpaid')
    cy.contains('Service / SubService').should('be.visible')
    cy.contains('Aeronautical/Aircraft').should('be.visible')
    cy.contains('Customer Ref.').should('be.visible')
    cy.get('thead > :nth-child(1) > :nth-child(12)').click()
    cy.contains('Payment Method').should('be.visible')
    cy.get('thead > :nth-child(1) > :nth-child(14)').click()
    cy.contains('Invoice Type').should('be.visible')

    cy.wait(5000)

    cy.get('table').contains('td', 'Direct Debit')
    //API CODE Starts
    cy.contains('Financial').click()

    cy.get(':nth-child(4) > .mySp-Table-filterRow > :nth-child(2) > label > input').type('AR002755/001')
    cy.wait(5000)
    cy.contains('Status').should('be.visible')
    cy.wait(5000)
    cy.get('table').contains('td', 'Paid')
    cy.contains('Service / SubService').should('be.visible')
    cy.contains('Aeronautical/Aircraft').should('be.visible')
    cy.contains('Customer Ref.').should('be.visible')
    cy.get('thead > :nth-child(1) > :nth-child(12)').click()
    cy.contains('Payment Method').should('be.visible')
    cy.get('thead > :nth-child(1) > :nth-child(14)').click()
    cy.contains('Invoice Type').should('be.visible')

    cy.wait(5000)

    cy.get('table').contains('td', 'Direct Debit')


  })




})
