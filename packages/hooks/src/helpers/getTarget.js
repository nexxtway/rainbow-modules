export default function getTarget(target) {
    if (target && target.current) {
        return target.current;
    }
    return target;
}
