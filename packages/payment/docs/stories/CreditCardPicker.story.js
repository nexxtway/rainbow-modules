import React, { useState } from 'react';
import { Application } from 'react-rainbow-components';
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
    },
    {
        brand: 'MasterCard',
        id: 'qwer',
        last4: 5454,
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
    },
];

export const BasicCreditCardPicker = () => {
    const [value, setValue] = useState('card-1');
    return (
        <Application>
            <StyledCreditCardPicker
                label="Select a credit card"
                required
                onChange={setValue}
                value={value}
                options={options}
            />
        </Application>
    );
};

export default {
    title: 'Modules|Payment/Stories/CreditCardPicker',
};
