import { useState, useCallback, useEffect } from 'react';
import useWindowResize from './useWindowResize';

export default function useCardsCount({ cardWidth, containerRef }) {
    const [cardsCount, setCardsCount] = useState(0);
    const [cardMargin, setCardMargin] = useState(0);

    const updateCardsCount = useCallback(() => {
        const maxVisibleCards = Math.floor(containerRef.current.clientWidth / cardWidth);
        const margin =
            (containerRef.current.clientWidth - maxVisibleCards * cardWidth) / maxVisibleCards;
        setCardsCount(maxVisibleCards);
        setCardMargin((margin + 10) / 2);
    }, [containerRef, cardWidth]);

    useWindowResize(() => {
        updateCardsCount();
    }, true);

    useEffect(() => {
        updateCardsCount();
    }, [updateCardsCount]);

    return { cardsCount, cardMargin };
}
