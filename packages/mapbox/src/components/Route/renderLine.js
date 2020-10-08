const defaultPaint = {
    'line-color': '#3887be',
    'line-width': 5,
    'line-opacity': 0.75,
    'line-gradient': ['interpolate', ['linear'], ['line-progress'], 0, '#8BEA97', 1, '#00AB8E'],
};

const renderLine = (config) => {
    const { map, coordinates, id, paint } = config;
    map.addLayer({
        id,
        type: 'line',
        source: {
            type: 'geojson',
            lineMetrics: true,
            data: {
                type: 'Feature',
                properties: {},
                geometry: {
                    type: 'LineString',
                    coordinates,
                },
            },
        },
        layout: {
            'line-join': 'round',
            'line-cap': 'round',
        },
        paint: paint ? { ...defaultPaint, ...paint } : defaultPaint,
    });
};

export default renderLine;
