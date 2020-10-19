import React from 'react';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { ButtonIcon, RenderIf, Badge } from 'react-rainbow-components';
import { confirmModal } from '@rainbow-modules/app';
import { UniversalPickerOption } from '@rainbow-modules/forms';
import {
    Visa,
    Amex,
    DinersClub,
    Trash,
    Mastercard,
    Discover,
    JCB,
    UnionPay,
    UnknownCard,
} from '@rainbow-modules/icons';
import {
    StyledContent,
    CardInfo,
    RightContent,
    StyledLabelCard,
    StyledNumberCard,
    LeftContent,
    TrashIcon,
} from './styled';
import Option from './option';
import messages from './messages';

const cardsIconMap = {
    visa: Visa,
    mastercard: Mastercard,
    'american express': Amex,
    amex: Amex,
    discover: Discover,
    'diners club': DinersClub,
    jcb: JCB,
    unionpay: UnionPay,
};

const defaultCard = () => <UnknownCard />;

export default function Cards({ options, onRemove }) {
    const intl = useIntl();

    const handleDeleteClick = async (card) => {
        const result = await confirmModal({
            icon: <TrashIcon />,
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
        const { brand, id, last4, disabled, primary, expMonth, expYear } = option;
        const expires = `${expMonth}/${expYear}`;
        const hasExpirationDate = expMonth && expYear;
        const CardIcon = cardsIconMap[brand.toLowerCase()] || defaultCard;

        return (
            <UniversalPickerOption component={Option} name={id} disabled={disabled}>
                <StyledContent>
                    <RightContent>
                        <CardIcon />
                        <CardInfo>
                            <StyledNumberCard>{`•••• ${last4}`}</StyledNumberCard>
                            <RenderIf isTrue={hasExpirationDate}>
                                <StyledLabelCard>{`Expires ${expires}`}</StyledLabelCard>
                            </RenderIf>
                        </CardInfo>
                    </RightContent>
                    <LeftContent>
                        <RenderIf isTrue={primary}>
                            <Badge label="PRIMARY" className="rainbow-m-right_small" />
                        </RenderIf>
                        <RenderIf isTrue={onRemove}>
                            <ButtonIcon
                                icon={<Trash />}
                                onClick={() => handleDeleteClick(option)}
                            />
                        </RenderIf>
                    </LeftContent>
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
