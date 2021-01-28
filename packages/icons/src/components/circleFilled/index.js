import React from 'react';
import PropTypes from 'prop-types';

const CircleFilled = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <circle cx="8" cy="8" r="8" />
        </svg>
    );
};

CircleFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
CircleFilled.defaultProps = {
    className: undefined,
    style: undefined,
};

export default CircleFilled;
