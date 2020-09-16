export default function getScrollWindowPivot(size) {
    const pivotIndex = Math.max(Math.round(size / 3), 1) - 1;
    return {
        atIndex: pivotIndex,
        before: pivotIndex,
        after: size - pivotIndex - 1,
    };
}
