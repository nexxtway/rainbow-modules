import React from 'react';
import styled from 'styled-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import GlobalSearch from '../../src/components/GlobalSearch';

const StyledGlobalSearch = styled(GlobalSearch)`
    width: 400px;
    margin: 64px auto;
`;

export const DefaultGlobalSearch = () => {
    return (
        <RainbowFirebaseApp>
            <StyledGlobalSearch variant="shaded" placeholder="Search" />
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|Search/Stories/GlobalSearch',
};
