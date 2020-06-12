import React from 'react';
import PropTypes from 'prop-types';

const Trash = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            viewBox="0 0 100 100"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="components" fill="none" fillRule="evenodd">
                <path d="M0 0H100V100H0z" />
                <path
                    id="trash"
                    fill="currentColor"
                    fillRule="nonzero"
                    d="M64.23 23.205v-2.82c0-3.116-2.525-5.641-5.64-5.641H44.487c-3.1.038-5.603 2.541-5.64 5.64v2.821H24.743v2.82h2.82l2.849 53.692c.243 3.096 2.804 5.496 5.909 5.54h30.433c3.105-.044 5.666-2.444 5.91-5.54l2.848-53.691h2.82v-2.82H64.231zm-5.64-5.64c1.557 0 2.82 1.262 2.82 2.82v2.82H41.667v-2.82c0-1.558 1.262-2.82 2.82-2.82H58.59zM69.858 79.53c-.15 1.614-1.482 2.862-3.103 2.905H36.322c-1.621-.043-2.954-1.29-3.103-2.905l-2.834-53.505h42.307L69.858 79.53zm-16.91-2.736V31.667h-2.82v45.128h2.82zm-8.46 0l-2.821-45.128h-2.82l2.82 45.128h2.82zm19.729-45.128H61.34l-2.75 45.128h2.82l2.807-45.128z"
                />
            </g>
        </svg>
    );
};

Trash.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Trash.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Trash;
