const shouldMove = (
    dx: number,
    mousePosition: number,
    separatorElement?: HTMLElement | null,
): boolean => {
    if (!separatorElement || !(separatorElement instanceof HTMLElement)) return false;
    if (dx > 0) {
        const separatorPos = separatorElement.getBoundingClientRect().right;
        return separatorPos > mousePosition;
    }
    const separatorPos = separatorElement.getBoundingClientRect().left;
    return separatorPos < mousePosition;
};

export default shouldMove;
