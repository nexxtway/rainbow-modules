import React from 'react';
import { FormattedMessage } from 'react-intl';

const nameLabel = <FormattedMessage id="EmailPasswordSignUpForm.name" defaultMessage="Name" />;
const emailLabel = (
    <FormattedMessage id="EmailPasswordSignUpForm.email" defaultMessage="Email Address" />
);
const passwordLabel = (
    <FormattedMessage id="EmailPasswordSignUpForm.password" defaultMessage="Password" />
);
const buttonLabel = (
    <FormattedMessage id="EmailPasswordSignUpForm.signup" defaultMessage="Create account" />
);

export { nameLabel, emailLabel, passwordLabel, buttonLabel };
