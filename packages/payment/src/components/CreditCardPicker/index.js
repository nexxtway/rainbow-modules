import React from 'react';
import PropTypes from 'prop-types';
import { UniversalPicker, UniversalPickerOption } from '@rainbow-modules/forms';
import { Plus } from '@rainbow-modules/icons';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import { StyledContent, StyledIcon, StyledLabelNewCard } from './styled';
import Option from './option';
import Cards from './cards';

export default function CreditCardPicker(props) {
    const {
        className,
        style,
        label,
        value,
        onChange,
        // isLoading,
        options,
        required,
        error,
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
            <RenderIf isTrue={false}>
                <UniversalPickerOption component={Option} name="new-card">
                    <StyledContent>
                        <StyledIcon>
                            <Plus />
                        </StyledIcon>
                        <StyledLabelNewCard>Enter a new card</StyledLabelNewCard>
                    </StyledContent>
                </UniversalPickerOption>
            </RenderIf>
            <Cards options={options} />
        </UniversalPicker>
    );
}

CreditCardPicker.propTypes = {
    /** The value of the component. */
    value: PropTypes.string,
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Indicate that the cards are loading when true */
    isLoading: PropTypes.bool,
    /** An array with the credit card options. */
    options: PropTypes.arrayOf(
        PropTypes.shape({
            brand: PropTypes.string,
            id: PropTypes.string,
            last4: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
            disabled: PropTypes.bool,
        }),
    ),
    /** If is set to true the UniversalPicker is required. This value defaults to false. */
    required: PropTypes.bool,
    /** The title at the top of the UniversalPicker component. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Specifies that an UniversalPicker must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
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
    isLoading: false,
    options: [],
    required: false,
    label: undefined,
    error: undefined,
    id: undefined,
    className: undefined,
    style: undefined,
};
