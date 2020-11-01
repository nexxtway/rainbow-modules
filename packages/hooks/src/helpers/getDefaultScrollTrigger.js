export default function getDefaultScrollTrigger(target, previousPos, options) {
    const { threshold = 100 } = options;

    if (target) {
        // eslint-disable-next-line no-param-reassign
        const current = target.pageYOffset !== undefined ? target.pageYOffset : target.scrollTop;
        return Math.abs(current - previousPos) > threshold;
    }
    return false;
}
