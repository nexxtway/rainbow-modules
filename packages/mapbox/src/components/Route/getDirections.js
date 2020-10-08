const join = (waypoints) => {
    return waypoints
        .map((point) => {
            return point.join(',');
        })
        .join(';');
};

const getDirections = async (config) => {
    const { accessToken, profile = 'driving', waypoints } = config;
    const res = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/${profile}/${join(
            waypoints,
        )}?alternatives=true&geometries=geojson&steps=true&access_token=${accessToken}`,
    );
    return res.json();
};

export default getDirections;
