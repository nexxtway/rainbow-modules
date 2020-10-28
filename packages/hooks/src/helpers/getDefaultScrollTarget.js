export default function getDefaultScrollTarget() {
    return typeof window !== 'undefined' ? window : null;
}
