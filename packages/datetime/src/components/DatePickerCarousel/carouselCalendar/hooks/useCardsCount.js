import { useMemo } from 'react';
import getVisibleCards from '../helpers/getVisibleCards';

export default function useCardsCount({ cardWidth, containerSize }) {
    return useMemo(() => getVisibleCards(cardWidth, containerSize), [containerSize, cardWidth]);
}
