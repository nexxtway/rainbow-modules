const shouldMove = (
    dx: number,
    mousePosition: number,
    separatorElement?: HTMLElement | null,
    vertical?: boolean,
): boolean => {
    if (!separatorElement || !(separatorElement instanceof HTMLElement)) return false;
    if (dx > 0) {
        const separatorPos = vertical
            ? separatorElement.getBoundingClientRect().top
            : separatorElement.getBoundingClientRect().right;
        return separatorPos > mousePosition;
    }
    const separatorPos = vertical
        ? separatorElement.getBoundingClientRect().bottom
        : separatorElement.getBoundingClientRect().left;
    return separatorPos < mousePosition;
};

export default shouldMove;
