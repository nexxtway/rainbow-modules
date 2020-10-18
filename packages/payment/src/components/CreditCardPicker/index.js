import React from 'react';
import PropTypes from 'prop-types';
import { UniversalPicker } from '@rainbow-modules/forms';
import { Plus } from '@rainbow-modules/icons';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import { StyledContent, StyledIcon, StyledLabelNewCard, AddNewCardButton } from './styled';
import { newCreditCardLabel } from './labels';
import Cards from './cards';

export default function CreditCardPicker(props) {
    const {
        className,
        style,
        label,
        value,
        onChange,
        onAdd,
        onRemove,
        // TODO: implement loading
        // isLoading,
        options,
        required,
        error,
        showAddCreditCardButton,
        id,
    } = props;

    return (
        <UniversalPicker
            className={className}
            style={style}
            label={label}
            value={value}
            onChange={onChange}
            required={required}
            error={error}
            direction="vertical"
            id={id}
        >
            <RenderIf isTrue={showAddCreditCardButton}>
                <AddNewCardButton as="button" onClick={onAdd}>
                    <StyledContent>
                        <StyledIcon>
                            <Plus />
                        </StyledIcon>
                        <StyledLabelNewCard>{newCreditCardLabel}</StyledLabelNewCard>
                    </StyledContent>
                </AddNewCardButton>
            </RenderIf>
            <Cards options={options} onRemove={onRemove} />
        </UniversalPicker>
    );
}

CreditCardPicker.propTypes = {
    /** The value of the component. */
    value: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** The action triggerd when new card button is clicked. */
    onAdd: PropTypes.func,
    /** The action triggered when the remove card action is confirmed. */
    onRemove: PropTypes.func,
    /** Indicate that the cards are loading when set to true */
    isLoading: PropTypes.bool,
    /** An array with the credit card options. */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            brand: PropTypes.string,
            id: PropTypes.string,
            last4: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            disabled: PropTypes.bool,
            primary: PropTypes.bool,
            expMonth: PropTypes.number,
            expYear: PropTypes.number,
        }),
    ),
    /** If is set to true the UniversalPicker is required. This value defaults to false. */
    required: PropTypes.bool,
    /** The title at the top of the UniversalPicker component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an UniversalPicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Indicate that will show the add credit card button when set to true. */
    showAddCreditCardButton: PropTypes.bool,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
};

CreditCardPicker.defaultProps = {
    value: undefined,
    onChange: () => {},
    onAdd: () => {},
    onRemove: () => {},
    isLoading: false,
    options: [],
    required: false,
    label: undefined,
    error: undefined,
    showAddCreditCardButton: false,
    id: undefined,
    className: undefined,
    style: undefined,
};
