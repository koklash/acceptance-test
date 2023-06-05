describe('Check if Logo is there', () => {
  it('should check if the image is on the website', () => {
    // visit the website
    cy.visit('https://bs-an.de/');

    // get the image element by its class name
    cy.get('.custom-logo')

      // assert that the image has the correct source attribute
      .should('have.attr', 'src', 'https://bs-an.de/wp-content/uploads/2022/09/cropped-BSZ-AN-logo_2022-09-21.jpg')
      .should('be.visible');
  });
});

describe('Leherkräfte Bild vorhanden', () => {
  it('should click the span and check if the image is visible', () => {
    // visit the website
    cy.visit('https://bs-an.de/');

    cy.contains('a', 'Alle akzeptieren')
      .click();
    // get the span element by its text content
    cy.get('#menu-item-431').find('a').click({ force: true })
    
    // cy.contains('span', 'Lehrkräfte')
    // force click the span even if it is not visible
    //  .click({ force: true });

    // get the image element by its src attribute
    cy.get('img[src="https://bs-an.de/wp-content/uploads/2022/09/IT_BFS-1024x626.jpg"]')

      // assert that the image is visible
      .should('be.visible');
  });
});

describe('Span click test', () => {
  it('should click the span and check if the image is visible', () => {
    // visit the website
    cy.visit('https://bs-an.de/');

    cy.contains('a', 'Alle akzeptieren')
      .click();
    // get the span element by its text content
    cy.get('.header-searchform').find('input').click().type('informatik{Enter}')
    cy.contains('a', 'Fachinformatiker/in Anwendungsentwicklung')
    .should('have.attr', 'href', 'https://bs-an.de/fachinformatiker-in-anwendungsentwicklung/')

  });
});

