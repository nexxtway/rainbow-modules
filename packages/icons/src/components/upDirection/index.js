import React from 'react';
import PropTypes from 'prop-types';

const UpDirection = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            width="12px"
            height="16px"
            viewBox="0 0 12 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>{title}</title>
            <g
                id="landing-page-pricing"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <g
                    id="pricing-inside-the-app"
                    transform="translate(-32.000000, -568.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-19" transform="translate(6.000000, 0.000000)">
                        <path
                            d="M38.6000021,575.399998 L26.6323983,575.399998 L31.2139998,571.034397 C31.4536998,570.805797 31.4629998,570.425996 31.2343998,570.185996 C31.0057997,569.946596 30.6262996,569.936696 30.3859995,570.165596 L25.1524979,575.153098 C24.9250978,575.380498 24.7999978,575.681398 24.7999978,576 C24.7999978,576.318598 24.9250978,576.618898 25.1629979,576.857398 L30.3859995,581.8344 C30.5020995,581.9451 30.6511996,582 30.7999978,582 C30.9583997,582 31.1164997,581.9376 31.2343998,581.814 C31.4629998,581.574 31.4536998,581.1945 31.2139998,580.9656 L26.6116983,576.599998 L38.6000021,576.599998 C38.9312022,576.599998 39.2000022,576.331198 39.2000022,576 C39.2000022,575.668798 38.9312022,575.399998 38.6000021,575.399998 Z"
                            id="up"
                            transform="translate(32.000000, 576.000000) rotate(-270.000000) translate(-32.000000, -576.000000) "
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

UpDirection.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
UpDirection.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default UpDirection;
