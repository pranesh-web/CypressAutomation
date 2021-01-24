export const login = (username, password) => {
    cy.log('Testpranesh')
    cy.get('input[class="form-control"][tabindex="1"]').type('oomishade@ofcom.org.uk.lpe2')
    cy.get('input[class="form-control"][tabindex="2"]').type('Password.123')
   // cy.get('#login').submit()
  }