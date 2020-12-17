const getMongoHighlightParts = ({ highlights, path, defaultValue }) => {
    const highlight = highlights.find((item) => item.path === path);
    if (highlight && highlight.texts) {
        return highlight.texts;
    }
    return defaultValue;
};

export default getMongoHighlightParts;
