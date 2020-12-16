import algoliasearch from 'algoliasearch/lite';

const client = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_KEY);

const booksIndex = client.initIndex('rainbow-books');

export default booksIndex;
