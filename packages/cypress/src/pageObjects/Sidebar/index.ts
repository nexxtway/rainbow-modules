/// <reference types="cypress" />

import SidebarItem from '../SidebarItem';

export interface ISidebar {
    getOption: (index: number) => SidebarItem;
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
     * Returns a new SidebarItem page object wraping the item in the
     * provided index.
     * @method
     * @param {number} index - The index of the option to return, starting at 1.
     * @returns {SidebarItem} The new Option page object
     */
    getOption = (index: number): SidebarItem => {
        return new SidebarItem(
            `${this.rootElement} li[data-id="sidebar-item-li"]:nth-of-type(${index})`,
        );
    };
}

export default Sidebar;
