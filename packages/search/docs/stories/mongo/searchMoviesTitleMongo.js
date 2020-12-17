import getMongoHighlightParts from './getMongoHighlightParts';

const ENDPOINT_URL = 'https://express-atlas-search.herokuapp.com';

const searchMoviesTitleMongo = async ({ query }) => {
    if (query !== '') {
        const response = await fetch(`${ENDPOINT_URL}/movies/search?query=${query}`);
        const result = await response.json();
        return {
            hits: result.map(({ highlights, title, plot }) => ({
                title: getMongoHighlightParts({ highlights, path: 'title', defaultValue: title }),
                description: getMongoHighlightParts({
                    highlights,
                    path: 'plot',
                    defaultValue: plot,
                }),
            })),
        };
    }
    return Promise.resolve({ hits: [] });
};

export default searchMoviesTitleMongo;
