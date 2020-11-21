/* eslint-disable react/no-unused-prop-types */
import React, { useRef, useImperativeHandle, useCallback } from 'react';
import PropTypes from 'prop-types';
import { DatePickerModal } from 'react-rainbow-components';
import useLocale from 'react-rainbow-components/libs/hooks/useLocale';
import { useReduxForm, useDisclosure, useFormatDate } from './hooks';
import { StyledContainer } from './styled';
import DatePickerCarouselInput from './carouselInput';

const DatePickerCarousel = React.forwardRef((props, ref) => {
    const {
        value,
        minDate,
        maxDate,
        placeholder,
        onClick,
        onChange,
        required,
        style,
        className,
        formatStyle,
        name,
        readOnly,
        disabled,
        id,
        locale,
        variant,
        selectionType,
    } = useReduxForm(props);
    const inputRef = useRef();
    const currentLocale = useLocale(locale);
    const formattedDate = useFormatDate({
        value,
        format: formatStyle,
        locale,
        selectionType,
    });
    const { isOpen, open: openModal, close: closeModal } = useDisclosure(false);
    const modalId = id && `${id}_modal`;

    useImperativeHandle(ref, () => ({
        focus: () => {
            inputRef.current.focus();
        },
        click: () => {
            inputRef.current.click();
        },
        blur: () => {
            inputRef.current.blur();
        },
    }));

    const handleChange = useCallback(
        (newValue) => {
            onChange(newValue);
            closeModal();
        },
        [closeModal, onChange],
    );

    const handleClick = useCallback(
        (event) => {
            if (!readOnly && !disabled) {
                openModal();
                onClick(event);
            }
        },
        [onClick, openModal, readOnly, disabled],
    );

    return (
        <StyledContainer id={id} className={className} style={style}>
            <DatePickerCarouselInput
                ref={inputRef}
                name={name}
                label={formattedDate || placeholder}
                onLabelClick={handleClick}
                value={value}
                selectionType={selectionType}
                formatStyle={formatStyle}
                minDate={minDate}
                maxDate={maxDate}
                onChange={onChange}
                locale={currentLocale}
                required={required}
                disabled={disabled}
                readOnly={readOnly}
            />
            <DatePickerModal
                id={modalId}
                isOpen={isOpen}
                title={formattedDate || placeholder}
                variant={variant}
                locale={currentLocale}
                selectionType={selectionType}
                minDate={minDate}
                maxDate={maxDate}
                value={value}
                onChange={handleChange}
                onRequestClose={closeModal}
            />
        </StyledContainer>
    );
});

DatePickerCarousel.propTypes = {
    /** Sets the date for the DatePicker programmatically. */
    value: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])),
    ]),
    /** The ending of a range of valid dates. The range includes the endDate.
     * The default value is current date + 100 years. */
    maxDate: PropTypes.instanceOf(Date),
    /** The beginning of a range of valid dates. The range includes the startDate.
     * The default value is current date - 100 years. */
    minDate: PropTypes.instanceOf(Date),
    /**  The date format style to display in the input field.
     * Valid values are small, medium, and large. */
    formatStyle: PropTypes.oneOf(['small', 'medium', 'large']),
    /** The action triggered when a value attribute changes. */
    onChange: PropTypes.func,
    /** Text that is displayed when the DatePicker is empty,
     * to prompt the user for a valid entry. */
    placeholder: PropTypes.string,
    /** Specifies that the DatePicker field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** The name of the DatePicker. */
    name: PropTypes.string,
    /** Specifies that the DatePicker is read-only. This value defaults to false. */
    readOnly: PropTypes.bool,
    /** Specifies that the DatePicker element should be disabled. This value defaults to false. */
    disabled: PropTypes.bool,
    /** The action triggered when the element is clicked. */
    onClick: PropTypes.func,
    /** The id of the outer element. */
    id: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The DatePicker locale. Defaults to browser's language. */
    locale: PropTypes.string,
    /** The type of the selection. It can be a single date or a range. The default value is 'single'. */
    selectionType: PropTypes.oneOf(['single']),
    /** The calendar variant. Defaults to 'single' */
    variant: PropTypes.oneOf(['single', 'double']),
};

DatePickerCarousel.defaultProps = {
    value: undefined,
    minDate: undefined,
    maxDate: undefined,
    formatStyle: 'medium',
    onChange: () => {},
    placeholder: undefined,
    required: false,
    name: undefined,
    readOnly: false,
    disabled: false,
    onClick: () => {},
    id: undefined,
    className: undefined,
    style: undefined,
    locale: undefined,
    selectionType: 'single',
    variant: 'single',
};

export default DatePickerCarousel;
