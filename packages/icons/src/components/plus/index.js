import React from 'react';
import PropTypes from 'prop-types';

const Plus = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="14px"
            height="14px"
            viewBox="0 0 14 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>{title}</title>
            <g id="Variant-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M13.0625,6.0625 L8.125,6.0625 C8.02145385,6.0625 7.9375,5.97854615 7.9375,5.875 L7.9375,0.9375 C7.9375,0.419769281 7.51773072,0 7,0 C6.48226928,0 6.0625,0.419769281 6.0625,0.9375 L6.0625,5.875 C6.0625,5.97854615 5.97854615,6.0625 5.875,6.0625 L0.9375,6.0625 C0.419769281,6.0625 0,6.48226928 0,7 C0,7.51773072 0.419769281,7.9375 0.9375,7.9375 L5.875,7.9375 C5.97854615,7.9375 6.0625,8.02145385 6.0625,8.125 L6.0625,13.0625 C6.0625,13.5802307 6.48226928,14 7,14 C7.51773072,14 7.9375,13.5802307 7.9375,13.0625 L7.9375,8.125 C7.9375,8.02145385 8.02145385,7.9375 8.125,7.9375 L13.0625,7.9375 C13.5802307,7.9375 14,7.51773072 14,7 C14,6.48226928 13.5802307,6.0625 13.0625,6.0625 Z"
                    id="Path"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

Plus.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
Plus.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Plus;
