import Index from './algoliaIndex';
import getAlgoliaHighlightParts from './getAlgoliaHighlightParts';

const search = async ({ query, page = 1 }) => {
    const result = await Index.search(query, {
        page: page - 1,
    });
    const { hits, page: searchPage, nbHits, nbPages, query: searchQuery } = result;
    return {
        hits: hits.map(({ _highlightResult }) => ({
            title: getAlgoliaHighlightParts(_highlightResult.title),
            description: getAlgoliaHighlightParts(_highlightResult.authors),
        })),
        page: searchPage + 1,
        totalHits: nbHits,
        totalPages: nbPages,
        query: searchQuery,
    };
};

export default search;
