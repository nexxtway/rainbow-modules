/// <reference types="cypress" />
import FloatingSearch from '../FloatingSearch';

export interface IFloatingSearchButtonIcon {
    floatingSearch: FloatingSearch;
    click: () => void;
}

/**
 * The FloatingSearchButtonIcon page object allows to perform actions on the
 * FloatingSearchButtonIcon component of `@rainbow-modules/listview` library.
 * @class
 * @implements {IFloatingSearch}
 * @type {FloatingSearch}
 */
class FloatingSearchButtonIcon implements IFloatingSearchButtonIcon {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object.
     * @param rootElement The selector for the root element of the Button.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Get the FloatingSearch page object asociated with this FloatingSearchButtonIcon
     * @member {FloatingSearch}
     */
    get floatingSearch(): FloatingSearch {
        const ariaControls = Cypress.$(`${this.rootElement}`).attr('aria-controls');
        return new FloatingSearch(`#${ariaControls}`);
    }

    /**
     * Click the button
     * @method
     */
    click(): void {
        cy.get(this.rootElement).click();
    }
}

export default FloatingSearchButtonIcon;
