import React from 'react';
import styled from 'styled-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import GlobalSearch from '../../src/components/GlobalSearch';
import SearchEntity from '../../src/components/SearchEntity';
import searchBooksAlgolia from './algolia/searchBooksAlgolia';
import searchAuthorsAlgolia from './algolia/searchAuthorsAlgolia';
import searchMoviesTitleMongo from './mongo/searchMoviesTitleMongo';
import searchMoviesPlotMongo from './mongo/searchMoviesPlotMongo';

const StyledGlobalSearch = styled(GlobalSearch)`
    width: 400px;
    margin: 64px auto;
`;

export const AlgoliaGlobalSearch = () => {
    return (
        <RainbowFirebaseApp>
            <StyledGlobalSearch
                variant="shaded"
                placeholder="Search"
                // eslint-disable-next-line no-alert
                onSelect={(item) => alert(JSON.stringify(item))}
            >
                <SearchEntity
                    name="Books"
                    onSearch={searchBooksAlgolia}
                    onSearchWithPagination={searchBooksAlgolia}
                />
                <SearchEntity
                    name="Authors"
                    onSearch={searchAuthorsAlgolia}
                    onSearchWithPagination={searchAuthorsAlgolia}
                />
            </StyledGlobalSearch>
        </RainbowFirebaseApp>
    );
};

export const MongoAtlasGlobalSearch = () => {
    return (
        <RainbowFirebaseApp>
            <StyledGlobalSearch
                variant="shaded"
                placeholder="Search"
                // eslint-disable-next-line no-alert
                onSelect={(item) => alert(JSON.stringify(item))}
            >
                <SearchEntity name="Movies" onSearch={searchMoviesTitleMongo} />
                <SearchEntity name="Plot" onSearch={searchMoviesPlotMongo} />
            </StyledGlobalSearch>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|Search/Stories/GlobalSearch',
};
