import React, { useState, useEffect } from 'react';
import {
    hideAppSpinner,
    RainbowFirebaseApp,
    showAppMessage,
    showAppNotification,
    showAppSpinner,
} from '@rainbow-modules/app';
import { Button } from 'react-rainbow-components';
import styled from 'styled-components';
import { StripeCheckoutModal, CreditCardPicker } from '../../src';
import firebase from '../../../../firebase';

const STRIPE_APIKEY = process.env.STORYBOOK_STRIPE_APIKEY;

const StyledCreditCardPicker = styled(CreditCardPicker)`
    margin: auto;
    margin-top: 20px;
    max-width: 500px;
`;

const useCustomerCards = (key) => {
    const [cards, setCards] = useState();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const result = await firebase.functions().httpsCallable('getCustomerCards')();
                setCards(result.data);
            } catch (error) {
                // eslint-disable-next-line no-console
                console.error(error);
            }
            setLoading(false);
        })();
    }, [key]);

    return [cards, isLoading];
};

const clientSecretResolverSetupIntent = async () => {
    const result = await firebase.functions().httpsCallable('createSetupIntent')();
    return result.data;
};

const removeCard = async (card) => {
    try {
        showAppSpinner();
        await firebase.functions().httpsCallable('removeCard')({
            paymentMethod: card.id,
        });
        showAppNotification({
            title: 'Success!',
            description: 'The card was removed successfully.',
            icon: 'success',
            timeout: 5000,
        });
    } catch (error) {
        // eslint-disable-next-line no-console
        console.error(error);
        showAppMessage({
            value: 'error',
            message: error.message,
        });
    }
    hideAppSpinner();
};

export const StripeCheckoutModalWithSetupIntent = () => {
    const [isOpen, setOpen] = useState();
    const [card, setCard] = useState();
    const [key, setKey] = useState();
    const [cards, isLoading] = useCustomerCards(key);

    return (
        <RainbowFirebaseApp>
            <StyledCreditCardPicker
                label="Select a credit card"
                required
                isLoading={isLoading}
                options={cards}
                onChange={setCard}
                value={card}
                onAdd={() => setOpen(true)}
                onRemove={async (value) => {
                    await removeCard(value);
                    setKey(value.id);
                }}
            />
            <StripeCheckoutModal
                apiKey={STRIPE_APIKEY}
                isOpen={isOpen}
                variant="setupIntent"
                onCancel={() => setOpen(false)}
                clientSecretResolver={clientSecretResolverSetupIntent}
                onSuccess={(result) => {
                    setOpen(false);
                    showAppNotification({
                        title: 'Success!',
                        description: 'The card was added successfully.',
                        icon: 'success',
                        timeout: 5000,
                    });
                    setKey(result.setupIntent.id);
                }}
            />
        </RainbowFirebaseApp>
    );
};

const StyledButton = styled(Button)`
    margin: 36px;
`;

const clientSecretResolverPaymentIntent = async () => {
    const result = await firebase.functions().httpsCallable('createPaymentIntent')({
        amount: 2000,
    });
    return result.data;
};

export const StripeCheckoutModalWithPaymentIntent = () => {
    const [isOpen, setOpen] = useState();

    return (
        <RainbowFirebaseApp>
            <StyledButton label="Pay $20" onClick={() => setOpen(true)} />
            <StripeCheckoutModal
                apiKey={STRIPE_APIKEY}
                isOpen={isOpen}
                variant="paymentIntent"
                onCancel={() => setOpen(false)}
                onSuccess={() => {
                    setOpen(false);
                    showAppNotification({
                        title: 'Success!',
                        description: 'The payment was successful.',
                        icon: 'success',
                        timeout: 5000,
                    });
                }}
                clientSecretResolver={clientSecretResolverPaymentIntent}
            />
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|Payment/Stories/StripeCheckoutModal',
};
