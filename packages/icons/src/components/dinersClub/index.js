import React from 'react';
import PropTypes from 'prop-types';

const DinersClub = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            width="51px"
            height="36px"
            viewBox="0 0 51 36"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>{title}</title>
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="rainbow-UniversalPicker-"
                    transform="translate(-359.000000, -427.000000)"
                    fillRule="nonzero"
                >
                    <g id="dinners" transform="translate(359.750000, 427.950000)">
                        <path
                            d="M46.04875,33.85 L3.12730634,33.85 C1.53820423,33.85 0.25,32.5605141 0.25,30.9698532 L0.25,3.13005166 C0.25,1.53939073 1.53820423,0.25 3.12730634,0.25 L46.04875,0.25 C47.6379472,0.25 48.9260563,1.53948589 48.9260563,3.13005166 L48.9260563,30.9698532 C48.9260563,32.5605141 47.6378521,33.85 46.04875,33.85 Z"
                            id="Shape"
                            fill="#FBFBFC"
                        />
                        <path
                            d="M46.04875,1.88293825e-13 L3.12730634,1.88293825e-13 C1.40006551,1.88293825e-13 1.70530257e-13,1.40138703 1.70530257e-13,3.13005166 L1.70530257e-13,30.9698532 C1.70530257e-13,32.6985334 1.40008109,34.1 3.12730634,34.1 L46.04875,34.1 C47.7759753,34.1 49.1760563,32.6985334 49.1760563,30.9698532 L49.1760563,3.13005166 C49.1760563,1.40141901 47.7760228,1.88293825e-13 46.04875,1.88293825e-13 Z M3.12730634,0.5 L46.04875,0.5 C47.4997696,0.5 48.6760563,1.67745074 48.6760563,3.13005166 L48.6760563,30.9698532 C48.6760563,32.4225017 47.4997221,33.6 46.04875,33.6 L3.12730634,33.6 C1.67633423,33.6 0.5,32.4225017 0.5,30.9698532 L0.5,3.13005166 C0.5,1.67742386 1.67631354,0.5 3.12730634,0.5 Z"
                            id="border"
                            fill="#EDEFF2"
                        />
                        <g id="Group-2" transform="translate(10.266500, 7.919993)">
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
    title: PropTypes.string,
};

DinersClub.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default DinersClub;
