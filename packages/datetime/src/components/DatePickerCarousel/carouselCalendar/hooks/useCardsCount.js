import { useState, useCallback, useEffect } from 'react';

export default function useCardsCount({ cardWidth, containerSize }) {
    const [cardsCount, setCardsCount] = useState(0);
    const [cardMargin, setCardMargin] = useState(0);

    const updateCardsCount = useCallback(() => {
        const maxVisibleCards = Math.floor(containerSize / cardWidth);
        const margin = (containerSize - maxVisibleCards * cardWidth) / maxVisibleCards;
        setCardsCount(maxVisibleCards);
        setCardMargin((margin + 10) / 2);
    }, [containerSize, cardWidth]);

    useEffect(() => updateCardsCount(), [updateCardsCount]);

    return { cardsCount, cardMargin };
}
