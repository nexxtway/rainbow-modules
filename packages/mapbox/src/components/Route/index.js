import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import Map from '../Map';
import getDirections from './getDirections';
import renderLine from './renderLine';
import start from './icons/start';
import finish from './icons/finish';

const fitBoundsPadding = { top: 350, left: 200, right: 200, bottom: 200 };

export default function Route(props) {
    const { waypoints, onRenderRoute, disableAnimation } = props;
    const { accessToken, map } = useContext(Map.context);
    const uniqueId = useUniqueIdentifier('mapbox-route');

    useEffect(() => {
        let startMarker;
        let endMarker;

        (async () => {
            const shouldSendRouteAsNull =
                !Array.isArray(waypoints) ||
                waypoints.length === 0 ||
                waypoints.length < 2 ||
                (waypoints.length === 2 && waypoints.some((waypoint) => !waypoint));

            if (shouldSendRouteAsNull) {
                onRenderRoute(null);
            }
            if (Array.isArray(waypoints) && waypoints.length >= 1) {
                if (waypoints[0]) {
                    const startElement = document.createElement('div');
                    startElement.innerHTML = start;
                    startMarker = new mapboxgl.Marker(startElement)
                        .setLngLat(waypoints[0])
                        .addTo(map);
                }
                if (waypoints[1]) {
                    const finishElement = document.createElement('div');
                    finishElement.innerHTML = finish;
                    endMarker = new mapboxgl.Marker({
                        element: finishElement,
                        offset: [2, -6],
                    })
                        .setLngLat(waypoints[1])
                        .addTo(map);
                }

                const waypoint = waypoints[0] || waypoints[1];
                const bounds = [waypoint, waypoint];
                map.fitBounds(bounds, {
                    padding: fitBoundsPadding,
                    maxZoom: 12,
                });

                if (waypoints.length >= 2 && waypoints[0] && waypoints[1]) {
                    const geoJson = await getDirections({
                        accessToken,
                        waypoints,
                    });
                    const { coordinates } = geoJson.routes[0].geometry;
                    renderLine({
                        map,
                        coordinates,
                        id: uniqueId,
                    });

                    startMarker.setLngLat(coordinates[0]);
                    endMarker.setLngLat(coordinates[coordinates.length - 1]);

                    map.fitBounds(waypoints, {
                        padding: fitBoundsPadding,
                        animate: !disableAnimation,
                    });

                    onRenderRoute({
                        routes: geoJson.routes,
                        waypoints: geoJson.waypoints,
                    });
                }
            }
        })();
        return () => {
            if (map.getLayer(uniqueId)) {
                map.removeLayer(uniqueId);
                map.removeSource(uniqueId);
            }
            if (startMarker) {
                startMarker.remove();
            }
            if (endMarker) {
                endMarker.remove();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [JSON.stringify(waypoints)]);
    return null;
}

Route.propsTypes = {
    waypoints: PropTypes.array,
    onRenderRoute: PropTypes.func,
    disableAnimation: PropTypes.bool,
};

Route.defaultProps = {
    waypoints: [],
    onRenderRoute: () => {},
    disableAnimation: false,
};
