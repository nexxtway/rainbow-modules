import React from 'react';
import PropTypes from 'prop-types';

const Mastercard = (props) => {
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
            <title>mastercard</title>
            <defs>
                <path
                    d="M45.79875,33.6 L2.87730634,33.6 C1.28820423,33.6 1.59872116e-13,32.3105141 1.59872116e-13,30.7198532 L1.59872116e-13,2.88005166 C1.59872116e-13,1.28939073 1.28820423,1.81188398e-13 2.87730634,1.81188398e-13 L45.79875,1.81188398e-13 C47.3879472,1.81188398e-13 48.6760563,1.28948589 48.6760563,2.88005166 L48.6760563,30.7198532 C48.6760563,32.3105141 47.3878521,33.6 45.79875,33.6 Z"
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
                        values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.15 0"
                        type="matrix"
                        in="shadowBlurOuter1"
                    />
                </filter>
            </defs>
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="rainbow-UniversalPicker--Copy"
                    transform="translate(-453.000000, -277.000000)"
                    fillRule="nonzero"
                >
                    <g id="mastercard" transform="translate(455.000000, 279.033333)">
                        <g id="Shape">
                            <use
                                fill="black"
                                fillOpacity="1"
                                filter="url(#filter-2)"
                                xlinkHref="#path-1"
                            />
                            <use
                                strokeOpacity="0.501857517"
                                stroke="#E7EAEE"
                                strokeWidth="0.5"
                                fill="#FFFFFF"
                                xlinkHref="#path-1"
                            />
                        </g>
                        <g transform="translate(9.000000, 6.966667)">
                            <path
                                d="M9.97940339,0 C4.47679927,0 0,4.47632576 0,9.97845642 C0,15.4805872 4.47679927,19.9569128 9.97940339,19.9569128 C15.4820076,19.9569128 19.9588068,15.4805872 19.9588068,9.97845642 C19.9588068,4.47632576 15.4820076,0 9.97940339,0 Z"
                                id="Path"
                                fill="#EE0005"
                            />
                            <path
                                d="M21.0508996,0 C15.5482955,0 11.0714962,4.47632576 11.0714962,9.97845642 C11.0714962,15.4805872 15.5482955,19.9569128 21.0508996,19.9569128 C26.5535038,19.9569128 31.030303,15.4805872 31.030303,9.97845642 C31.030303,4.47632576 26.5535038,0 21.0508996,0 L21.0508996,0 Z"
                                id="Path"
                                fill="#F9A000"
                            />
                            <path
                                d="M14.0492424,12.3439867 C14.5513731,12.3439867 14.9583333,12.750947 14.9583333,13.2530776 C14.9583333,13.7552084 14.5513731,14.1621685 14.0492424,14.1621685 L14.0492424,14.1621685 L11.9921875,14.1621685 C11.7239583,13.5838068 11.5097064,12.9756155 11.3555872,12.3439867 L11.3555872,12.3439867 Z M16.5501894,9.38565339 C17.0520833,9.38565339 17.4592803,9.79261364 17.4592803,10.2947443 C17.4592803,10.796875 17.0520833,11.2038352 16.5501894,11.2038352 L16.5501894,11.2038352 L11.1467803,11.2038352 C11.0973012,10.8020833 11.0714962,10.3932292 11.0714962,9.97845642 C11.0714962,9.77935606 11.0778882,9.58191285 11.0894886,9.38565339 L11.0894886,9.38565339 Z M14.0492424,6.42732006 C14.5513731,6.42732006 14.9583333,6.83451703 14.9583333,7.33641097 C14.9583333,7.8385417 14.5513731,8.24550188 14.0492424,8.24550188 L14.0492424,8.24550188 L11.2223012,8.24550188 C11.3328599,7.61742424 11.5026042,7.0094697 11.7251421,6.42732006 L11.7251421,6.42732006 Z"
                                id="Combined-Shape"
                                fill="#FF6300"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Mastercard.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Mastercard.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Mastercard;
