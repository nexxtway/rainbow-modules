/**
 * Rainbow Input Page Object
 */
class Input {
    private rootElement: string;

    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Gets the input element.
     */
    get input(): Cypress.Chainable<JQuery<HTMLInputElement>> {
        return cy.get(this.rootElement).find('input');
    }
}

export default Input;
