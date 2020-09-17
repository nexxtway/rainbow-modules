import React, { useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledLabelContainer, StyledLabel, StyledInput } from './styled';
import DownIcon from './icons/downArrow';
import CarouselCalendar from '../carouselCalendar';

const DatePickerCarouselInput = React.forwardRef((props, ref) => {
    const { id, className, style, readOnly, label, value, onLabelClick, onChange } = props;
    const inputRef = useRef();
    const labelRef = useRef();

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
                <StyledLabel ref={labelRef} onClick={onLabelClick}>
                    {label}
                    <DownIcon />
                </StyledLabel>
            </StyledLabelContainer>
            <StyledInput ref={inputRef} type="hidden" />
            <CarouselCalendar ref={inputRef} value={value} onChange={onChange} />
        </StyledContainer>
    );
});

DatePickerCarouselInput.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    readOnly: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    value: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])),
    ]),
    onChange: PropTypes.func,
    onLabelClick: PropTypes.func,
};

DatePickerCarouselInput.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    readOnly: false,
    label: undefined,
    value: undefined,
    onChange: () => {},
    onLabelClick: () => {},
};

export default DatePickerCarouselInput;
