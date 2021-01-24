
before(function () {
  cy.fixture('testdata').then(function (data) {
    this.data = data
  })
})


describe('mySPECTRAOffice', function () {



  it('login', function () {
    cy.visit('/');
    cy.login('prku', 'prku')

  })





  it('add_aircaft_details', function () {


    //cy.visit('/');
    //cy.login('prku', 'prku')
    //cy.url().should('contains', 'https://test.myspectra.app/office/');
    cy.get('.dropdown:nth-child(3) > .nav-link').click();
    cy.get('.show > .nav-item:nth-child(1) > .dropdown-item').click();
    //cy.url().should('contains', 'https://test.myspectra.app/office/product/create');
    cy.get('.new-application:nth-child(1) li:nth-child(1) > a').click();
    cy.get('#L .fas').click();
    cy.get('#collapseAddress > .card-body > .d-flex > .form-group > #companyNameEditForm').click()
    //data #test
    //cy.get('#collapseAddress > .card-body > .d-flex > .form-group > #companyNameEditForm').type(this.data.licenceInfo)
    //data #dev
    cy.get('#collapseAddress > .card-body > .d-flex > .form-group > #companyNameEditForm').type(this.data.licenceInfodev)
    cy.get('.form-group > .typeahead > .active > .suggestion-list > .suggestion-list-item:nth-child(3)').click({ force: true })
    cy.get('.modal-dialog > .modal-content > .modal-body > .modal-footer > #saveAddressButton').click()
    cy.get('#C > .card-body > #addAddressButton > .fas').click()
    //data #test
    //cy.get('#firstNameEditForm').type(this.data.licenceContact);
    //data dev
    cy.get('#firstNameEditForm').type(this.data.licenceContactdev, { force: true });
    cy.get('.d-flex:nth-child(2) .dropdown-item:nth-child(1) .suggestion-list-item:nth-child(1)').click({ force: true });
    cy.get('#saveAddressButton').click()
    cy.get('#mySPAddressBoard > #P > .address-empty > #addAddressButton > .fas').click({ force: true })
    cy.get('.col-12 > .row > #mySPAddressBoard > #C > .card-body').click({ force: true })
    cy.get('#mySPAddressBoard > #P > .address-empty > #addAddressButton > .fas').click({ force: true })
    cy.get('#collapseAddress > .card-body > .d-flex > .form-group > #lastNameEditForm').click({ force: true })
    //data #test
    //cy.get('#collapseAddress > .card-body > .d-flex > .form-group > #lastNameEditForm').type(this.data.paymentcontact)
    //data devs
    cy.wait(5000)
    cy.get('#collapseAddress > .card-body > .d-flex > .form-group > #lastNameEditForm').type(this.data.paymentcontactdev, { force: true })
    cy.get('.form-group:nth-child(3) .active .font-weight-bold').click({ force: true });
    //cy.get('.modal-dialog > .modal-content > .modal-body > .modal-footer > s#saveAddressButton').click()
    cy.get('#saveAddressButton').click({ force: true });
    //cy.get('#next > span').click({force: true})

    cy.get('#licenceInfoViewModel_LicenceInfoSpecificsViewModel_category').select('TC', { force: true })
    cy.get('#licenceInfoViewModel_LicenceInfoSpecificsViewModel_category').should('have.value', 'TC')
    cy.get('#licenceInfoViewModel_LicenceInfoSpecificsViewModel_licenceDate').dblclick();

    cy.get('#next > span').click()
    // cy.wait(5000)
    cy.get('#subProductList_internalList_0_aircraftInfoViewModel_registrationMark').type(this.data.registration, { force: true })

    cy.get('.form-group > #content > #bottom_nav > .text-right > div').click()
    cy.get('#content > .col-12 > .form-group > .col-sm-9 > #subProductList_internalList_0_aircraftInfoViewModel_manufacturer').click()
    cy.get('#content > .col-12 > .form-group > .col-sm-9 > #subProductList_internalList_0_aircraftInfoViewModel_manufacturer').type(this.data.aircraft)
    cy.get("#subProductList_internalList_0_aircraftInfoViewModel_model").type(this.data.model)

    cy.get('#content').click();
    cy.get('.filter-option-inner-inner').click();
    cy.get('li:nth-child(8) .text').click();
    cy.get('#top').click();
    cy.get('#next > span').click()
    cy.get('#next > span').click()
    cy.get('.custom-control-label').click();

    cy.get('#next > span').click()
    cy.get('#productSubmit').click()
    //cy.wait(5000)
    cy.get('.alert li:nth-child(2)').click();
    //cy.get('.dropdown:nth-child(3) > .nav-link').click();

    //cy.get('.show > .nav-item:nth-child(3) > .dropdown-item').click();
    //cy.url().should('contains', 'https://test.myspectra.app/office/applicationSearch/applicationSearchList');

    //cy.get('.fht-cell > .filter-control > .input-group > .position-relative > .bootstrap-table-filter-control-applicationApName').click()

    // cy.get('.fht-cell > .filter-control > .input-group > .position-relative > .bootstrap-table-filter-control-applicationApName').type('AR001214/001')
    //cy.get('#applicationListTable > tbody > tr > :nth-child(3)').click({ multiple: true, force:true});
    //cy.get('tbody:nth-child(3) td:nth-child(3)').dblclick();







  })



})
