import React from 'react';
import PropTypes from 'prop-types';
import { StyledDayCard, StyledDayCardDateLabel, StyledDayCardDayLabel } from './styled';

export default function DayCard(props) {
    const { isSelected, cardMargin } = props;
    const tabIndex = isSelected ? undefined : -1;

    return (
        <StyledDayCard cardMargin={cardMargin} isSelected={isSelected} tabIndex={tabIndex}>
            <StyledDayCardDayLabel isSelected={isSelected}>tue</StyledDayCardDayLabel>
            <StyledDayCardDateLabel isSelected={isSelected}>23</StyledDayCardDateLabel>
        </StyledDayCard>
    );
}

DayCard.propTypes = {
    isSelected: PropTypes.bool,
    cardMargin: PropTypes.number,
};

DayCard.defaultProps = {
    isSelected: false,
    cardMargin: 5,
};
