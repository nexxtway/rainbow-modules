import React from 'react';
import PropTypes from 'prop-types';

const CornerUpRight = (props) => {
    const { className, style, title } = props;

    return (
        <svg className={className} style={style} width="17px" height="18px" viewBox="0 0 17 18">
            <title>{title}</title>
            <g
                id="modules"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <g
                    id="rainbow-icons-Module"
                    transform="translate(-516.000000, -632.000000)"
                    stroke="currentColor"
                >
                    <g id="corner-up-right" transform="translate(516.000000, 633.000000)">
                        <polyline id="Path" points="11.5 10 16.5 5 11.5 0" />
                        <path
                            d="M0.5,16 L0.5,9 C0.5,7.9391 0.92143,6.9217 1.67157,6.1716 C2.42172,5.42143 3.43913,5 4.5,5 L16.5,5"
                            id="Path"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

CornerUpRight.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

CornerUpRight.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default CornerUpRight;
