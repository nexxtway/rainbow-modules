import Index from './algoliaIndex';

const search = async ({ query }) => {
    const result = await Index.search(query);
    return {
        items: result.hits.map((item) => ({
            title: item.title,
            description: `${item.authors}`,
        })),
    };
};

export default search;
