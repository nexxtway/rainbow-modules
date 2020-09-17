import React, { useRef, useMemo, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
    StyledDayCard,
    StyledDisabledDayCard,
    StyledDayCardDateLabel,
    StyledDayCardDayLabel,
} from './styled';
import { isSameDay } from '../helpers';
import getFormattedDayName from './helpers/getFormattedDayName';

export default function DayCard(props) {
    const {
        date,
        useAutoFocus,
        isFocused,
        isSelected,
        isDisabled,
        cardMargin,
        onChange,
        onFocus,
        onBlur,
        onKeyDown,
    } = props;
    const day = date.getDate();
    const dayName = useMemo(() => getFormattedDayName(date), [date]);
    const buttonRef = useRef();
    const tabIndex = isFocused ? 0 : -1;

    useEffect(() => {
        if (useAutoFocus && buttonRef.current && tabIndex !== -1) {
            buttonRef.current.focus();
        }
    }, [tabIndex, useAutoFocus]);

    if (isDisabled) {
        return (
            <StyledDisabledDayCard cardMargin={cardMargin} aria-selected="false">
                <StyledDayCardDayLabel>{dayName}</StyledDayCardDayLabel>
                <StyledDayCardDateLabel>{day}</StyledDayCardDateLabel>
            </StyledDisabledDayCard>
        );
    }

    return (
        <StyledDayCard
            ref={buttonRef}
            cardMargin={cardMargin}
            isSelected={isSelected}
            tabIndex={tabIndex}
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
    firstDayMonth: PropTypes.instanceOf(Date),
    useAutoFocus: PropTypes.bool,
    isFocused: PropTypes.bool,
    isSelected: PropTypes.bool,
    isDisabled: PropTypes.bool,
    cardMargin: PropTypes.number,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
};

DayCard.defaultProps = {
    date: undefined,
    firstDayMonth: undefined,
    useAutoFocus: false,
    isFocused: false,
    isSelected: false,
    isDisabled: false,
    cardMargin: 5,
    onChange: () => {},
    onFocus: () => {},
    onBlur: () => {},
    onKeyDown: () => {},
};
