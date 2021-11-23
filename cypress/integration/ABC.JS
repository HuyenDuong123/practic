
it('login',()=>{
    cy.visit('http://localhost:3000/login')
cy.get('input').first().type('ragarwal+sotatek1@cogent.co.jp');
cy.get('input[name="password"]').type('Hh123456789#');
cy.get('button[type="submit"]').click();
cy.wait(5000)
 //cy.get('tr>button').click();
 cy.get('[data-cy=sidebar] > .Button__ButtonStyle-sc-1aifjjh-0').click();
 cy.get('button').contains('Next').should('be.disabled');

})


