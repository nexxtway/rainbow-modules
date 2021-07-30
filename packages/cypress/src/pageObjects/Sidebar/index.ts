/// <reference types="cypress" />

import SidebarItem from '../SidebarItem';

export interface ISidebar {
    items: SidebarItem[];
}

/**
 * The Sidebar page object allows to perform actions on the Sidebar component
 * of `react-rainbow-components` library.
 * @class
 * @implements {ISidebar}
 */
class Sidebar implements ISidebar {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Sidebar.
     * @example
     * import { Sidebar } from '@rainbow-modules/cypress/pageObjects';
     *
     * const sidebar = new Sidebar('#sidebar-selector');
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Array of SidebarItem page objects where each item wraps a sidebar item
     * @member {SidebarItem[]}
     * @example
     * // Click a sidebar item
     * sidebar.items[1].click();
     */
    get items(): SidebarItem[] {
        const { length } = Cypress.$(`${this.rootElement} li[data-id="sidebar-item-li"]`);
        return Array.from(
            { length },
            (_v, i) =>
                new SidebarItem(
                    `${this.rootElement} li[data-id="sidebar-item-li"]:nth-of-type(${i + 1})`,
                ),
        );
    }
}

export default Sidebar;
