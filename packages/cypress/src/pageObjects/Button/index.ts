/**
 * Rainbow Button Page Object
 */
class Button {
    private rootElement: string;

    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the button element.
     */
    get button(): Cypress.Chainable<JQuery<HTMLButtonElement>> {
        return cy.get(this.rootElement).find('button');
    }
}

export default Button;
