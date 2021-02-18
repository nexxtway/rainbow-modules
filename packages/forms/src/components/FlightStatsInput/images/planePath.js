import React from 'react';
import PropTypes from 'prop-types';

const PlanePath = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="130px"
            height="28px"
            viewBox="0 0 144 31"
        >
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="FlightStatsInput-loading"
                    transform="translate(-475.000000, -494.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-64" transform="translate(410.000000, 152.000000)">
                        <g id="Group-50" transform="translate(0.000000, 81.000000)">
                            <path
                                d="M132.894737,261.029412 L140.789474,273.660991 L149.473684,273.660991 C150.736842,273.660991 151.842105,274.766254 151.842105,276.029412 C151.842105,277.29257 150.736842,278.397833 149.473684,278.397833 L149.473684,278.397833 L140.789474,278.397833 L132.894737,291.029412 L129.736842,291.029412 L133.684211,278.397833 L125,278.397833 L122.631579,281.555728 L120.263158,281.555728 L121.842105,276.029412 L120.263158,270.503096 L122.631579,270.503096 L125,273.660991 L133.684211,273.660991 L129.736842,261.029412 L132.894737,261.029412 Z M76.8421053,274.404025 C78.1501481,274.404025 79.2105263,275.464403 79.2105263,276.772446 C79.2105263,278.080489 78.1501481,279.140867 76.8421053,279.140867 C75.5340624,279.140867 74.4736842,278.080489 74.4736842,276.772446 C74.4736842,275.464403 75.5340624,274.404025 76.8421053,274.404025 Z M196.842105,274.404025 C198.150148,274.404025 199.210526,275.464403 199.210526,276.772446 C199.210526,278.080489 198.150148,279.140867 196.842105,279.140867 C195.534062,279.140867 194.473684,278.080489 194.473684,276.772446 C194.473684,275.464403 195.534062,274.404025 196.842105,274.404025 Z M106.052632,275.193498 C106.92466,275.193498 107.631579,275.900417 107.631579,276.772446 C107.631579,277.644474 106.92466,278.351393 106.052632,278.351393 C105.180603,278.351393 104.473684,277.644474 104.473684,276.772446 C104.473684,275.900417 105.180603,275.193498 106.052632,275.193498 Z M96.5789474,275.193498 C97.4509759,275.193498 98.1578947,275.900417 98.1578947,276.772446 C98.1578947,277.644474 97.4509759,278.351393 96.5789474,278.351393 C95.7069188,278.351393 95,277.644474 95,276.772446 C95,275.900417 95.7069188,275.193498 96.5789474,275.193498 Z M87.1052632,275.193498 C87.9772917,275.193498 88.6842105,275.900417 88.6842105,276.772446 C88.6842105,277.644474 87.9772917,278.351393 87.1052632,278.351393 C86.2332346,278.351393 85.5263158,277.644474 85.5263158,276.772446 C85.5263158,275.900417 86.2332346,275.193498 87.1052632,275.193498 Z M66.5789474,275.193498 C67.4509759,275.193498 68.1578947,275.900417 68.1578947,276.772446 C68.1578947,277.644474 67.4509759,278.351393 66.5789474,278.351393 C65.7069188,278.351393 65,277.644474 65,276.772446 C65,275.900417 65.7069188,275.193498 66.5789474,275.193498 Z M167.631579,275.193498 C168.503607,275.193498 169.210526,275.900417 169.210526,276.772446 C169.210526,277.644474 168.503607,278.351393 167.631579,278.351393 C166.75955,278.351393 166.052632,277.644474 166.052632,276.772446 C166.052632,275.900417 166.75955,275.193498 167.631579,275.193498 Z M177.105263,275.193498 C177.977292,275.193498 178.684211,275.900417 178.684211,276.772446 C178.684211,277.644474 177.977292,278.351393 177.105263,278.351393 C176.233235,278.351393 175.526316,277.644474 175.526316,276.772446 C175.526316,275.900417 176.233235,275.193498 177.105263,275.193498 Z M186.578947,275.193498 C187.450976,275.193498 188.157895,275.900417 188.157895,276.772446 C188.157895,277.644474 187.450976,278.351393 186.578947,278.351393 C185.706919,278.351393 185,277.644474 185,276.772446 C185,275.900417 185.706919,275.193498 186.578947,275.193498 Z M207.105263,275.193498 C207.977292,275.193498 208.684211,275.900417 208.684211,276.772446 C208.684211,277.644474 207.977292,278.351393 207.105263,278.351393 C206.233235,278.351393 205.526316,277.644474 205.526316,276.772446 C205.526316,275.900417 206.233235,275.193498 207.105263,275.193498 Z"
                                id="planePath"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

PlanePath.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
PlanePath.defaultProps = {
    className: undefined,
    style: undefined,
};

export default PlanePath;
