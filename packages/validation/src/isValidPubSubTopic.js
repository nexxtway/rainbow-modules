import isEmpty from './isEmpty';

const patterns = [/^g[oO0]+g/i, /g[oO0]+gle/i, /\s+/];

export default function isValidPubSubTopic(value) {
    if (
        !isEmpty(value) &&
        value.length <= 255 &&
        /^[a-zA-Z][A-Z0-9a-z_]*[a-zA-Z0-9]+$/.test(value) &&
        patterns.every((pattern) => !pattern.test(value))
    ) {
        return true;
    }

    return false;
}
