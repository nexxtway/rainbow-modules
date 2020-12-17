import Index from './algoliaIndex';
import getAlgoliaHighlightParts from './getAlgoliaHighlightParts';

const search = async ({ query, page = 1 }) => {
    const result = await Index.search(query, {
        page: page - 1,
    });
    return {
        hits: result.hits.map(({ _highlightResult }) => ({
            title: getAlgoliaHighlightParts(_highlightResult.title),
            description: getAlgoliaHighlightParts(_highlightResult.authors),
        })),
        page: result.page + 1,
        totalHits: result.nbHits,
        totalPages: result.nbPages,
    };
};

export default search;
