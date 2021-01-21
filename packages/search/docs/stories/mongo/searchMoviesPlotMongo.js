import getMongoHighlightParts from './getMongoHighlightParts';

const ENDPOINT_URL = 'https://express-atlas-search.herokuapp.com';

const searchMoviesPlotMongo = async ({ query }) => {
    if (query !== '') {
        const response = await fetch(`${ENDPOINT_URL}/movies/search?query=${query}`);
        const result = await response.json();
        return {
            hits: result.map(({ highlights, title, plot, score }) => ({
                title: getMongoHighlightParts({ highlights, path: 'plot', defaultValue: plot }),
                description: getMongoHighlightParts({
                    highlights,
                    path: 'title',
                    defaultValue: title,
                }),
                score,
            })),
        };
    }
    return Promise.resolve({ hits: [] });
};

export default searchMoviesPlotMongo;
