import React, { useState } from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import { FilterFilled } from '@rainbow-modules/icons';
import { TilePicker, Tile } from '../../src';

const StyledContainer = styled.div`
    padding: 25px 10px;
    background-color: #f4f6f9;
`;

const StyledFilterFilled = styled(FilterFilled)`
    width: 8px;
    height: 8px;
`;

export const OnlyOneSelection = () => {
    const [value, setValue] = useState();
    return (
        <Application>
            <StyledContainer>
                <TilePicker value={value} onChange={setValue}>
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
                <TilePicker value={value} onChange={setValue} multiple>
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

export const BadgeVariant = () => {
    const [value, setValue] = useState();
    return (
        <Application>
            <StyledContainer>
                <TilePicker value={value} onChange={setValue}>
                    <Tile
                        name="completed"
                        label="Completed"
                        value={12}
                        color="#ffffff"
                        backgroundColor="#9dc35e"
                        variant="badge"
                    />
                    <Tile
                        name="assigned"
                        label="Assigned"
                        value={32}
                        color="#ffffff"
                        backgroundColor="#71d4d6"
                        variant="badge"
                    />
                    <Tile
                        name="pending"
                        label="Pending"
                        value={23}
                        color="#ffffff"
                        backgroundColor="#f4d87a"
                        variant="badge"
                    />
                    <Tile
                        name="canceled"
                        label="Canceled"
                        value={8}
                        color="#ffffff"
                        backgroundColor="#f2707a"
                        variant="badge"
                    />
                </TilePicker>
            </StyledContainer>
        </Application>
    );
};

export const BadgeVariantWithCustomIcon = () => {
    const [value, setValue] = useState();
    return (
        <Application>
            <StyledContainer>
                <TilePicker value={value} onChange={setValue}>
                    <Tile
                        name="completed"
                        label="Completed"
                        value={12}
                        color="#ffffff"
                        backgroundColor="#9dc35e"
                        variant="badge"
                        selectedIcon={<StyledFilterFilled />}
                    />
                    <Tile
                        name="assigned"
                        label="Assigned"
                        value={32}
                        color="#ffffff"
                        backgroundColor="#71d4d6"
                        variant="badge"
                        selectedIcon={<StyledFilterFilled />}
                    />
                    <Tile
                        name="pending"
                        label="Pending"
                        value={23}
                        color="#ffffff"
                        backgroundColor="#f4d87a"
                        variant="badge"
                        selectedIcon={<StyledFilterFilled />}
                    />
                    <Tile
                        name="canceled"
                        label="Canceled"
                        value={8}
                        color="#ffffff"
                        backgroundColor="#f2707a"
                        variant="badge"
                        selectedIcon={<StyledFilterFilled />}
                    />
                </TilePicker>
            </StyledContainer>
        </Application>
    );
};

export default {
    title: 'Modules/Dashboard/Stories/TilePicker',
};
