export default function getVisibleCards(cardWidth, containerWidth) {
    if (containerWidth && containerWidth > 0 && cardWidth && cardWidth > 0) {
        return Math.floor(containerWidth / cardWidth);
    }
    return 0;
}
