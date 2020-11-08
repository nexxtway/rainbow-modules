import Index from './algoliaIndex';

const search = async ({ query }) => {
    const result = await Index.search(query);
    return {
        items: result.hits.map((item) => ({
            title: `${item.authors}`,
            description: item.title,
        })),
    };
};

export default search;
