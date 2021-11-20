import isEmpty from './isEmpty';

const patterns = [/^g[oO0]+g/i, /g[oO0]+gle/i, /\s+/];

export default function isValidBucketName(value) {
    if (
        isEmpty(value) ||
        (/^[a-z]+[0-9a-z_\-.]*[a-z0-9]+$/.test(value) &&
            patterns.every((pattern) => !pattern.test(value)))
    ) {
        return true;
    }

    return false;
}
