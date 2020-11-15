export default function getScrollWindowPivot(size) {
    if (size && size > 0) {
        const pivotIndex = Math.max(Math.round(size / 3), 1) - 1;
        return {
            atIndex: pivotIndex,
            before: pivotIndex,
            after: size - pivotIndex - 1,
        };
    }

    return {
        atIndex: -1,
        before: 0,
        after: 0,
    };
}
