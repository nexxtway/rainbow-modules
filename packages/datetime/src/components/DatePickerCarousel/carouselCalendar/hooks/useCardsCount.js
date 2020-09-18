import { useState, useCallback, useEffect } from 'react';
import useContainerSize from './useContainerSize';

export default function useCardsCount({ cardWidth, containerRef }) {
    const containerSize = useContainerSize({ containerRef });
    const [cardsCount, setCardsCount] = useState(0);
    const [cardMargin, setCardMargin] = useState(0);

    const updateCardsCount = useCallback(() => {
        const maxVisibleCards = Math.floor(containerRef.current.clientWidth / cardWidth);
        const margin =
            (containerRef.current.clientWidth - maxVisibleCards * cardWidth) / maxVisibleCards;
        setCardsCount(maxVisibleCards);
        setCardMargin((margin + 10) / 2);
    }, [containerRef, cardWidth]);

    useEffect(() => updateCardsCount(), [containerSize, updateCardsCount]);

    return { cardsCount, cardMargin };
}
