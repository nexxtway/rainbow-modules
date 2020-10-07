import React from 'react';
import PropTypes from 'prop-types';
import Image from './image';

const Images = (props) => {
    const { list, onSelect, onError, allowDelete, onDelete } = props;
    return list.map((imageRef) => (
        <Image
            key={imageRef.name}
            imageRef={imageRef}
            onSelect={onSelect}
            onError={onError}
            onDelete={onDelete}
            allowDelete={allowDelete}
        />
    ));
};

Images.propTypes = {
    list: PropTypes.array,
    onSelect: PropTypes.func,
    onError: PropTypes.func,
    onDelete: PropTypes.func,
};

Images.defaultProps = {
    list: [],
    onSelect: () => {},
    onError: () => {},
    onDelete: () => {},
};

export default Images;
