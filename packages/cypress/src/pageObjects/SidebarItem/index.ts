/// <reference types="cypress" />

export interface ISidebarItem {
    click: () => void;
    hover: () => void;
}

/**
 * The SidebarItem page object allows to perform actions on the SidebarItem component
 * of `react-rainbow-components` library.
 *
 * You will almost never need to use this page object directly. Use `Sidebar.items` instead.
 * @class
 * @implements {ISidebarItem}
 * @type {SidebarItem}
 */
class SidebarItem implements ISidebarItem {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the SidebarItem.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Click the item
     * @method
     */
    click(): void {
        cy.get(this.rootElement).find('[data-id="sidebar-item-clickable-element"]').click();
    }

    /**
     * Trigger `mouseover` event on the item
     * @method
     */
    hover(): void {
        cy.get(this.rootElement)
            .find('[data-id="sidebar-item-clickable-element"]')
            .trigger('mouseover');
    }
}

export default SidebarItem;
