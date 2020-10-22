import { defineMessages } from 'react-intl';

const messages = defineMessages({
    setupIntentModalTitle: {
        id: 'StripeCheckoutModal.setupIntent.title',
        defaultMessage: 'Add Card',
    },
    paymentIntentModalTitle: {
        id: 'StripeCheckoutModal.paymentIntent.title',
        defaultMessage: 'Pay With',
    },
    errorMessage: {
        id: 'StripeCheckoutModal.errorMessage',
        defaultMessage: 'Upps! Something went wrong',
    },
    inputNameLabel: {
        id: 'StripeCheckoutModal.cardholderLabel',
        defaultMessage: 'Cardholder Name',
    },
    inputNamePlaceholder: {
        id: 'StripeCheckoutModal.cardholderPlaceholder',
        defaultMessage: 'Enter the name on your card',
    },
    cardLabel: {
        id: 'StripeCheckoutModal.cardInformationLabel',
        defaultMessage: 'Card Information',
    },
    cancelButtonLabel: {
        id: 'StripeCheckoutModal.cancelButtonLabel',
        defaultMessage: 'Cancel',
    },
    setupIntentOkButtonLabel: {
        id: 'StripeCheckoutModal.setupIntent.okButtonLabel',
        defaultMessage: 'Save',
    },
    paymentIntentOkButtonLabel: {
        id: 'StripeCheckoutModal.paymentIntent.okButtonLabel',
        defaultMessage: 'Pay',
    },
});

export default messages;
