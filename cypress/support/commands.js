import 'cypress-file-upload';
Cypress.Commands.add('login', (username, password) => {

   // cy.get('.nav-item:nth-child(1) > .nav-link').click();
   // cy.url().should('contains', 'https://test.myspectra.app/office/');
   // cy.get('.fa-user').click();
   // cy.url().should('contains', 'https://test.myspectra.app/office/saml/login');
   // cy.url().should('contains', 'https://test.myspectra.app/auth/realms/office_ls/login-actions/authenticate');
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    // cy.get('#kc-login').click();


})




