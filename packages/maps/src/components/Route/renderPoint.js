const defaultPaint = {
    'circle-radius': 10,
    'circle-color': '#3887be',
};

const renderPoint = (config) => {
    const { map, point, id, paint } = config;
    map.addLayer({
        id,
        type: 'circle',
        source: {
            type: 'geojson',
            data: {
                type: 'FeatureCollection',
                features: [
                    {
                        type: 'Feature',
                        properties: {},
                        geometry: {
                            type: 'Point',
                            coordinates: point,
                        },
                    },
                ],
            },
        },
        paint: paint ? { ...defaultPaint, ...paint } : defaultPaint,
    });
};

export default renderPoint;
