import React, { useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import useLocale from 'react-rainbow-components/libs/hooks/useLocale';
import { ChevronDown } from '@rainbow-modules/icons';
import { StyledContainer, StyledLabelContainer, StyledLabel } from './styled';
import { useFormatDate } from '../hooks';
import CarouselCalendar from '../carouselCalendar';

const DatePickerCarouselInput = React.forwardRef((props, ref) => {
    const {
        id,
        className,
        style,
        readOnly,
        required,
        disabled,
        name,
        label,
        value,
        locale,
        onLabelClick,
        onChange,
        formatStyle,
        selectionType,
        minDate,
        maxDate,
    } = props;
    const currentLocale = useLocale(locale);
    const inputRef = useRef();
    const labelRef = useRef();
    const formattedDate = useFormatDate({
        value,
        formatStyle,
        locale: currentLocale,
        selectionType,
    });

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        click: () => {
            labelRef.current.click();
        },
        blur: () => {
            inputRef.current.blur();
        },
    }));

    return (
        <StyledContainer id={id} className={className} style={style} readOnly={readOnly}>
            <StyledLabelContainer>
                <StyledLabel
                    ref={labelRef}
                    onClick={onLabelClick}
                    data-cy="carousel-input__label-button"
                >
                    {label}
                    <ChevronDown />
                </StyledLabel>
                <input
                    type="hidden"
                    value={formattedDate}
                    required={required}
                    disabled={disabled}
                    name={name}
                />
            </StyledLabelContainer>
            <CarouselCalendar
                ref={inputRef}
                value={value}
                locale={currentLocale}
                onChange={onChange}
                minDate={minDate}
                maxDate={maxDate}
            />
        </StyledContainer>
    );
});

DatePickerCarouselInput.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    readOnly: PropTypes.bool,
    disabled: PropTypes.bool,
    required: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    locale: PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])),
    ]),
    onChange: PropTypes.func,
    onLabelClick: PropTypes.func,
    name: PropTypes.string,
    formatStyle: PropTypes.oneOf(['small', 'medium', 'large']),
    selectionType: PropTypes.oneOf(['single']),
    minDate: PropTypes.instanceOf(Date),
    maxDate: PropTypes.instanceOf(Date),
};

DatePickerCarouselInput.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    readOnly: false,
    disabled: false,
    required: false,
    label: undefined,
    value: undefined,
    locale: undefined,
    name: undefined,
    onChange: () => {},
    onLabelClick: () => {},
    formatStyle: 'medium',
    selectionType: 'single',
    minDate: undefined,
    maxDate: undefined,
};

export default DatePickerCarouselInput;
