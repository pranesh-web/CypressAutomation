before(function () {
  cy.fixture('testdata').then(function (data) {
    this.data = data
  })
})

describe('Portal_1041', function () {
  it('Acceptance Creteria for upload documents', function () {


    cy.visit(Cypress.env('portalUrl'))
    cy.wait(5000)

    cy.get('#userIconId').click()

    cy.get(':nth-child(5) > .dropdown-menu > li > .dropdown-item').click()

    cy.wait(5000)

    cy.get('input[class="form-control"][tabindex="1"]').type('oomishade@ofcom.org.uk.lpe2')
    cy.get('input[class="form-control"][tabindex="2"]').type('Password.123')
    cy.get('.btn.btn-default').click()
    cy.get('[href="/portal/product/index"] > span').click({ force: true })
    cy.get(':nth-child(2) > ul > :nth-child(1) > a > span').click({ force: true })
    cy.get('a > div').click()
    cy.get('.bubble > ul > li > a > span').click()
    cy.get(':nth-child(2) > .contact-card > .box-body > .button > :nth-child(2)').click()


    cy.get('.address-wrapper > :nth-child(1) > a').click()
    cy.get('.box-body > .button > :nth-child(2)').click()
    cy.get('.address-wrapper > :nth-child(1) > a').click()

    cy.get('select').select('More than 14,000 kg')

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0');
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    cy.get('[id="LicenceInfoSpecificsViewModel.licenceDate"]').type(today)
    cy.get('.next > :nth-child(1)').click()

    cy.get('#registrationMark').type(this.data.registration)
    cy.get('#manufacturer').type(this.data.aircraft)
    cy.get('#model').type(this.data.model)

    cy.get('.grid-large-item > #content > .col-12 > label > #equipCat').select('ESN')
    cy.get('.next > :nth-child(1)').click()
    cy.get('#top > #app > #outer-wrapper > #inner-wrapper > .container').click()

    cy.get('#multistepform > .multistep-form-progress-bar > li > .active > span').click()
    cy.get('.icon-attachment').click()
    cy.get('select').select('Passport')
    const testdata = 'TestData/passport.png'
    cy.get('#file').attachFile(testdata);
    cy.get('#addAttachmentButtonId').click()

    cy.log("Passport uploaded successfully" + cy.contains('Passport').should('be.visible'))
    cy.log("Please verify the passport details" + cy.get('tr').eq(1).should('contain', 'Passport'))

    cy.get('select').select('Certificate A', { force: true })
    const testdata_ce = 'TestData/certificate.jpg'
    cy.get('#file').attachFile(testdata_ce);
    cy.get('#addAttachmentButtonId').click({ force: true })
    cy.wait(30000)

    cy.log("Please verify the certificate A details" + cy.get('tr').eq(2).should('contain', 'Certificate A'))


    cy.get('select').select('Certificate B', { force: true })
    const testdata_ceb = 'TestData/test_portal.pdf'
    cy.get('#file').attachFile(testdata_ceb);
    cy.get('#addAttachmentButtonId').click({ force: true })
    cy.wait(20000)
    cy.log("Please verify the other details" + cy.get('tr').eq(2).should('contain', 'Certificate'))
    cy.get('select').select('Other', { force: true })
    const testdata_cebo = 'TestData/test_portal.pdf'
    cy.get('#file').attachFile(testdata_cebo);
    cy.get('#addAttachmentButtonId').click({ force: true })
    cy.get('select').select('Equipment Licence', { force: true })
    const testdata_equipment = 'TestData/test_portal.pdf'
    cy.get('#file').attachFile(testdata_equipment);
    cy.get('#addAttachmentButtonId').click({ force: true })
   // cy.wait(10000)
    //cy.get('.next > :nth-child(1)').click({force: true})
    //cy.get('#termsCondition').click()
   //cy.get('.next > :nth-child(1)').click()


   

    

  })





})
