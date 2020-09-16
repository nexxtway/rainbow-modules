import React, { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { compareDates, isDateWithinRange } from '../helpers';
import { StyledSection, StyledArrowButton, StyledCarouselContent } from './styled';
import RightIcon from './icons/rightArrow';
import LeftIcon from './icons/leftArrow';
import { useCardsCount, useNormalizedValue, useCalendarBounds, useVisibleDates } from './hooks';
import DayCard from './dayCard';

export default function CarouselCalendar(props) {
    const { id, className, style, minDate, maxDate, value, onChange, locale } = props;
    const currentValue = useNormalizedValue(value);
    const [focusedDate, setFocusedDate] = useState(currentValue);
    const cardsContainerRef = useRef();
    const { minCalendarDate, maxCalendarDate } = useCalendarBounds({
        minDate,
        maxDate,
        currentValue,
    });
    const { cardsCount, cardMargin } = useCardsCount({
        containerRef: cardsContainerRef,
        cardWidth: 67,
    });
    const { visibleDates, moveLeft, moveRight } = useVisibleDates({
        minDate,
        maxDate,
        currentDate: currentValue,
        size: cardsCount,
    });

    const scrollLeftClick = useCallback(() => moveLeft(1), [moveLeft]);

    const scrollRightClick = useCallback(() => moveRight(1), [moveRight]);

    useEffect(() => {
        if (compareDates(focusedDate, currentValue) !== 0) {
            setFocusedDate(currentValue);
        }
    }, [currentValue, focusedDate]);

    const days = useMemo(
        () =>
            visibleDates.map((date) => {
                return (
                    <DayCard
                        date={date}
                        locale={locale}
                        key={date.getTime()}
                        isSelected={compareDates(date, currentValue) === 0}
                        isDisabled={!isDateWithinRange(date, [minCalendarDate, maxCalendarDate])}
                        cardMargin={cardMargin}
                        onChange={onChange}
                    />
                );
            }),
        [
            visibleDates,
            locale,
            currentValue,
            minCalendarDate,
            maxCalendarDate,
            cardMargin,
            onChange,
        ],
    );

    return (
        <StyledSection id={id} className={className} style={style} data-calendar-type="carousel">
            <StyledArrowButton
                tabIndex="-1"
                icon={<LeftIcon />}
                size="xx-small"
                onClick={scrollLeftClick}
            />
            <StyledCarouselContent ref={cardsContainerRef}>{days}</StyledCarouselContent>
            <StyledArrowButton
                tabIndex="-1"
                icon={<RightIcon />}
                size="xx-small"
                onClick={scrollRightClick}
            />
        </StyledSection>
    );
}

CarouselCalendar.propTypes = {
    value: PropTypes.oneOfType([
        PropTypes.instanceOf(Date),
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string])),
    ]),
    maxDate: PropTypes.instanceOf(Date),
    minDate: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    className: PropTypes.string,
    style: PropTypes.object,
    id: PropTypes.string,
    locale: PropTypes.string,
};

CarouselCalendar.defaultProps = {
    value: undefined,
    minDate: undefined,
    maxDate: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
    id: undefined,
    locale: undefined,
};
