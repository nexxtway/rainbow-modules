import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, useIntl } from 'react-intl';
import { Input, Button } from 'react-rainbow-components';
import { showAppMessage, showAppSpinner, hideAppSpinner } from '@rainbow-modules/app';
import { useFirebaseApp } from '@rainbow-modules/firebase-hooks';
import StyledContainer from './styled/container';

export default function EmailPasswordSignInForm(props) {
    const { className, style, emailIcon, passwordIcon } = props;
    const intl = useIntl();
    const app = useFirebaseApp();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const emailLabel = (
        <FormattedMessage defaultMessage="Email Address" id="EmailPasswordSignInForm.email" />
    );

    const passwordLabel = (
        <FormattedMessage defaultMessage="Password" id="EmailPasswordSignInForm.password" />
    );

    const emailPlaceholder = intl.formatMessage({
        id: 'EmailPasswordSignInForm.emailPlaceholder',
        defaultMessage: 'Enter your email',
    });
    const passwordPlaceholder = intl.formatMessage({
        id: 'EmailPasswordSignInForm.passwordPlaceholder',
        defaultMessage: 'Enter your password',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            showAppSpinner();
            await app.auth().signInWithEmailAndPassword(email, password);
            hideAppSpinner();
        } catch (error) {
            hideAppSpinner();
            showAppMessage({
                message: `${error}`,
                variant: 'error',
            });
        }
    };

    return (
        <StyledContainer className={className} style={style} onSubmit={handleSubmit}>
            <Input
                required
                label={emailLabel}
                placeholder={emailPlaceholder}
                type="email"
                name="email"
                icon={emailIcon}
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
            />
            <Input
                required
                label={passwordLabel}
                placeholder={passwordPlaceholder}
                type="password"
                name="password"
                icon={passwordIcon}
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
            />
            <Button
                type="submit"
                variant="brand"
                label={
                    <FormattedMessage defaultMessage="Login" id="EmailPasswordSignInForm.login" />
                }
            />
        </StyledContainer>
    );
}

EmailPasswordSignInForm.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The icon to how in the email input. It must be a svg icon or a font icon. */
    emailIcon: PropTypes.node,
    /** The icon to how in the password input. It must be a svg icon or a font icon. */
    passwordIcon: PropTypes.node,
};

EmailPasswordSignInForm.defaultProps = {
    className: undefined,
    style: undefined,
    emailIcon: undefined,
    passwordIcon: undefined,
};
