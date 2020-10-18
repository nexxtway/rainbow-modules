export default function getChildNodes(ref, selector) {
    if (ref) {
        return ref.querySelectorAll(selector);
    }
    return [];
}
