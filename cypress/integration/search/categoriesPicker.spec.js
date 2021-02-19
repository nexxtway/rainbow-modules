const URL = 'iframe.html?id=modules-search-stories-categoriespicker--basic-categories-picker';

describe('<CategoriesPicker />', () => {
    beforeEach(() => {
        cy.visit(URL);
    });

    it('should check the option when clicked', () => {
        cy.get('label').eq(1).click();
        cy.get('input[type="checkbox"]').eq(1).should('be.checked');
    });

    it('should not uncheck the option when isSelected is true and the option is clicked', () => {
        cy.get('label').first().click();
        cy.get('input[type="checkbox"]').first().should('be.checked');
    });

    it('should uncheck the option when isSelected is true and the close icon is clicked', () => {
        cy.get('a').first().click();
        cy.get('input[type="checkbox"]').first().should('not.be.checked');
    });
});
