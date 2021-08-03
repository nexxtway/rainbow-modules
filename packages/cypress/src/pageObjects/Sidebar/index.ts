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
 * @type {Sidebar}
 */
class Sidebar implements ISidebar {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Sidebar.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Array of SidebarItem page objects where each item wraps a sidebar item
     * @member {SidebarItem[]}
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
