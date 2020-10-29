describe('Contact Details', () => {
  it('should display sucess message', () => {
    cy.visit('/');

    cy.get('#txtUsername').type('Admin');
    cy.get('#txtPassword').type('admin123');
    cy.get('#btnLogin').click();

    cy.get('#menu_pim_viewMyDetails').click();
    cy.get('#sidenav').contains('Contact Details').click();

    cy.get('#btnSave').click();
    cy.get('#btnSave').click();

    cy.get('.message.success').contains('Successfully Saved').should('be.visible');
  });
});