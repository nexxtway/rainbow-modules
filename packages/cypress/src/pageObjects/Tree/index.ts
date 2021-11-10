/// <reference types="cypress" ></reference>

import TreeNode from './node';

export interface ITree {
    getNode: (path: string) => TreeNode;
}

/**
 * The Tree page object allows to perform actions on the Tree component
 * of `react-rainbow-components` library.
 * @class
 * @implements {ITree}
 * @type {Tree}
 */
class Tree implements ITree {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object
     * @param rootElement The selector for the root element of the Option.
     */
    constructor(rootElement: string) {
        this.rootElement = rootElement;
    }

    /**
     * Get a TreeNode page object of the node specified by path
     * @method
     * @param {path} string - The node path
     * @returns {TreeNode}
     */
    getNode(path: string): TreeNode {
        return new TreeNode(`${this.rootElement} li[data-path="${path}"]`);
    }
}

export default Tree;
