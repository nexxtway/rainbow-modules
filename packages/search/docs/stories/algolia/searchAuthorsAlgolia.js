import Index from './algoliaIndex';
import getAlgoliaHighlightParts from './getAlgoliaHighlightParts';

const search = async ({ query }) => {
    const result = await Index.search(query);
    return {
        items: result.hits.map(({ _highlightResult }) => ({
            title: getAlgoliaHighlightParts(_highlightResult.authors),
            description: getAlgoliaHighlightParts(_highlightResult.title),
        })),
    };
};

export default search;
