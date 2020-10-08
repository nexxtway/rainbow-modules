import { useContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import mapboxgl from 'mapbox-gl';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import Map from '../Map';
import getDirections from './getDirections';
import renderLine from './renderLine';
import start from './icons/start';
import finish from './icons/finish';

export default function Route(props) {
    const { waypoints } = props;
    const { accessToken, map } = useContext(Map.context);
    const uniqueId = useUniqueIdentifier('mapbox-route');

    useEffect(() => {
        let startMarker;
        let endMarker;

        (async () => {
            if (Array.isArray(waypoints) && waypoints.length >= 1) {
                const startElement = document.createElement('div');
                startElement.innerHTML = start;
                startMarker = new mapboxgl.Marker(startElement).setLngLat(waypoints[0]).addTo(map);

                const bounds = [waypoints[0], waypoints[0]];

                map.fitBounds(bounds, {
                    padding: { top: 350, left: 200, right: 200, bottom: 200 },
                    maxZoom: 12,
                });

                if (waypoints.length >= 2) {
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

                    const finishElement = document.createElement('div');
                    finishElement.innerHTML = finish;
                    endMarker = new mapboxgl.Marker({
                        element: finishElement,
                        offset: [2, -6],
                    })
                        .setLngLat(coordinates[coordinates.length - 1])
                        .addTo(map);

                    map.fitBounds(waypoints, {
                        padding: { top: 350, left: 200, right: 200, bottom: 200 },
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
    }, [waypoints]);
    return null;
}

Route.propsTypes = {
    waypoints: PropTypes.array,
};

Route.defaultProps = {
    waypoints: [],
};
