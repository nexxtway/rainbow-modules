import React from 'react';
import PropTypes from 'prop-types';

const NewCard = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="52px"
            height="37px"
            viewBox="0 0 52 37"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>add new</title>
            <defs>
                <path
                    d="M45.79875,33.6 L2.87730634,33.6 C1.28820423,33.6 1.66977543e-13,32.3105141 1.66977543e-13,30.7198532 L1.66977543e-13,2.88005166 C1.66977543e-13,1.28939073 1.28820423,1.81188398e-13 2.87730634,1.81188398e-13 L45.79875,1.81188398e-13 C47.3879472,1.81188398e-13 48.6760563,1.28948589 48.6760563,2.88005166 L48.6760563,30.7198532 C48.6760563,32.3105141 47.3878521,33.6 45.79875,33.6 Z"
                    id="path-1"
                />
                <filter
                    x="-3.6%"
                    y="-5.2%"
                    width="107.2%"
                    height="110.4%"
                    filterUnits="objectBoundingBox"
                    id="filter-2"
                >
                    <feMorphology
                        radius="0.25"
                        operator="dilate"
                        in="SourceAlpha"
                        result="shadowSpreadOuter1"
                    />
                    <feOffset dx="0" dy="0" in="shadowSpreadOuter1" result="shadowOffsetOuter1" />
                    <feGaussianBlur
                        stdDeviation="0.5"
                        in="shadowOffsetOuter1"
                        result="shadowBlurOuter1"
                    />
                    <feComposite
                        in="shadowBlurOuter1"
                        in2="SourceAlpha"
                        operator="out"
                        result="shadowBlurOuter1"
                    />
                    <feColorMatrix
                        values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.174579327 0"
                        type="matrix"
                        in="shadowBlurOuter1"
                    />
                </filter>
            </defs>
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="rainbow-UniversalPicker--Copy"
                    transform="translate(-453.000000, -73.000000)"
                    fillRule="nonzero"
                >
                    <g id="add-new" transform="translate(455.000000, 75.200000)">
                        <g id="Shape">
                            <use
                                fill="black"
                                fillOpacity="1"
                                filter="url(#filter-2)"
                                xlinkHref="#path-1"
                            />
                            <use
                                stroke="#F6F7F9"
                                strokeWidth="0.5"
                                fill="#FFFFFF"
                                xlinkHref="#path-1"
                            />
                        </g>
                        <path
                            d="M29.1428571,15.3178571 L24.8571429,15.3178571 L24.8571429,11.0321429 C24.8571429,10.559 24.4731429,10.175 24,10.175 C23.5268571,10.175 23.1428571,10.559 23.1428571,11.0321429 L23.1428571,15.3178571 L18.8571429,15.3178571 C18.384,15.3178571 18,15.7018571 18,16.175 C18,16.6481429 18.384,17.0321429 18.8571429,17.0321429 L23.1428571,17.0321429 L23.1428571,21.3178571 C23.1428571,21.791 23.5268571,22.175 24,22.175 C24.4731429,22.175 24.8571429,21.791 24.8571429,21.3178571 L24.8571429,17.0321429 L29.1428571,17.0321429 C29.616,17.0321429 30,16.6481429 30,16.175 C30,15.7018571 29.616,15.3178571 29.1428571,15.3178571 Z"
                            id="Path"
                            fill="currentColor"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

NewCard.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

NewCard.defaultProps = {
    className: undefined,
    style: undefined,
};

export default NewCard;
