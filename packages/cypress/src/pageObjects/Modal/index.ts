/// <reference types="cypress" />

import { AssertMap } from '../types';

/**
 * @interface Chainer
 * @template Subject
 */
interface Chainer {
    /**
     * Asserts if the title of the modal match the one provided
     * @param title {string} - The title that the modal should have
     */
    (chainer: 'title', title: string): void;
    /**
     * Asserts if the visibility of the modal match the one provided
     * @param visible {boolean} - Whether the modal should be visible or not
     */
    (chainer: 'visible', visible: boolean): void;
}

export interface IModal {
    header: Cypress.Chainable<JQuery<HTMLElement>>;
    content: Cypress.Chainable<JQuery<HTMLElement>>;
    footer: Cypress.Chainable<JQuery<HTMLElement>>;
    close: () => void;
    expect: Chainer;
}

/**
 * The Modal page object allows to perform actions on the Modal component
 * of `react-rainbow-components` library.
 * @class
 * @implements {IModal}
 * @type {Modal}
 */
class Modal implements IModal {
    private rootElement: string;

    /**
     * A map with all the assertions.
     * @private
     */
    private assertMap: AssertMap = {
        title: (_: string, title: string) => {
            this.header.should('have.text', title);
        },
        visible: (_: string, visible: boolean) => {
            if (visible) {
                cy.get(this.rootElement).should('exist').should('be.visible');
            } else {
                cy.get(this.rootElement).should('not.exist');
            }
        },
    };

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Input.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Get the root element wrapped in `cy`
     * @private
     */
    private get root(): Cypress.Chainable<JQuery<HTMLElement>> {
        return cy.get(this.rootElement);
    }

    /**
     * Get the header of the modal
     * @member {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    get header(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.root.find('[id^="modal-heading-"]');
    }

    /**
     * Get the footer of the modal
     * @member {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    get footer(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.root.find('section[role="dialog"] > footer');
    }

    /**
     * Get the content of the modal
     * @member {Cypress.Chainable<JQuery<HTMLElement>>}
     */
    get content(): Cypress.Chainable<JQuery<HTMLElement>> {
        return this.root.find('[id^="modal-content-"]');
    }

    /**
     * Close this modal clicking the close button
     * @method
     */
    close(): void {
        this.root.find('#modal-close-button').click();
    }

    /**
     * Execute an assertion on this page object
     */
    get expect(): Chainer {
        return (chainer: string, ...params: any[]) => this.assertMap[chainer](chainer, ...params);
    }
}

export default Modal;
