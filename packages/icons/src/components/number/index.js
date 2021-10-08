import React from 'react';
import PropTypes from 'prop-types';

const Number = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>{title}</title>
            <g id="install-functions" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="install-function/runtime-section-memory-dropdown-open"
                    transform="translate(-643.000000, -1706.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-51" transform="translate(631.000000, 1317.000000)">
                        <g id="Group-50" transform="translate(1.000000, 358.000000)">
                            <g id="Group-48" transform="translate(0.000000, 21.000000)">
                                <g id="hash" transform="translate(11.000000, 10.000000)">
                                    <path
                                        d="M17.7847807,2.13486842 C20.5294298,4.94188596 20.8413158,15.6085965 17.7847807,18.1036842 C14.7282456,20.5988158 5.18438596,20.5988158 2.1902193,18.1036842 C-0.866315789,15.6085526 -0.554429825,4.94188596 2.1902193,2.13486842 C4.93486842,-0.672149123 15.0401316,-0.672149123 17.7847807,2.13486842 Z M9.86276316,3.75675439 L7.74188596,3.75675439 L7.24285088,6.68850877 L5.30912281,6.68850877 L4.93486842,8.74697368 L6.86859649,8.74697368 L6.43192982,11.4292544 L4.68535088,11.4292544 L4.24868421,13.4877193 L5.99526316,13.4877193 L5.55859649,16.2323684 L7.67947368,16.2323684 L8.17850877,13.4877193 L10.4864912,13.4877193 L10.0498246,16.2323684 L12.1707018,16.2323684 L12.6697368,13.4877193 L14.7282018,13.4877193 L15.1648684,11.4292544 L13.0439912,11.4292544 L13.4806579,8.74697368 L15.2896491,8.74697368 L15.7263158,6.68850877 L13.7302193,6.68850877 L14.2916228,3.75675439 L12.1707456,3.75675439 L11.6717105,6.68850877 L9.36372807,6.68850877 L9.86276316,3.75675439 Z M11.3598246,8.74697368 L10.8607895,11.4292544 L8.55280702,11.4292544 L9.05184211,8.74697368 L11.3598246,8.74697368 Z"
                                        id="number"
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Number.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

Number.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Number;
