import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { showAppMessage, showAppSpinner, hideAppSpinner } from '@rainbow-modules/app';
import { useFirebaseApp } from '@rainbow-modules/firebase-hooks';
import { emailIcon, passwordIcon } from './icons';
import { emailLabel, passwordLabel, buttonLabel } from './labels';
import messages from './messages';
import { StyledInput, StyledButton } from './styled';
import getAuth from '../../helpers/getAuth';
import signInWithEmailAndPassword from '../../helpers/signInWithEmailAndPassword';

export default function EmailPasswordSignInForm(props) {
    const { className, style } = props;
    const intl = useIntl();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const app = useFirebaseApp();
    const auth = getAuth(app);

    const emailPlaceholder = intl.formatMessage(messages.emailPlaceholder);
    const passwordPlaceholder = intl.formatMessage(messages.passwordPlaceholder);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            showAppSpinner();
            await signInWithEmailAndPassword(auth, email, password);
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
        <form className={className} style={style} onSubmit={handleSubmit} noValidate>
            <StyledInput
                required
                label={emailLabel}
                placeholder={emailPlaceholder}
                type="email"
                name="email"
                icon={emailIcon}
                value={email}
                onChange={({ target: { value } }) => setEmail(value)}
            />
            <StyledInput
                required
                label={passwordLabel}
                placeholder={passwordPlaceholder}
                type="password"
                name="password"
                icon={passwordIcon}
                value={password}
                onChange={({ target: { value } }) => setPassword(value)}
            />
            <StyledButton type="submit" variant="brand" label={buttonLabel} />
        </form>
    );
}

EmailPasswordSignInForm.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

EmailPasswordSignInForm.defaultProps = {
    className: undefined,
    style: undefined,
};
