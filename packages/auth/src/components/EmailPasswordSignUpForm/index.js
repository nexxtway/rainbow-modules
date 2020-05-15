import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input } from 'react-rainbow-components';
import { FormattedMessage, useIntl } from 'react-intl';
import { showAppMessage, showAppSpinner, hideAppSpinner } from '../../../../app/src/actions';
import useFirebaseApp from '../../../../firebase-hooks/src/useFirebaseApp';

const EmailPasswordSignUpForm = (props) => {
    const intl = useIntl();
    const { className, style } = props;
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const app = useFirebaseApp();
    const { nameIcon, emailIcon, passwordIcon } = props;

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            showAppSpinner();
            await app.auth().createUserWithEmailAndPassword(email, password);
            hideAppSpinner();
        } catch (error) {
            hideAppSpinner();
            showAppMessage({
                message: `${error}`,
                variant: 'error',
            });
        }
    };

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
    const namePlaceholder = intl.formatMessage({
        id: 'EmailPasswordSignUpForm.namePlaceholder',
        defaultMessage: 'Enter your name',
    });
    const emailPlaceholder = intl.formatMessage({
        id: 'EmailPasswordSignUpForm.emailPlaceholder',
        defaultMessage: 'Enter your email',
    });
    const passwordPlaceholder = intl.formatMessage({
        id: 'EmailPasswordSignUpForm.passwordPlaceholder',
        defaultMessage: 'Enter your password',
    });

    const buttonStyle = {
        width: '100%',
    };

    return (
        <form className={className} style={style} onSubmit={onSubmit}>
            <Input
                label={nameLabel}
                icon={nameIcon}
                placeholder={namePlaceholder}
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                required
            />
            <br />
            <Input
                label={emailLabel}
                icon={emailIcon}
                placeholder={emailPlaceholder}
                type="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
            />
            <br />
            <Input
                label={passwordLabel}
                icon={passwordIcon}
                placeholder={passwordPlaceholder}
                type="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
            />
            <br />
            <Button style={buttonStyle} label={buttonLabel} variant="brand" type="submit" />
        </form>
    );
};

EmailPasswordSignUpForm.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The icon to how in the name input. It must be a svg icon or a font icon. */
    nameIcon: PropTypes.node,
    /** The icon to how in the email input. It must be a svg icon or a font icon. */
    emailIcon: PropTypes.node,
    /** The icon to how in the password input. It must be a svg icon or a font icon. */
    passwordIcon: PropTypes.node,
};

EmailPasswordSignUpForm.defaultProps = {
    className: undefined,
    style: undefined,
    nameIcon: undefined,
    emailIcon: undefined,
    passwordIcon: undefined,
};

export default EmailPasswordSignUpForm;
