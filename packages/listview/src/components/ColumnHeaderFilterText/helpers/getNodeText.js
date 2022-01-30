export default function getNodeText(node) {
    if (['string', 'number'].includes(typeof node)) {
        return node;
    }
    if (Array.isArray(node)) {
        return node.map(getNodeText).join('');
    }
    if (typeof node === 'object' && node && node.props) {
        return getNodeText(node.props.children);
    }

    return '';
}
