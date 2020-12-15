import React from 'react';
import styled from 'styled-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import GlobalSearch from '../../src/components/GlobalSearch';
import SearchEntity from '../../src/components/SearchEntity';
import searchBooks from './searchBooksAlgolia';
import searchAuthors from './searchAuthorsAlgolia';

const StyledGlobalSearch = styled(GlobalSearch)`
    width: 400px;
    margin: 64px auto;
`;

export const DefaultGlobalSearch = () => {
    return (
        <RainbowFirebaseApp>
            <StyledGlobalSearch
                variant="shaded"
                placeholder="Search"
                // eslint-disable-next-line no-alert
                onSelect={(item) => alert(JSON.stringify(item))}
            >
                <SearchEntity name="Books" onSearch={searchBooks} />
                <SearchEntity name="Authors" onSearch={searchAuthors} />
            </StyledGlobalSearch>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|Search/Stories/GlobalSearch',
};
