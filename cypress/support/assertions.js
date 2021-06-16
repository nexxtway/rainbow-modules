/* eslint-disable no-underscore-dangle */
const isInViewport = (_chai) => {
    function assertIsInViewport() {
        const subject = this._obj;

        const bottom = Cypress.$(cy.state('window')).height();
        const right = Cypress.$(cy.state('window')).width();
        const rect = subject[0].getBoundingClientRect();

        this.assert(
            rect.top >= 0 && rect.bottom <= bottom && rect.left >= 0 && rect.right <= right,
            'expected #{this} to be in viewport',
            'expected #{this} to not be in viewport',
            this._obj,
        );
    }

    _chai.Assertion.addMethod('inViewport', assertIsInViewport);
};

chai.use(isInViewport);
