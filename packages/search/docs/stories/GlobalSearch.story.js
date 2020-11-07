import React from 'react';
import styled from 'styled-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import GlobalSearch from '../../src/components/GlobalSearch';
import SearchEntity from '../../src/components/SearchEntity';

const StyledGlobalSearch = styled(GlobalSearch)`
    width: 400px;
    margin: 64px auto;
`;

const searchComponents = () =>
    Promise.resolve({
        items: [
            { title: 'Table', description: 'foo' },
            { title: 'ButtonMenu', description: 'foo' },
        ],
    });

const searchExamples = () =>
    Promise.resolve({
        items: [
            { title: 'Basic Table', description: 'foo' },
            { title: 'Basic ButtonMenu', description: 'foo' },
        ],
    });

export const DefaultGlobalSearch = () => {
    return (
        <RainbowFirebaseApp>
            <StyledGlobalSearch variant="shaded" placeholder="Search">
                <SearchEntity name="Component" onSearch={searchComponents} />
                <SearchEntity name="Example" onSearch={searchExamples} />
            </StyledGlobalSearch>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|Search/Stories/GlobalSearch',
};
