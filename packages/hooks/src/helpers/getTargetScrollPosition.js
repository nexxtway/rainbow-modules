export default function getTargetScrollPosition(target) {
    if (target) {
        return target.pageYOffset !== undefined ? target.pageYOffset : target.scrollTop;
    }

    return undefined;
}
