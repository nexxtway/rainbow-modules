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
     * @example
     * import { Sidebar } from '@rainbow-modules/cypress/pageObjects';
     *
     * const sidebar = new Sidebar('#sidebar-selector');
     * // Use sidebar.items[index] to get a SidebarItem
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Click the item
     * @method
     * @example
     * sidebar.items[1].click()
     */
    click(): void {
        cy.get(this.rootElement).find('[data-id="sidebar-item-clickable-element"]').click();
    }

    /**
     * Trigger `mouseover` event on the item
     * @method
     * @example
     * sidebar.items[1].hover()
     */
    hover(): void {
        cy.get(this.rootElement)
            .find('[data-id="sidebar-item-clickable-element"]')
            .trigger('mouseover');
    }
}

export default SidebarItem;
