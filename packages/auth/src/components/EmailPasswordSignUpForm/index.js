import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { showAppMessage, showAppSpinner, hideAppSpinner } from '@rainbow-modules/app';
import { useFirebaseApp } from '@rainbow-modules/firebase-hooks';
import { nameIcon, emailIcon, passwordIcon } from './icons';
import { StyledInput, StyledButton } from './styled';
import { nameLabel, emailLabel, passwordLabel, buttonLabel } from './labels';
import messages from './messages';
import getAuth from '../../helpers/getAuth';
import createUserWithEmailAndPassword from '../../helpers/createUserWithEmailAndPassword';

const EmailPasswordSignUpForm = (props) => {
    const intl = useIntl();
    const { className, style } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const app = useFirebaseApp();
    const auth = getAuth(app);

    const namePlaceholder = intl.formatMessage(messages.namePlaceholder);
    const emailPlaceholder = intl.formatMessage(messages.emailPlaceholder);
    const passwordPlaceholder = intl.formatMessage(messages.passwordPlaceholder);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            showAppSpinner();
            await createUserWithEmailAndPassword(auth, email, password);
            await auth.currentUser.updateProfile({
                displayName: name,
            });
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
                label={nameLabel}
                icon={nameIcon}
                placeholder={namePlaceholder}
                name="name"
                onChange={(event) => setName(event.target.value)}
                required
            />
            <StyledInput
                label={emailLabel}
                icon={emailIcon}
                placeholder={emailPlaceholder}
                type="email"
                name="email"
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            <StyledInput
                label={passwordLabel}
                icon={passwordIcon}
                placeholder={passwordPlaceholder}
                type="password"
                name="password"
                onChange={(event) => setPassword(event.target.value)}
                required
            />
            <StyledButton label={buttonLabel} variant="brand" type="submit" />
        </form>
    );
};

EmailPasswordSignUpForm.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

EmailPasswordSignUpForm.defaultProps = {
    className: undefined,
    style: undefined,
};

export default EmailPasswordSignUpForm;
