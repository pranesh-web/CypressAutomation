class login {

    click_office() {
        return cy.get('.nav-item:nth-child(1) > .nav-link')

    }
    redirect_office() {
        return cy.get('.fa-user')
    }

    login_button() {
        return cy.get('#kc-login')
    }
    login_button() {
        return cy.get('#kc-login')
    }
    application() {
        return cy.contains('Applications')
    }
    newapplication() {
        return cy.contains('New Application')
    }
    aircraft() {
        return cy.contains('Aircraft')
    }
    licenceinfo() {
        return cy.get('#licenseeCard > .box-body > .button > :nth-child(2)')
    }
    licencesearch() {
        return cy.get('.box-body > .inner-body-wrapper > div > label > input')
    }
    licencesearchinput() {
        return cy.get('.box-body > .inner-body-wrapper > div > label > input')
    }
    licencesearchenter() {
        return cy.get('.inner-body-wrapper > .address-wrapper > address > a > span:nth-child(2)')
    }
    licencesearchenternew() {
        return cy.get(':nth-child(1) > a > :nth-child(3)')
    }
    licenceinfoadd() {
        return cy.get('address > a > :nth-child(2)')
    }
    licencecontact() {
        return cy.get(':nth-child(2) > .contact-card > .box-body > .button > :nth-child(2)')

    }
    licencecontactsearch() {
        return cy.get('.box-body > .inner-body-wrapper > div > label > input')
    }

    licencecontactadd() {
        return cy.get(':nth-child(1) > a > :nth-child(5)')
    }
    licencecontactaddnew() {
        return cy.get('address > a > :nth-child(2)')
    }
    paymentcontact() {
        return cy.get('.box-body > .button')
    }
    paymentcontactadd() {
        return cy.get('a > :nth-child(2)')
    }
    paymentcontactaddnew() {
       return cy.get('a > :nth-child(3)')
    }
    clearingaddress() {

        return cy.get('.card > #licenseeCard > header > div > .icon-close-remove-times')
    }
    licencesearcleartext() {
        return cy.get('.box-body > .inner-body-wrapper > div > label > input').clear()
    }
    expendlicence() {
        return cy.get('.row > .card-columns > .card > #licenseeCard > .button')
    }
    expendlicencecontact() {
        return cy.get('.row > .card-columns > .card:nth-child(2) > .contact-card > .button')
    }
    expandpaymentcontactcard() {
        return cy.get('.row > .card-columns > .card > #paymentContactCard > .button')
    }
    tab()
    {
        return cy.focused()
    }
    finance()
    {
        return cy.contains('Financial')
    }
    next_office()
    {
        return cy.get('#next')
    }
    registration_no()
    {
        return cy.get('#subProductList_internalList_0_aircraftInfoViewModel_registrationMark')
    }
    make_of_aircraft()
    {
        return  cy.get('#subProductList_internalList_0_aircraftInfoViewModel_manufacturer')
    }
    terms_condition()
    {
        return  cy.get('.col-12 > .form-group > span > .custom-control > #TermsAndConditions_termsCondition')
    }
    product_submit()
    {
        return  cy.get('#productSubmit')
    }
    copy_application_no()
    {
        return  cy.get(':nth-child(2) > strong')
    }
    Applications()
    {
        return  cy.contains('Applications')
    }
    SubApplications()
    {
        return   cy.get('#subApplications > .dropdown-item')
    }
    View()
    {
        return    cy.get('.navbar-nav > .nav-item > #View > .fa-stack > .fa-external-link-alt')
    }
    Submit()
    {
        return    cy.contains('Submit')
    }


}
export default login
