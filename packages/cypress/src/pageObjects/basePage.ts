/* eslint-disable import/prefer-default-export */
export class BasePageObject {
    rootElement: Cypress.Chainable<JQuery<HTMLElement>>;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: Cypress.Chainable<JQuery<HTMLElement>>) {
        this.rootElement = rootElement;
    }
}
