import React from 'react';
import PropTypes from 'prop-types';

const KeyFilled = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="40px"
            height="22px"
            viewBox="0 0 40 22"
        >
            <title>{title}</title>
            <g id="secrets" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="secrets/api-disabled"
                    transform="translate(-33.000000, -509.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <path
                        d="M54.1818048,516.332308 C52.6818038,512.095913 48.6545566,509.059604 43.9090987,509.059604 C37.8818216,509.059604 33,513.941426 33,519.968703 C33,525.99598 37.8818216,530.877802 43.9090987,530.877802 C48.6545566,530.877802 52.6818038,527.841407 54.1818048,523.605098 L62.0909013,523.605098 L62.0909013,530.877802 L69.3636054,530.877802 L69.3636054,523.605098 L73,523.605098 L73,516.332308 L54.1818048,516.332308 Z M43.9090987,523.605012 C41.9000347,523.605012 40.272704,521.977767 40.272704,519.968618 C40.272704,517.959469 41.9000347,516.332308 43.9090987,516.332308 C45.9181626,516.332308 47.5454933,517.959554 47.5454933,519.968703 C47.5454933,521.977852 45.9181626,523.605012 43.9090987,523.605012 Z"
                        id="keyFilled"
                    />
                </g>
            </g>
        </svg>
    );
};

KeyFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

KeyFilled.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default KeyFilled;
