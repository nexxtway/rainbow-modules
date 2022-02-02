export default function getHeaderText(element) {
    if (typeof element === 'string') {
        return element;
    }
    if (Array.isArray(element)) {
        return element.map(getHeaderText).join('');
    }
    if (element && element.props) {
        return getHeaderText(element.props.children);
    }

    return '';
}
