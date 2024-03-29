import React from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import Tile from '../../src/components/Tile';

const StyledContainer = styled.div`
    padding: 10px;
    background-color: #fff;
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

export const TileWithBadgeVariant = () => {
    return (
        <Application>
            <StyledContainer>
                <Tile
                    name="tile-1"
                    label="Total"
                    value={125}
                    variant="badge"
                    className="rainbow-m-right_medium"
                />
                <Tile
                    name="tile-2"
                    label="Completed"
                    value={12}
                    variant="badge"
                    backgroundColor="#9dc35e"
                    color="#fff"
                    className="rainbow-m-right_medium"
                />
                <Tile
                    name="tile-3"
                    label="Assigned"
                    value={6}
                    variant="badge"
                    backgroundColor="#71d4d6"
                    color="#fff"
                    className="rainbow-m-right_medium"
                />
                <Tile
                    name="tile-4"
                    label="Pending"
                    value={86}
                    variant="badge"
                    backgroundColor="#f4d87a"
                    color="#fff"
                    className="rainbow-m-right_medium"
                />
                <Tile
                    name="tile-5"
                    label="Canceled"
                    value={12}
                    variant="badge"
                    backgroundColor="#f2707a"
                    color="#fff"
                />
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
                    isLoading
                />
                <Tile
                    name="inProgress"
                    label="InProgress"
                    value={66}
                    color="#ffffff"
                    backgroundColor="#98d38c"
                    style={tileStyle}
                    isLoading
                />
                <Tile
                    name="assigned"
                    label="Assigned"
                    value={32}
                    color="#ffffff"
                    backgroundColor="#71d4d6"
                    style={tileStyle}
                    isLoading
                />
                <Tile
                    name="unassigned"
                    label="Unassigned"
                    value={23}
                    color="#ffffff"
                    backgroundColor="#f4d87a"
                    style={tileStyle}
                    isLoading
                />
                <Tile
                    name="cancelled"
                    label="Cancelled"
                    value={8}
                    color="#ffffff"
                    backgroundColor="#f2707a"
                    style={tileStyle}
                    isLoading
                />
            </StyledContainer>
        </Application>
    );
};

export const variantFlat = () => {
    const tileStyle = { marginBottom: 10, marginRight: 5, marginLeft: 5 };
    return (
        <Application>
            <StyledContainer>
                <Tile
                    name="completed"
                    label="Completed"
                    value={12}
                    variant="flat"
                    style={tileStyle}
                />
                <Tile
                    name="inProgress"
                    label="InProgress"
                    value={66}
                    variant="flat"
                    style={tileStyle}
                />
                <Tile
                    name="assigned"
                    label="Assigned"
                    value={32}
                    variant="flat"
                    style={tileStyle}
                />
                <Tile
                    name="unassigned"
                    label="Unassigned"
                    value={23}
                    variant="flat"
                    style={tileStyle}
                />
                <Tile
                    name="cancelled"
                    label="Cancelled"
                    value={8}
                    variant="flat"
                    style={tileStyle}
                />
            </StyledContainer>
        </Application>
    );
};

export const loadingTile = () => {
    const tileStyle = { marginBottom: 10, marginRight: 5, marginLeft: 5 };
    return (
        <Application>
            <StyledContainer>
                <Tile name="completed" style={tileStyle} isLoading />
                <Tile name="inProgress" variant="flat" style={tileStyle} isLoading />
                <Tile name="assigned" variant="badge" style={tileStyle} isLoading />
            </StyledContainer>
        </Application>
    );
};

export default {
    title: 'Modules/Dashboard/Stories/Tile',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
