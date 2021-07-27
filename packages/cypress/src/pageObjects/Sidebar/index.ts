/// <reference types="cypress" />

import SidebarItem from '../SidebarItem';

export interface ISidebar {
    items: SidebarItem[];
}

/**
 * Page object to perform operations on Sidebar
 * @type {ISidebar}
 */
class Sidebar implements ISidebar {
    private rootElement: string;

    /**
     * Constructs a new instance of this class
     * @param rootElement The root element for the page object.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Array of SidebarItem page objects where each item wraps a sidebar item
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
