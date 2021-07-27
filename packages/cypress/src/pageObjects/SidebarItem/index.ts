/// <reference types="cypress" />

export interface ISidebarItem {
    click: () => void;
    hover: () => void;
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

    /**
     * Click the item
     * @method
     */
    click = (): void => {
        cy.get(this.rootElement).find('[data-id="sidebar-item-clickable-element"]').click();
    };

    /**
     * Trigger `mouseover` event on the item
     * @method
     */
    hover = (): void => {
        cy.get(this.rootElement)
            .find('[data-id="sidebar-item-clickable-element"]')
            .trigger('mouseover');
    };
}

export default SidebarItem;
