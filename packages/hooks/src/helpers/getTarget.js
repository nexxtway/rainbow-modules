export default function getTarget(target) {
    if (typeof target === 'function') {
        return target();
    }
    if (target && target.current) {
        return target.current;
    }
    return target;
}
