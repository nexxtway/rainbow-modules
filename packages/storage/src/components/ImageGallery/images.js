import React from 'react';
import PropTypes from 'prop-types';
import Image from './image';

const Images = (props) => {
    const { list, onSelect, onError } = props;

    return list.map((imageRef) => (
        <Image key={imageRef.name} imageRef={imageRef} onSelect={onSelect} onError={onError} />
    ));
};

Images.propTypes = {
    list: PropTypes.array,
    onSelect: PropTypes.func,
    onError: PropTypes.func,
};

Images.defaultProps = {
    list: [],
    onSelect: () => {},
    onError: () => {},
};

export default Images;
