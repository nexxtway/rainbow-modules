import React from 'react';
import { FormattedMessage } from 'react-intl';

const defaultCancelButtonLabel = (
    <FormattedMessage id="ConfirmModal.button.cancel" defaultMessage="Cancel" />
);
const defaultOkButtonLabel = <FormattedMessage id="ConfirmModal.button.ok" defaultMessage="Ok" />;
const defaultTitle = <FormattedMessage id="ConfirmModal.defaultTitle" defaultMessage="Confirm" />;

export { defaultCancelButtonLabel, defaultOkButtonLabel, defaultTitle };
