import React, { useState } from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import { TilePicker, Tile } from '../../src';

const StyledContainer = styled.div`
    padding: 25px 10px;
    background-color: #f4f6f9;
`;

export const OnlyOneSelection = () => {
    const [value, setValue] = useState();
    return (
        <Application>
            <StyledContainer>
                <TilePicker value={value} onChange={setValue} label="Only one Selection">
                    <Tile
                        name="completed"
                        label="Completed"
                        value={12}
                        color="#ffffff"
                        backgroundColor="#9dc35e"
                    />
                    <Tile
                        name="inProgress"
                        label="InProgress"
                        value={66}
                        color="#ffffff"
                        backgroundColor="#98d38c"
                    />
                    <Tile
                        name="assigned"
                        label="Assigned"
                        value={32}
                        color="#ffffff"
                        backgroundColor="#71d4d6"
                    />
                    <Tile
                        name="unassigned"
                        label="Unassigned"
                        value={23}
                        color="#ffffff"
                        backgroundColor="#f4d87a"
                    />
                    <Tile
                        name="cancelled"
                        label="Cancelled"
                        value={8}
                        color="#ffffff"
                        backgroundColor="#f2707a"
                    />
                </TilePicker>
            </StyledContainer>
        </Application>
    );
};

export const MultipleSelection = () => {
    const [value, setValue] = useState();
    return (
        <Application>
            <StyledContainer>
                <TilePicker value={value} onChange={setValue} label="Multiple Selection" multiple>
                    <Tile
                        name="completed"
                        label="Completed"
                        value={12}
                        color="#ffffff"
                        backgroundColor="#9dc35e"
                    />
                    <Tile
                        name="inProgress"
                        label="InProgress"
                        value={66}
                        color="#ffffff"
                        backgroundColor="#98d38c"
                    />
                    <Tile
                        name="assigned"
                        label="Assigned"
                        value={32}
                        color="#ffffff"
                        backgroundColor="#71d4d6"
                    />
                    <Tile
                        name="unassigned"
                        label="Unassigned"
                        value={23}
                        color="#ffffff"
                        backgroundColor="#f4d87a"
                    />
                    <Tile
                        name="cancelled"
                        label="Cancelled"
                        value={8}
                        color="#ffffff"
                        backgroundColor="#f2707a"
                    />
                </TilePicker>
            </StyledContainer>
        </Application>
    );
};

export default {
    title: 'Modules|Dashboard/Stories/TilePicker',
    component: TilePicker,
};
