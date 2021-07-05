import React from 'react';
import PropTypes from 'prop-types';

const Star = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            width="13px"
            height="12px"
            viewBox="0 0 13 12"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>{title}</title>
            <g id="Variant-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="dispatch/new-ride-driver-selection"
                    transform="translate(-114.000000, -1355.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-98" transform="translate(71.000000, 1319.000000)">
                        <path
                            d="M55.4561346,40.5341637 C55.3739049,40.2812811 55.1496074,40.1022433 54.8852907,40.0783271 L51.2801418,39.7510281 L49.8553666,36.4153411 C49.7501736,36.1702717 49.5108213,36.012101 49.2444084,36.012101 C48.9779956,36.012101 48.738548,36.1702717 48.6340219,36.4153411 L47.2092468,39.7510281 L43.6035261,40.0783271 C43.3392095,40.1027197 43.1153884,40.2817575 43.0326823,40.5341637 C42.9504525,40.7870463 43.0263935,41.0644168 43.2262985,41.2397385 L45.9515037,43.6293551 L45.1479774,47.1683772 C45.0891875,47.4285966 45.190188,47.6976774 45.4061006,47.8537519 C45.522156,47.9380778 45.6585067,47.9801932 45.7953339,47.9801932 C45.9129139,47.9801932 46.0305891,47.9489402 46.1356868,47.886053 L49.2444084,46.0272612 L52.3525583,47.886053 C52.5805719,48.0223085 52.8672801,48.0098264 53.0827163,47.8537519 C53.2986288,47.6976774 53.3996294,47.4285966 53.3408395,47.1683772 L52.5373132,43.6293551 L55.2625184,41.2397385 C55.462328,41.0644168 55.5383643,40.787618 55.4561346,40.5341637 Z"
                            id="star"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

Star.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
Star.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Star;
