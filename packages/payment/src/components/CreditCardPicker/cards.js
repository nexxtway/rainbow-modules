import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { ButtonIcon } from 'react-rainbow-components';
import { confirmModal } from '@rainbow-modules/app';
import { UniversalPickerOption } from '@rainbow-modules/forms';
import { Visa, Amex, DinersClub, Trash } from '@rainbow-modules/icons';
import {
    StyledContent,
    StyledCreditCard,
    StyledIcon,
    StyledLabelCard,
    StyledNumberCard,
} from './styled';
import Option from './option';
import messages from './messages';

// TODO: add other cards to the mapping
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

// TODO: add unknow icon
const defaultCard = () => <div />;

export default function Cards({ options, onRemove }) {
    const intl = useIntl();

    const handleDeleteClick = async (card) => {
        const result = await confirmModal({
            variant: 'destructive',
            header: intl.formatMessage(messages.confirmationModalHeader),
            question: intl.formatMessage(messages.confirmationModalQuestion),
            okButtonLabel: intl.formatMessage(messages.confirmationModalOkButtonLabel),
            cancelButtonLabel: intl.formatMessage(messages.confirmationModalCancelButtonLabel),
        });
        if (result) {
            onRemove(card);
        }
    };

    return options.map((option) => {
        // TODO: add primary card styles
        const { brand, id, last4, disabled, primary, expMonth, expYear } = option;
        // TODO: use expires date
        const expires = `${expMonth}/${expYear}`;
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
                    <ButtonIcon icon={<Trash />} onClick={() => handleDeleteClick(option)} />
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
