import React from 'react';
import { FormattedMessage } from 'react-intl';

const emailLabel = (
    <FormattedMessage id="EmailPasswordSignInForm.email" defaultMessage="Email Address" />
);
const passwordLabel = (
    <FormattedMessage id="EmailPasswordSignInForm.password" defaultMessage="Password" />
);
const buttonLabel = <FormattedMessage id="EmailPasswordSignInForm.signup" defaultMessage="Login" />;

export { emailLabel, passwordLabel, buttonLabel };
