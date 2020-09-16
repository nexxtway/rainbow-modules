import React, { useRef, useImperativeHandle } from 'react';
import PropTypes from 'prop-types';
import { StyledContainer, StyledLabelContainer, StyledLabel, StyledInput } from './styled';
import DownIcon from './icons/downArrow';

const DatePickerCarouselInput = React.forwardRef((props, ref) => {
    const { id, className, style, readOnly, label, onLabelClick } = props;
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
        </StyledContainer>
    );
});

DatePickerCarouselInput.propTypes = {
    id: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    readOnly: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    // onChange: PropTypes.func,
    onLabelClick: PropTypes.func,
};

DatePickerCarouselInput.defaultProps = {
    id: undefined,
    className: undefined,
    style: undefined,
    readOnly: false,
    label: undefined,
    // onChange: PropTypes.func,
    onLabelClick: () => {},
};

export default DatePickerCarouselInput;
