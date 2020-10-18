import React from 'react';
import PropTypes from 'prop-types';
import { UniversalPickerOption } from '@rainbow-modules/forms';
import { Visa, Amex, DinersClub } from '@rainbow-modules/icons';
import {
    StyledContent,
    StyledCreditCard,
    StyledIcon,
    StyledLabelCard,
    StyledNumberCard,
} from './styled';
import Option from './option';

const cardsIconMap = {
    visa: Visa,
    mastercard: Visa,
    'american express': Amex,
    amex: Amex,
    discover: Visa,
    'diners club': DinersClub,
    jcb: Visa,
    unionpay: Visa,
};

const defaultCard = () => <div />;

export default function Cards({ options }) {
    return options.map((option) => {
        const { brand, id, last4, disabled } = option;
        const CardIcon = cardsIconMap[brand.toLowerCase()] || defaultCard;
        return (
            <UniversalPickerOption component={Option} name={id} disabled={disabled}>
                <StyledContent>
                    <StyledIcon>
                        <CardIcon />
                    </StyledIcon>
                    <StyledCreditCard>
                        <StyledLabelCard>{brand}</StyledLabelCard>
                        <StyledNumberCard>{`•••• •••• •••• ${last4}`}</StyledNumberCard>
                    </StyledCreditCard>
                </StyledContent>
            </UniversalPickerOption>
        );
    });
}

Cards.propTypes = {
    options: PropTypes.array,
};

Cards.defaultProps = {
    options: [],
};
