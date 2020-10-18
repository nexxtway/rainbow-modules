import { defineMessages } from 'react-intl';

const messages = defineMessages({
    confirmationModalHeader: {
        id: 'CreditCardPicker.ConfirmationModal.header',
        defaultMessage: 'Are you sure you want delete this credit card?',
        description: 'Header text of the confirmation modal when remove a card',
    },
    confirmationModalQuestion: {
        id: 'CreditCardPicker.ConfirmationModal.question',
        defaultMessage: "This card will be deleted immediately. You can't undo this action.",
        description: 'Question text of the confirmation modal when remove a card',
    },
    confirmationModalOkButtonLabel: {
        id: 'CreditCardPicker.ConfirmationModal.okButtonLabel',
        defaultMessage: 'Delete',
        description: 'Ok button label of the confirmation modal when remove a card',
    },
    confirmationModalCancelButtonLabel: {
        id: 'CreditCardPicker.ConfirmationModal.cancelButtonLabel',
        defaultMessage: 'Cancel',
        description: 'Cancel button label of the confirmation modal when remove a card',
    },
});

export default messages;
