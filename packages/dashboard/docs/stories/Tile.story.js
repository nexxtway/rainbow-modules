import React from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import Tile from '../../src/components/Tile';

const StyledContainer = styled.div`
    padding: 10px;
    background-color: #f4f6f9;
`;

const StyledFlexContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
`;

const tileStyle = { width: 190 };
export const simpleTile = () => {
    return (
        <Application>
            <StyledContainer>
                <Tile name="tile-1" label="Total" value={12} style={tileStyle} />
            </StyledContainer>
        </Application>
    );
};

export const differentsColorsTite = () => {
    return (
        <Application>
            <StyledContainer>
                <StyledFlexContainer>
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
                </StyledFlexContainer>
            </StyledContainer>
        </Application>
    );
};

export default {
    title: 'Modules|Dashboard/Stories',
    component: Tile,
};
