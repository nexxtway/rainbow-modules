const getLabelAlignment = (labelAlignment, type) => {
    if (type === 'boolean') return 'top';
    return labelAlignment;
};

export default getLabelAlignment;
