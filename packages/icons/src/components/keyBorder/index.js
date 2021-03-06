import React from 'react';
import PropTypes from 'prop-types';

const KeyBorder = (props) => {
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
            <g id="marketplace" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    transform="translate(-33.000000, -509.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                    id="Group-18"
                >
                    <g transform="translate(33.000000, 509.059604)">
                        <path
                            d="M10.9090987,2.13162821e-14 C15.5513944,2.13162821e-14 19.5063666,2.90573047 21.0804142,6.99813771 L21.1818048,7.27270403 L40,7.27270403 L40,14.5454933 L36.3636054,14.5454933 L36.3636054,21.8181973 L29.0909013,21.8181973 L29.0909013,14.5454933 L21.1818048,14.5454933 C19.6818038,18.7818031 15.6545566,21.8181973 10.9090987,21.8181973 C4.88182165,21.8181973 0,16.9363757 0,10.9090987 C0,4.88182165 4.88182165,2.13162821e-14 10.9090987,2.13162821e-14 Z M10.9090987,2 C5.98639115,2 2,5.98639115 2,10.9090987 C2,15.8318062 5.98639115,19.8181973 10.9090987,19.8181973 C14.6124595,19.8181973 17.8779957,17.530758 19.1987638,14.140857 L19.2965001,13.8779408 L19.7682958,12.5454933 L31.0909013,12.5454933 L31.09,19.818 L34.363,19.818 L34.3636054,12.5454933 L38,12.545 L38,9.272 L19.7682863,9.27270403 L19.2964959,7.94024455 C18.0451809,4.40620399 14.7074604,2 10.9090987,2 Z M10.9090987,7.27270403 C12.9181626,7.27270403 14.5454933,8.8999495 14.5454933,10.9090987 C14.5454933,12.9182478 12.9181626,14.5454081 10.9090987,14.5454081 C8.90003473,14.5454081 7.27270403,12.9181626 7.27270403,10.9090134 C7.27270403,8.89986428 8.90003473,7.27270403 10.9090987,7.27270403 Z"
                            id="key-border"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

KeyBorder.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

KeyBorder.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default KeyBorder;
