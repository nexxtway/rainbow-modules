import React from 'react';
import PropTypes from 'prop-types';

const Minus = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="12px"
            height="2px"
            viewBox="0 0 12 2"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="Variant-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M11.0625,0.0625 L0.9375,0.0625 C0.419769281,0.0625 0,0.482269281 0,1 C0,1.51773072 0.419769281,1.9375 0.9375,1.9375 L11.0625,1.9375 C11.5802307,1.9375 12,1.51773072 12,1 C12,0.482269281 11.5802307,0.0625 11.0625,0.0625 Z"
                    id="minus"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

Minus.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Minus.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Minus;
