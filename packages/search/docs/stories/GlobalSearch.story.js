import React from 'react';
import styled from 'styled-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Github, Avatar } from '@rainbow-modules/icons';
import GlobalSearch from '../../src/components/GlobalSearch';
import SearchEntity from '../../src/components/SearchEntity';
import useLocalRecentSearches from '../../src/hooks/useLocalRecentSearches';
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
                    onAutocomplete={searchBooksAlgolia}
                    onSearch={searchBooksAlgolia}
                    icon={<Github />}
                />
                <SearchEntity
                    name="Authors"
                    onAutocomplete={searchAuthorsAlgolia}
                    onSearch={searchAuthorsAlgolia}
                    icon={<Avatar />}
                />
            </StyledGlobalSearch>
        </RainbowFirebaseApp>
    );
};

export const MongoAtlasGlobalSearch = () => {
    const [recents, addRecents] = useLocalRecentSearches('mongo-atlas-recent-searches');
    return (
        <RainbowFirebaseApp>
            <StyledGlobalSearch
                variant="shaded"
                placeholder="Search"
                // eslint-disable-next-line no-alert
                onSelect={(item) => alert(JSON.stringify(item))}
                recents={recents}
                onSearch={({ query }) => addRecents(query)}
            >
                <SearchEntity name="Movies" onAutocomplete={searchMoviesTitleMongo} />
                <SearchEntity name="Plot" onAutocomplete={searchMoviesPlotMongo} />
            </StyledGlobalSearch>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|Search/Stories/GlobalSearch',
};
