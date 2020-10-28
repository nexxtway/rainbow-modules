export default function getDefaultScrollTrigger(target, scroll, options) {
    const { threshold } = options;
    const previous = scroll.current;

    if (target) {
        // eslint-disable-next-line no-param-reassign
        scroll.current = target.pageYOffset !== undefined ? target.pageYOffset : target.scrollTop;
    }

    if (previous !== undefined) {
        if (scroll.current < previous) {
            return false;
        }
    }

    return scroll.current > threshold;
}
