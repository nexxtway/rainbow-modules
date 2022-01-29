export default function getTitle(header) {
    if (typeof header === 'string') {
        return header;
    }
    return undefined;
}
