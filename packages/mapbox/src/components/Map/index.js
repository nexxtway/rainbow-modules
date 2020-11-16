/* eslint-disable react/destructuring-assignment */
import React, { useRef, useEffect, createContext, useState } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import { RenderIf, Spinner } from 'react-rainbow-components';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Container, MapContainer, ChildrenContainer } from './styled';

const MapContext = createContext({});

const geoOptions = {
    maximumAge: 600000,
    enableHighAccuracy: true,
    timeout: 10000,
};

export default function Map(props) {
    const {
        accessToken,
        center,
        defaultCenter,
        zoom,
        mapStyle,
        className,
        style,
        children,
    } = props;
    const mapContainerRef = useRef();
    const map = useRef();
    const [context, setContext] = useState({ accessToken });
    const [isLoading, setLoading] = useState(false);

    const renderMap = (mapCenter) => {
        map.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: mapStyle,
            center: mapCenter,
            zoom,
            accessToken,
        });

        map.current.once('load', () => setLoading(false));
        setContext({ ...context, map: map.current });
    };

    const handleGeolocationSuccess = (position) => {
        const userLocation = [position.coords.longitude, position.coords.latitude];
        renderMap(userLocation);
    };

    useEffect(() => {
        if (accessToken) {
            setLoading(true);
            if (Array.isArray(center) && center.length === 2) {
                renderMap(center);
            } else {
                navigator.geolocation.getCurrentPosition(
                    handleGeolocationSuccess,
                    () => renderMap(defaultCenter),
                    geoOptions,
                );
            }
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken]);

    useEffect(() => {
        if (map.current && typeof map.current.flyTo === 'function') {
            map.current.flyTo({
                center,
            });
        }
    }, [center]);

    return (
        <Container className={className} style={style}>
            <RenderIf isTrue={!accessToken}>
                <p>Oops! Something went wrong.</p>
                <p>We need an accessToken to render the map</p>
            </RenderIf>
            <RenderIf isTrue={isLoading}>
                <Spinner type="arc" variant="brand" size="x-large" />
            </RenderIf>
            <MapContainer ref={mapContainerRef} />
            <ChildrenContainer>
                <MapContext.Provider value={context}>
                    <RenderIf isTrue={context.map}>{children}</RenderIf>
                </MapContext.Provider>
            </ChildrenContainer>
        </Container>
    );
}

Map.context = MapContext;

Map.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    accessToken: PropTypes.string.isRequired,
    mapStyle: PropTypes.string,
    zoom: PropTypes.number,
    center: PropTypes.arrayOf(PropTypes.number),
    defaultCenter: PropTypes.arrayOf(PropTypes.number),
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

Map.defaultProps = {
    className: undefined,
    style: undefined,
    mapStyle: 'mapbox://styles/mapbox/light-v10',
    zoom: 9,
    center: undefined,
    defaultCenter: undefined,
    children: null,
};
