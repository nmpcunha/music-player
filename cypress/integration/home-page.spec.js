describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it("Should show 'Music Player' as page's title", () => {
    cy.title().should('eq', 'Music Player');
  });

  it("Should read '🏗️ Application is still under development 🚧' inside custom element", () => {
    cy.get('music-player')
      .shadow()
      .find('p')
      .should('contain.text', '🏗️ Application is still under development 🚧');
  });
});
