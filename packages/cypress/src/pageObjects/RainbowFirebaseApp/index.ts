/// <reference types="cypress" />

import AppMessage from './AppMessage';

export interface IRainbowFirebaseApp {
    message: AppMessage;
}

/**
 * The RainbowFirebaseApp page object allows to perform actions on the RainbowFirebaseApp
 * component of `@rainbow-modules/app` library
 * @class
 * @implements {IRainbowFirebaseApp}
 * @type {RainbowFirebaseApp}
 */
class RainbowFirebaseApp implements IRainbowFirebaseApp {
    private rootElement: string;

    /**
     * Constructs a new instance of this page object.
     * @param rootElement The selector for the root element of the Button.
     */
    constructor(rootElement = 'body') {
        this.rootElement = rootElement;
    }

    /**
     * Get an AppMessage page object that allows to access the AppMessage component
     * of this app
     */
    get message(): AppMessage {
        return new AppMessage(`${this.rootElement} article[data-cy="app-message"]`);
    }
}

export default RainbowFirebaseApp;
