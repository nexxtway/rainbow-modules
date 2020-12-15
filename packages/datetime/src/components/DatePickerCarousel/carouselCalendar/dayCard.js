import React, { useRef, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    StyledDayCard,
    StyledDisabledDayCard,
    StyledDayCardDateLabel,
    StyledDayCardDayLabel,
} from './styled';
import getFormattedDayName from './helpers/getFormattedDayName';

export default function DayCard(props) {
    const {
        date,
        useAutoFocus,
        isFocused,
        isSelected,
        isDisabled,
        locale,
        onChange,
        onFocus,
        onBlur,
        onKeyDown,
    } = props;
    const day = date.getDate();
    const dayName = useMemo(() => getFormattedDayName(date, 'short', locale), [date, locale]);
    const buttonRef = useRef();
    const tabIndex = isFocused ? 0 : -1;

    useEffect(() => {
        if (useAutoFocus && buttonRef.current && tabIndex !== -1) {
            buttonRef.current.focus();
        }
    }, [tabIndex, useAutoFocus]);

    if (isDisabled) {
        return (
            <StyledDisabledDayCard aria-selected="false" data-cy="carousel-calendar__day-card">
                <StyledDayCardDayLabel>{dayName}</StyledDayCardDayLabel>
                <StyledDayCardDateLabel>{day}</StyledDayCardDateLabel>
            </StyledDisabledDayCard>
        );
    }

    return (
        <StyledDayCard
            ref={buttonRef}
            data-selected={isSelected}
            data-cy="carousel-calendar__day-card"
            tabIndex={tabIndex}
            isSelected={isSelected}
            onClick={() => onChange(date)}
            onKeyDown={onKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
        >
            <StyledDayCardDayLabel isSelected={isSelected}>{dayName}</StyledDayCardDayLabel>
            <StyledDayCardDateLabel isSelected={isSelected}>{day}</StyledDayCardDateLabel>
        </StyledDayCard>
    );
}

DayCard.propTypes = {
    date: PropTypes.instanceOf(Date),
    locale: PropTypes.string,
    useAutoFocus: PropTypes.bool,
    isFocused: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
};

DayCard.defaultProps = {
    date: undefined,
    locale: undefined,
    useAutoFocus: false,
    isFocused: false,
    isSelected: false,
    isDisabled: false,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
};
