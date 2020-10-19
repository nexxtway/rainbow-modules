import React from 'react';
import PropTypes from 'prop-types';

const DinersClub = (props) => {
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
            <title>diners-club</title>
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
                    transform="translate(-453.000000, -414.000000)"
                    fillRule="nonzero"
                >
                    <g id="diners-club" transform="translate(455.000000, 416.033333)">
                        <g id="Shape-Copy">
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
                        <g id="Group-2" transform="translate(10.016500, 6.836659)">
                            <path
                                d="M10.1367541,0 L18.1911557,0 C23.6556853,-0.00222546688 28.6466893,4.12102062 28.6466893,10.0869959 C28.6466893,15.5414742 23.6579189,20.0265652 18.1911557,19.9997619 L10.1367541,19.9997619 C4.60521622,20.0265652 0.052,15.5437078 0.052,10.0869959 C0.052,4.12102062 4.60521622,-0.00334227243 10.1367541,0 Z"
                                id="Path"
                                fill="#0068A9"
                            />
                            <path
                                d="M10.0269922,0.844579763 C5.05821936,0.845677592 1.03138354,4.87470906 1.03028571,9.84457976 C1.03138354,14.8133526 5.05821936,18.8412863 10.0269922,18.8445798 C14.9968629,18.8423841 19.0236987,14.8133526 19.0236987,9.84457976 C19.0236987,4.87251341 14.9968629,0.844579763 10.0269922,0.844579763 Z M7.98393295,15.1646578 C5.84536256,14.3412863 4.32926107,12.2718791 4.32486976,9.84238411 C4.32926107,7.41288911 5.84426473,5.34238411 7.98393295,4.51901255 L7.98393295,15.1646578 L7.98393295,15.1646578 Z M12.066758,15.170147 L12.066758,4.52120821 C14.2053284,5.34238411 15.7258212,7.41508476 15.7302125,9.84567759 C15.7258212,12.2773682 14.2064262,14.3467754 12.066758,15.170147 Z"
                                id="Shape"
                                fill="#FFFFFF"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

DinersClub.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

DinersClub.defaultProps = {
    className: undefined,
    style: undefined,
};

export default DinersClub;
