export default function reverseFilters(newValue) {
    return newValue.texts.filter((text) => !!text && text.value).map(({ value }) => value);
}
