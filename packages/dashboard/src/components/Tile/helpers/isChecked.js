export default function isChecked({ multiple, value, name }) {
    if (multiple) {
        return Array.isArray(value) && value.includes(name);
    }

    return typeof value === 'string' && name === value;
}
