import React from 'react';
import PropTypes from 'prop-types';
import ImageUpload from './imageUpload';

const ImagesUpload = React.memo((props) => {
    const { path, list, onUploaded, onError } = props;
    return list.map((image) => (
        <ImageUpload
            key={image.name}
            path={path}
            image={image}
            onUploaded={onUploaded}
            onError={onError}
        />
    ));
});

ImagesUpload.propTypes = {
    path: PropTypes.string,
    list: PropTypes.array,
    onUploaded: PropTypes.func,
    onError: PropTypes.func,
};

ImagesUpload.defaultProps = {
    path: undefined,
    list: [],
    onUploaded: () => {},
    onError: () => {},
};

export default ImagesUpload;
