import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Input, Button, RenderIf } from 'react-rainbow-components';
import { isEmptyObject } from '@rainbow-modules/validation';
import { showAppMessage } from '@rainbow-modules/app';
import { ModalContainer, StripeInput, ButtonsContainer, CancelButton, Overlay } from './styled';
import messages from './messages';
import Loading from './loading';

function getErrors(showErrors, cardholderName, stripeCard) {
    const errors = {};
    if (showErrors) {
        if (!cardholderName) {
            errors.name = 'Cardholder name is required';
        }
        if (!stripeCard || (!stripeCard.error && !stripeCard.isComplete)) {
            errors.stripe = 'Your card information is required';
        }
        if (stripeCard && stripeCard.error && stripeCard.error.message) {
            errors.stripe = stripeCard.error.message;
        }
    }
    return errors;
}

export default function StripeCheckoutModal(props) {
    const {
        className,
        style,
        clientSecretResolver,
        variant,
        apiKey,
        isOpen,
        onCancel,
        onSuccess,
    } = props;
    const [cardholderName, setCardholderName] = useState('');
    const [stripeCard, setStripeCard] = useState();
    const [showErrors, setShowErrors] = useState(false);
    const [isLoading, setLoading] = useState(true);
    const [isLoadingConfirm, setLoadingConfirm] = useState(false);
    const formRef = useRef();
    const clientSecret = useRef();
    const intl = useIntl();
    const errors = getErrors(showErrors, cardholderName, stripeCard);
    const isPaymentIntent = variant === 'paymentIntent';
    const title = isPaymentIntent
        ? intl.formatMessage(messages.paymentIntentModalTitle)
        : intl.formatMessage(messages.setupIntentModalTitle);
    const inputNameLabel = intl.formatMessage(messages.inputNameLabel);
    const inputNamePlaceholder = intl.formatMessage(messages.inputNamePlaceholder);
    const cardLabel = intl.formatMessage(messages.cardLabel);
    const cancelButtonLabel = intl.formatMessage(messages.cancelButtonLabel);
    const okButtonLabel = isPaymentIntent
        ? intl.formatMessage(messages.paymentIntentOkButtonLabel)
        : intl.formatMessage(messages.setupIntentOkButtonLabel);

    const showErrorMessage = (error) => {
        // eslint-disable-next-line no-console
        console.error(error);
        showAppMessage({
            variant: 'error',
            message: intl.formatMessage(messages.errorMessage),
        });
    };

    useEffect(() => {
        if (isOpen) {
            (async () => {
                try {
                    setCardholderName('');
                    setStripeCard();
                    setShowErrors(false);
                    setLoading(true);
                    setLoadingConfirm(false);
                    const result = await clientSecretResolver();
                    clientSecret.current = result;
                } catch (error) {
                    showErrorMessage(error);
                }
                setLoading(false);
            })();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        event.stopPropagation();
        const { stripe, card, isComplete } = stripeCard || {};
        const hasNotErrors = isEmptyObject(getErrors(true, cardholderName, stripeCard));

        if (isComplete && hasNotErrors) {
            try {
                setShowErrors(false);
                setLoadingConfirm(true);

                const stripeApiMethod = isPaymentIntent
                    ? stripe.confirmCardPayment
                    : stripe.confirmCardSetup;

                const result = await stripeApiMethod(clientSecret.current, {
                    payment_method: {
                        card,
                        billing_details: {
                            name: cardholderName,
                        },
                    },
                });

                if (result.error) {
                    showErrorMessage(result.error);
                } else if (result[variant].status === 'succeeded') {
                    onSuccess(result);
                }
            } catch (error) {
                showErrorMessage(error);
            }
            setLoadingConfirm(false);
        } else {
            setShowErrors(true);
        }
    };

    const fireCancel = () => {
        if (!isLoadingConfirm) {
            onCancel();
        }
    };

    return (
        <ModalContainer
            title={title}
            className={className}
            style={style}
            isOpen={isOpen}
            onRequestClose={fireCancel}
            size="small"
            hideCloseButton={isLoadingConfirm}
        >
            <RenderIf isTrue={isLoadingConfirm}>
                <Overlay />
            </RenderIf>
            <RenderIf isTrue={!isLoading}>
                <form ref={formRef} noValidate onSubmit={handleSubmit}>
                    <Input
                        label={inputNameLabel}
                        placeholder={inputNamePlaceholder}
                        required
                        value={cardholderName}
                        onChange={(event) => setCardholderName(event.target.value)}
                        error={errors.name}
                    />
                    <StripeInput
                        apiKey={apiKey}
                        label={cardLabel}
                        locale={intl.locale}
                        required
                        onChange={(value) => {
                            setStripeCard(value);
                            setShowErrors(false);
                        }}
                        error={errors.stripe}
                    />
                    <ButtonsContainer>
                        <CancelButton
                            label={cancelButtonLabel}
                            onClick={onCancel}
                            disabled={isLoadingConfirm}
                        />
                        <Button
                            label={okButtonLabel}
                            variant="brand"
                            type="submit"
                            isLoading={isLoadingConfirm}
                        />
                    </ButtonsContainer>
                </form>
            </RenderIf>
            <RenderIf isTrue={isLoading}>
                <Loading />
            </RenderIf>
        </ModalContainer>
    );
}

StripeCheckoutModal.propTypes = {
    /** The application's API key. To use Stripe, you must get an API Key. See https://dashboard.stripe.com/account/apikeys to get an API Key. */
    apiKey: PropTypes.string.isRequired,
    /** Indicate whether use setupIntent or paymentIntent flow. */
    variant: PropTypes.oneOf(['setupIntent', 'paymentIntent']),
    /** Controls whether the modal is opened or not. If true, the modal is open. */
    isOpen: PropTypes.bool,
    /** Resolver async function that will return the intent client secret, needed to confirm the intent. */
    clientSecretResolver: PropTypes.func,
    /** Callback triggered when the intent confirm process succeded. */
    onSuccess: PropTypes.func,
    /** Callback triggered when the component request to close (e.g click close button, press esc key or click outside the modal). */
    onCancel: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

StripeCheckoutModal.defaultProps = {
    variant: 'setupIntent',
    isOpen: false,
    clientSecretResolver: () => {},
    onSuccess: () => {},
    onCancel: () => {},
    className: undefined,
    style: undefined,
};
