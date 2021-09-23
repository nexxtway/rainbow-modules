import React, { useState } from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import styled from 'styled-components';
import { CreditCardPicker } from '../../src';

const StyledCreditCardPicker = styled(CreditCardPicker)`
    margin: auto;
    margin-top: 20px;
    max-width: 500px;
`;

const options = [
    {
        brand: 'Visa',
        id: '1234',
        last4: 1111,
        primary: true,
        expMonth: 24,
        expYear: 2020,
    },
    {
        brand: 'MasterCard',
        id: 'qwer',
        last4: 5454,
        expMonth: 24,
        expYear: 2020,
    },
    {
        brand: 'American Express',
        id: '12qw',
        last4: '0005',
    },
    {
        brand: 'Diners Club',
        id: '5678',
        last4: '0004',
        expMonth: 24,
        expYear: 2020,
    },
    {
        brand: 'Discover',
        id: '12qwe',
        last4: '0005',
    },
    {
        brand: 'JCB',
        id: '12qwer',
        last4: '0005',
    },
    {
        brand: 'UnionPay',
        id: '12qwert',
        last4: '0005',
    },
    {
        brand: 'UnknownCreditCard',
        id: '12qwerty',
        last4: '0005',
    },
];

export const BasicCreditCardPicker = () => {
    const [value, setValue] = useState();
    return (
        <RainbowFirebaseApp>
            <StyledCreditCardPicker
                label="Select a credit card"
                required
                onChange={setValue}
                value={value}
                options={options}
                labelAlignment="left"
            />
        </RainbowFirebaseApp>
    );
};

export const CreditCardPickerLoading = () => {
    const [value, setValue] = useState();
    return (
        <RainbowFirebaseApp>
            <StyledCreditCardPicker
                label="Select a credit card"
                required
                onChange={setValue}
                value={value}
                options={options}
                isLoading
            />
        </RainbowFirebaseApp>
    );
};

export const CreditCardPickerWithActions = () => {
    const [value, setValue] = useState('qwer');
    return (
        <RainbowFirebaseApp>
            <StyledCreditCardPicker
                label="Select a credit card"
                required
                onChange={setValue}
                value={value}
                options={options}
                // eslint-disable-next-line no-alert
                onAdd={() => alert('Add new card')}
                // eslint-disable-next-line no-alert
                onRemove={(card) => alert(`Remove ${card.brand} card with last4: ${card.last4}`)}
            />
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Payment/Stories/CreditCardPicker',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
