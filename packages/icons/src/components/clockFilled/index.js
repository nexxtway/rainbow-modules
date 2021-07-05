import React from 'react';
import PropTypes from 'prop-types';

const ClockFilled = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="18px"
            height="18px"
            viewBox="0 0 18 18"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>{title}</title>
            <g id="Variant-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M9,0 C13.9625391,0 18,4.03741973 18,8.99975301 C18,13.9625391 13.9625391,18 9,18 C4.03746089,18 0,13.9625391 0,9 C0,4.03746089 4.03746089,0 9,0 Z M8.48719743,3.61538778 C8.06232505,3.61538778 7.717973,3.95973983 7.717973,4.38461222 L7.717973,9.76922444 C7.717973,10.1940968 8.06232505,10.5384489 8.48719743,10.5384489 L12.5897415,10.5384489 C13.0146139,10.5384489 13.3589659,10.1940968 13.3589659,9.76922444 C13.3589659,9.34435205 13.0146139,9 12.5897415,9 L9.25642187,9 L9.25642187,4.38461222 C9.25642187,3.95973983 8.91206982,3.61538778 8.48719743,3.61538778 Z"
                    id="clock"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

ClockFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
ClockFilled.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default ClockFilled;
