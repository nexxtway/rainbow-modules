const isBrowser = !!(
    typeof window !== 'undefined' &&
    window.document &&
    window.document.createElement
);

const isNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative';

const isServer = !(isBrowser || isNative);

export default function isValidColor(color) {
    if (isServer) return true;
    const element = document.createElement('a');
    element.style.color = color;
    return element.style.color !== '';
}
