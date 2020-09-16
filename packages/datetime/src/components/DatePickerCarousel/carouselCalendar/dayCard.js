import React, { useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import {
    StyledDayCard,
    StyledDisabledDayCard,
    StyledDayCardDateLabel,
    StyledDayCardDayLabel,
} from './styled';
import getFormattedDayName from './helpers/getFormattedDayName';

export default function DayCard(props) {
    const { date, isSelected, isDisabled, cardMargin, onChange } = props;
    const day = date.getDate();
    const dayName = useMemo(() => getFormattedDayName(date), [date]);
    const buttonRef = useRef();
    const tabIndex = isSelected ? undefined : -1;

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
        >
            <StyledDayCardDayLabel isSelected={isSelected}>{dayName}</StyledDayCardDayLabel>
            <StyledDayCardDateLabel isSelected={isSelected}>{day}</StyledDayCardDateLabel>
        </StyledDayCard>
    );
}

DayCard.propTypes = {
    date: PropTypes.instanceOf(Date),
    firstDayMonth: PropTypes.instanceOf(Date),
    isSelected: PropTypes.bool,
    isDisabled: PropTypes.bool,
    cardMargin: PropTypes.number,
    onChange: PropTypes.func,
};

DayCard.defaultProps = {
    date: undefined,
    firstDayMonth: undefined,
    isSelected: false,
    isDisabled: false,
    cardMargin: 5,
    onChange: () => {},
};
