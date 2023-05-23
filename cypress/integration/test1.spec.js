describe('Image Selection', () => {
    beforeEach(() => {
      cy.visit('/source/bowl-screen.html'); // replace with the path to your page
    });
  
    it('should add or remove "selected" class on main image', () => {
      cy.get('#main-image').click().should('have.class', 'selected');
      cy.get('#main-image').click().should('not.have.class', 'selected');
    });
  
    it('should add or remove "selected" class on other images', () => {
      cy.get('#other-image').click().should('have.class', 'selected');
      cy.get('#other-image').click().should('not.have.class', 'selected');
    });
  });
  