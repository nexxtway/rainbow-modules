/// <reference types="cypress" />

export interface ISidebarItem {
    click: () => Cypress.Chainable<JQuery<HTMLElement>>;
    hover: () => Cypress.Chainable<JQuery<HTMLElement>>;
}

/**
 * Page object to perform operations on a SidebarItem
 * @type {ISidebar}
 */
class SidebarItem implements ISidebarItem {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    click = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy.get(this.rootElement).find('[data-id="sidebar-item-clickable-element"]').click();
    };

    hover = (): Cypress.Chainable<JQuery<HTMLElement>> => {
        return cy
            .get(this.rootElement)
            .find('[data-id="sidebar-item-clickable-element"]')
            .trigger('mouseover');
    };
}

export default SidebarItem;
