import React, { useState } from 'react';
import { Application, RenderIf } from 'react-rainbow-components';
import styled from 'styled-components';
import InputSearch from '../../src/components/InputSearch';

const StyledInputSearch = styled(InputSearch)`
    width: 400px;
    margin: 32px auto;
`;

const StyledText = styled.p`
    text-align: center;
`;

export const DefaultInputSearch = () => {
    const [query, setQuery] = useState();
    return (
        <Application>
            <StyledInputSearch onSearch={setQuery} variant="default" />
            <RenderIf isTrue={query}>
                <StyledText>
                    You searched for:
                    <strong>
                        &nbsp;
                        {query}
                    </strong>
                </StyledText>
            </RenderIf>
        </Application>
    );
};

export const RealtimeInputSearch = () => {
    const [value, setValue] = useState();
    return (
        <Application>
            <StyledInputSearch value={value} onChange={setValue} variant="realtime" />
            <RenderIf isTrue={value}>
                <StyledText>
                    You searched for:
                    <strong>
                        &nbsp;
                        {value}
                    </strong>
                </StyledText>
            </RenderIf>
        </Application>
    );
};

export default {
    title: 'Modules/Search/Stories/InputSearch',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
