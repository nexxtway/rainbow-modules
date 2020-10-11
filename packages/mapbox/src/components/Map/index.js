/* eslint-disable react/destructuring-assignment */
import React, { useRef, useEffect, createContext, useState } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import { RenderIf } from 'react-rainbow-components';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Container, MapContainer, ChildrenContainer } from './styled';

const MapContext = createContext({});

export default function Map(props) {
    const { accessToken, center, zoom, mapStyle, className, style, children } = props;
    const mapContainerRef = useRef();
    const map = useRef();
    const [context, setContext] = useState({ accessToken });
    useEffect(() => {
        if (accessToken) {
            map.current = new mapboxgl.Map({
                container: mapContainerRef.current,
                style: mapStyle,
                center,
                zoom,
                accessToken,
            });
            setContext({ ...context, map: map.current });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken]);

    return (
        <Container className={className} style={style}>
            <RenderIf isTrue={!accessToken}>
                <p>Oops! Something went wrong.</p>
                <p>We need an accessToken to render the map</p>
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
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

Map.defaultProps = {
    className: undefined,
    style: undefined,
    mapStyle: 'mapbox://styles/mapbox/light-v10',
    zoom: 9,
    center: undefined,
    children: null,
};
