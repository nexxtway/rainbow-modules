/* eslint-disable react/destructuring-assignment */
import React, { useRef, useEffect, createContext, useState } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import { RenderIf, Spinner } from 'react-rainbow-components';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Container, MapContainer, ChildrenContainer } from './styled';

const MapContext = createContext({});

export default function Map(props) {
    const {
        accessToken,
        center,
        zoom,
        mapStyle,
        className,
        style,
        disableAnimation,
        children,
    } = props;
    const mapContainerRef = useRef();
    const map = useRef();
    const [context, setContext] = useState({ accessToken });
    const [isLoading, setLoading] = useState(false);

    const renderMap = ({ center }) => {
        map.current = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: mapStyle,
            center,
            zoom,
            accessToken,
        });

        map.current.once('load', () => setLoading(false));
        setContext({ ...context, map: map.current });
    };

    useEffect(() => {
        if (accessToken) {
            setLoading(true);
            renderMap({ center });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [accessToken]);

    useEffect(() => {
        if (map.current && typeof map.current.flyTo === 'function') {
            map.current.flyTo({
                center,
                animate: !disableAnimation,
            });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                    <RenderIf isTrue={context.map && !isLoading}>{children}</RenderIf>
                </MapContext.Provider>
            </ChildrenContainer>
        </Container>
    );
}

Map.context = MapContext;

Map.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /** Identifier that is used as authentication for the use of the services provided by mapbox */
    accessToken: PropTypes.string.isRequired,
    /** A mapbox url where styles are defined */
    mapStyle: PropTypes.string,
    /** A number that defines the zoom with which the map will be rendered */
    zoom: PropTypes.number,
    /** An array with the coordinates where the map will be centered when rendered */
    center: PropTypes.arrayOf(PropTypes.number),
    /** It disable the animation when the center prop changes values */
    disableAnimation: PropTypes.bool,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

Map.defaultProps = {
    className: undefined,
    style: undefined,
    mapStyle: 'mapbox://styles/mapbox/light-v10',
    zoom: 9,
    center: undefined,
    children: null,
    disableAnimation: false,
};
