import React, { useState, useMemo } from 'react';
import { Application, GoogleAddressLookup } from 'react-rainbow-components';
import styled from 'styled-components';
import { Map, Route } from '../../src';

const MapBox = styled(Map)`
    height: 100vh;
`;

const MAPBOX_ACCESS_TOKEN = process.env.STORYBOOK_MAPBOX_ACCESS_TOKEN;
const GOOGLE_MAPS_API_KEY = process.env.STORYBOOK_GOOGLE_MAPS_API_KEY;

export const simpleMap = () => {
    return (
        <Application>
            <MapBox accessToken={MAPBOX_ACCESS_TOKEN} center={[-74.5, 40]} zoom={9} />
        </Application>
    );
};

export const mapWithRoute = () => {
    return (
        <Application>
            <MapBox accessToken={MAPBOX_ACCESS_TOKEN} center={[-103.3291727, 20.607034]} zoom={15}>
                <Route
                    waypoints={[
                        [-103.3491727, 20.677034],
                        [-103.301488, 20.526721],
                    ]}
                />
            </MapBox>
        </Application>
    );
};

const lookupsStyles = {
    display: 'flex',
};

const lookupStyles = {
    minWidth: 400,
};

const getWaypoints = (origin, destination) => {
    const waypoints = [];
    if (origin) {
        waypoints.push([origin.geometry.location.lng(), origin.geometry.location.lat()]);
    }
    if (destination) {
        if (!origin) {
            waypoints.push(null);
        }
        waypoints.push([destination.geometry.location.lng(), destination.geometry.location.lat()]);
    }
    return waypoints;
};

const Lookups = (props) => {
    // eslint-disable-next-line react/prop-types
    const { onChangeOrigin, origin, onChangeDestination, destination } = props;

    return (
        <div style={lookupsStyles}>
            <GoogleAddressLookup
                label="Origin"
                onChange={onChangeOrigin}
                value={origin}
                placeholder="Enter location"
                apiKey={GOOGLE_MAPS_API_KEY}
                style={lookupStyles}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium"
            />
            <GoogleAddressLookup
                label="Destination"
                onChange={onChangeDestination}
                value={destination}
                placeholder="Enter location"
                apiKey={GOOGLE_MAPS_API_KEY}
                style={lookupStyles}
                className="rainbow-m-vertical_x-large rainbow-p-horizontal_medium"
            />
        </div>
    );
};

const MapWithDynamicRoute = () => {
    const [origin, setOrigin] = useState();
    const [destination, setDestination] = useState();
    const waypoints = useMemo(() => getWaypoints(origin, destination), [origin, destination]);

    return (
        <MapBox accessToken={MAPBOX_ACCESS_TOKEN} center={[-103.4647322, 20.5710266]} zoom={10}>
            <Lookups
                onChangeOrigin={setOrigin}
                origin={origin}
                onChangeDestination={setDestination}
                destination={destination}
            />
            <Route waypoints={waypoints} />
        </MapBox>
    );
};

export const mapWithDynamicRoute = () => {
    return (
        <Application>
            <MapWithDynamicRoute />
        </Application>
    );
};

export default {
    title: 'Modules|Mapbox/Stories/Map',
};
