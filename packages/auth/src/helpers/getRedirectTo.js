export default function getRedirectTo({ redirect, location }) {
    if (typeof redirect === 'string') {
        return {
            pathname: redirect,
            state: { from: location },
        };
    }
    if (typeof redirect === 'object') {
        return {
            ...redirect,
            state: { from: location },
        };
    }
    return undefined;
}
