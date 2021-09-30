import { ContentTypeMapper } from '../types';

const contentTypeMatchers = [
    /^application\/(javascript|json|xml|xhtml\+xml|ld\+json)$/,
    /^text\/(.*)$/,
];

const contentTypeToLanguageMap: ContentTypeMapper = {
    'application/javascript': 'javascript',
    'application/json': 'json',
    'application/ld+json': 'json',
    'application/xhtml+xml': 'html',
    'application/xml': 'xml',
    'image/svg+xml': 'xml',
    'text/markdown': 'markdown',
};

const getLanguageFromContentType = async (args: { contentType?: string }): Promise<string> => {
    const { contentType } = args;
    if (contentType) {
        const matcher = contentTypeMatchers.find((regEx) => regEx.test(contentType));
        if (matcher) {
            const matches = matcher.exec(contentType);
            if (matches) {
                const [, language] = matches;
                return language || 'text';
            }
        }
        return contentTypeToLanguageMap[contentType] || 'text';
    }
    return 'text';
};

export default getLanguageFromContentType;
