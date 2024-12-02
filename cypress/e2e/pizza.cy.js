describe('Order Form Test', () => {
  it('should navigate to order form and complete the order process', () => {
   
    cy.visit('http://localhost:5173');

    cy.get('.giris-btn').click();

    cy.url().should('eq', 'http://localhost:5173/order-form');

    cy.get('input.data-cy-boyut[value="Orta"]').check();

    cy.get('option.data-cy-hamur[value="Orta"]').then((option) => {
      cy.wrap(option).parent().select('Orta'); 
    });
    cy.get('input.data-cy-not-disabled[name="ek-malzeme"]').each((checkbox) => {
      cy.wrap(checkbox).check();
    });

    cy.get('input[name="isim"]').type('Bora Aydın');


    cy.get('textarea[name="order-note"]').type('Merhaba Siparişim Bu Şekilde');

   
    cy.get('button[type="submit"]').should('not.be.disabled');

   
    cy.get('button[type="submit"]').click();

  
    cy.url().should('include', '/siparis-ozeti'); 
  });
});
