import React from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import Tile from '../../src/components/Tile';

const StyledContainer = styled.div`
    padding: 10px;
    background-color: #f4f6f9;
    display: flex;
    flex-wrap: wrap;
`;

export const simpleTile = () => {
    const tileStyle = { width: 190 };
    return (
        <Application>
            <StyledContainer>
                <Tile name="tile-1" label="Total" value={12} style={tileStyle} />
            </StyledContainer>
        </Application>
    );
};

export const differentsColorsTite = () => {
    const tileStyle = { marginBottom: 10, marginRight: 5, marginLeft: 5 };
    return (
        <Application>
            <StyledContainer>
                <Tile
                    name="completed"
                    label="Completed"
                    value={12}
                    color="#ffffff"
                    backgroundColor="#9dc35e"
                    style={tileStyle}
                />
                <Tile
                    name="inProgress"
                    label="InProgress"
                    value={66}
                    color="#ffffff"
                    backgroundColor="#98d38c"
                    style={tileStyle}
                />
                <Tile
                    name="assigned"
                    label="Assigned"
                    value={32}
                    color="#ffffff"
                    backgroundColor="#71d4d6"
                    style={tileStyle}
                />
                <Tile
                    name="unassigned"
                    label="Unassigned"
                    value={23}
                    color="#ffffff"
                    backgroundColor="#f4d87a"
                    style={tileStyle}
                />
                <Tile
                    name="cancelled"
                    label="Cancelled"
                    value={8}
                    color="#ffffff"
                    backgroundColor="#f2707a"
                    style={tileStyle}
                />
            </StyledContainer>
        </Application>
    );
};

export default {
    title: 'Modules|Dashboard/Stories/Tile',
    component: Tile,
};
