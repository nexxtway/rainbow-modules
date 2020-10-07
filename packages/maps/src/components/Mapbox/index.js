/* eslint-disable react/destructuring-assignment */
import React, { useRef, useEffect, createContext, useState } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import styled from 'styled-components';
import { RenderIf } from 'react-rainbow-components';

const Container = styled.div``;

const MapContainer = styled.div`
    height: 100%;
`;

const MapContext = createContext({});

export default function Mapbox(props) {
    const { accessToken, center, zoom, mapStyle, className, style, children } = props;
    const mapContainerRef = useRef();
    const map = useRef();
    const [context, setContext] = useState({ accessToken });
    useEffect(() => {
        map.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: mapStyle,
            center,
            zoom,
            accessToken,
        });
        setContext({ ...context, map: map.current });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken]);
    return (
        <Container className={className} style={style}>
            <MapContainer ref={mapContainerRef} />
            <MapContext.Provider value={context}>
                <RenderIf isTrue={context.map}>{children}</RenderIf>
            </MapContext.Provider>
        </Container>
    );
}

Mapbox.context = MapContext;

Mapbox.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    accessToken: PropTypes.string.isRequired,
    mapStyle: PropTypes.string,
    zoom: PropTypes.number,
    center: PropTypes.arrayOf(PropTypes.number),
};

Mapbox.defaultProps = {
    className: undefined,
    style: undefined,
    mapStyle: 'mapbox://styles/mapbox/light-v10',
    zoom: 9,
    center: undefined,
};
