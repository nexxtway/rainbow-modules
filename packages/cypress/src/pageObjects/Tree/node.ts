/// <reference types="cypress" ></reference>

import { AssertMap } from '../types';

/**
 * @interface Chainer
 */
interface Chainer {
    /**
     * Asserts if the node is expanded
     * @param expanded {boolean}
     */
    (chainer: 'expanded', expanded: boolean): void;

    /**
     * Asserts if the node is selected
     * @param expanded {boolean}
     */
    (chainer: 'selected', selected: boolean): void;
}

export interface ITreeNode {
    click: () => void;
    expand: () => void;
    collapse: () => void;
}

/**
 * The TreeNode page object allows to perform actions on the nodes of the Tree component
 * of `react-rainbow-components` library.
 *
 * You will almost never need to use this page object directly. Instead you should
 * use the corresponding `getNode` method of the Tree page object.
 * @class
 * @implements {ITreeNode}
 * @type {TreeNode}
 */
class TreeNode implements ITreeNode {
    private rootElement: string;

    /**
     * A map with all the assertions.
     * @private
     */
    private assertMap: AssertMap = {
        expanded: (_: string, expanded: boolean) => {
            cy.get(this.rootElement)
                .invoke('attr', 'aria-expanded')
                .then((ariaExpanded) => {
                    if (expanded) {
                        cy.wrap(ariaExpanded).should('eq', 'true');
                    } else {
                        cy.wrap([false, 'false']).should('contain', ariaExpanded);
                    }
                });
        },
        selected: (_: string, selected: boolean) => {
            cy.get(this.rootElement)
                .invoke('attr', 'aria-selected')
                .then((ariaSelected) => {
                    if (selected) {
                        cy.wrap(ariaSelected).should('eq', 'true');
                    } else {
                        cy.wrap([false, 'false', undefined]).should('contain', ariaSelected);
                    }
                });
        },
    };

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Option.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Click this tree node
     */
    click(): void {
        cy.get(`${this.rootElement} [data-id="node-element"]`).click();
    }

    /**
     * Expand this tree node. Does nothing if already expanded.
     */
    expand(): void {
        cy.get(this.rootElement)
            .invoke('attr', 'aria-expanded')
            .then((expanded) => {
                if (!expanded || expanded === 'false') {
                    cy.get(
                        `${this.rootElement} > [data-id="node-element"] > [data-id="no-selectable-container"] button`,
                    ).click();
                }
            });
    }

    /**
     * Collapse this tree node. Does nothing if already collapsed.
     */
    collapse(): void {
        cy.get(this.rootElement)
            .invoke('attr', 'aria-expanded')
            .then((expanded) => {
                if (expanded === 'true') {
                    cy.get(
                        `${this.rootElement} > [data-id="node-element"] > [data-id="no-selectable-container"] button`,
                    ).click();
                }
            });
    }

    /**
     * Execute an assertion on this page object
     * @method
     */
    get expect(): Chainer {
        return (chainer: string, ...params: unknown[]) =>
            this.assertMap[chainer](chainer, ...params);
    }
}

export default TreeNode;
