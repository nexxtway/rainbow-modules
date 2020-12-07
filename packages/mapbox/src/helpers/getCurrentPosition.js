const defaultGeoOptions = {
    maximumAge: 600000,
    enableHighAccuracy: true,
    timeout: 10000,
};

const getCurrentPosition = (geoOptions = defaultGeoOptions) => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, geoOptions);
    });
};

export default getCurrentPosition;
