import styled from 'styled-components';

export const Container = styled.div`
    position: relative;
    height: 100%;
`;

export const MapContainer = styled.div`
    height: 100%;
`;

export const ChildrenContainer = styled.div`
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    pointer-events: none;

    & > * {
        pointer-events: initial;
    }
`;
