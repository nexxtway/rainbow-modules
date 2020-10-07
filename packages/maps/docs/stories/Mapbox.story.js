import React from 'react';
import { Application } from 'react-rainbow-components';
import styled from 'styled-components';
import { Mapbox, Route } from '../../src';
import 'mapbox-gl/dist/mapbox-gl.css';

const Map = styled(Mapbox)`
    height: 100vh;
`;

export const simpleMap = () => {
    return (
        <Application>
            <Map
                accessToken="pk.eyJ1IjoicmVpbmllcmdzIiwiYSI6ImNrZnNjaWxtMTBiaXgycnMzYmx6ZXRnZXgifQ.NsYeGu_8vmRD_6WH7c8GZA"
                center={[-74.5, 40]}
                zoom={9}
            />
        </Application>
    );
};

export const mapWithRoute = () => {
    return (
        <Application>
            <Map
                accessToken="pk.eyJ1IjoicmVpbmllcmdzIiwiYSI6ImNrZnNjaWxtMTBiaXgycnMzYmx6ZXRnZXgifQ.NsYeGu_8vmRD_6WH7c8GZA"
                center={[-103.4647322, 20.5710266]}
                zoom={8}
            >
                <Route
                    waypoints={[
                        [-103.4647322, 20.5710266],
                        [-103.3098137, 20.5259611],
                    ]}
                />
            </Map>
        </Application>
    );
};

export default {
    title: 'Modules|Maps/Stories/Mapbox',
};
