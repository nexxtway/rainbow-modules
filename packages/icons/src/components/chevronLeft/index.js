import React from 'react';
import PropTypes from 'prop-types';

const ChevronLeft = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="8px"
            height="14px"
            viewBox="0 0 8 14"
        >
            <g transform="translate(-301.000000, -285.000000)">
                <g transform="translate(-83.000000, 268.000000)">
                    <g transform="translate(368.000000, 3.000000)">
                        <g transform="translate(19.860963, 21.000000) scale(-1, 1) translate(-19.860963, -21.000000) translate(15.860963, 14.000000)">
                            <path d="M0.876459893,13.9508128 C0.671251337,13.9508128 0.465219251,13.8726524 0.308,13.7150588 C-0.00598930481,13.4010695 -0.00598930481,12.8929519 0.308,12.5789626 L5.87445989,7.01287701 L0.308,1.44641711 C-0.00598930481,1.13242781 -0.00598930481,0.623860963 0.308,0.310320856 C0.621989305,-0.0036684492 1.13055615,-0.0036684492 1.44447059,0.310320856 L7.57856684,6.44441711 C7.89255615,6.75840642 7.89255615,7.26697326 7.57856684,7.58051337 L1.44447059,13.714984 C1.2877754,13.8722032 1.08211765,13.9508128 0.876459893,13.9508128 Z" />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

ChevronLeft.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

ChevronLeft.defaultProps = {
    className: undefined,
    style: undefined,
};

export default ChevronLeft;
