const isValidContentType = ({ contentType }) =>
    [
        /^application\/(javascript|json|xml|xhtml\+xml|ld\+json)$/,
        /^image\/svg\+xml$/,
        /^text\/(.*)$/,
    ].some((regex) => {
        const text = contentType || '';
        return text.match(regex);
    });

export default isValidContentType;
