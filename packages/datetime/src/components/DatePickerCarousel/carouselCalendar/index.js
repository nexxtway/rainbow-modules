import React, { useRef, useMemo } from 'react';
import PropTypes from 'prop-types';
import useLocale from 'react-rainbow-components/libs/hooks/useLocale';
import { ChevronLeft, ChevronRight } from '@rainbow-modules/icons';
import { isSameDay, isDateWithinRange } from '../helpers';
import { StyledSection, StyledArrowButton, StyledCarouselContent } from './styled';
import {
    useCardsCount,
    useNormalizedValue,
    useCalendarBounds,
    useVisibleDates,
    useScrollArrows,
    useArrowKeyNav,
} from './hooks';
import DayCard from './dayCard';

export default function CarouselCalendar(props) {
    const { id, className, style, minDate, maxDate, value, onChange, locale } = props;
    const currentLocale = useLocale(locale);
    const currentValue = useNormalizedValue(value);
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
    const {
        disableScrollLeft,
        disableScrollRight,
        scrollLeftClick,
        scrollRightClick,
    } = useScrollArrows({
        minDate,
        maxDate,
        visibleDates,
        moveLeft,
        moveRight,
    });

    const {
        useAutoFocus,
        focusedDate,
        handleKeyDown,
        enableKeyboardNav,
        disableKeyboardNav,
    } = useArrowKeyNav({
        currentValue,
        visibleDates,
        scrollLeft: scrollLeftClick,
        scrollRight: scrollRightClick,
    });

    const days = useMemo(
        () =>
            visibleDates.map((date) => {
                return (
                    <DayCard
                        date={date}
                        locale={currentLocale}
                        key={date.getTime()}
                        useAutoFocus={useAutoFocus}
                        isFocused={isSameDay(date, focusedDate)}
                        isSelected={isSameDay(date, currentValue)}
                        isDisabled={!isDateWithinRange(date, [minCalendarDate, maxCalendarDate])}
                        cardMargin={cardMargin}
                        onChange={onChange}
                        onKeyDown={handleKeyDown}
                        onFocus={() => enableKeyboardNav()}
                        onBlur={() => disableKeyboardNav()}
                    />
                );
            }),
        [
            visibleDates,
            currentLocale,
            useAutoFocus,
            focusedDate,
            currentValue,
            minCalendarDate,
            maxCalendarDate,
            cardMargin,
            onChange,
            handleKeyDown,
            enableKeyboardNav,
            disableKeyboardNav,
        ],
    );

    return (
        <StyledSection id={id} className={className} style={style} data-calendar-type="carousel">
            <StyledArrowButton
                tabIndex="-1"
                icon={<ChevronLeft />}
                size="xx-small"
                disabled={disableScrollLeft}
                onClick={scrollLeftClick}
            />
            <StyledCarouselContent ref={cardsContainerRef}>{days}</StyledCarouselContent>
            <StyledArrowButton
                tabIndex="-1"
                icon={<ChevronRight />}
                size="xx-small"
                disabled={disableScrollRight}
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
