import React from 'react';
import PropTypes from 'prop-types';

const UnknownCard = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="50px"
            height="35px"
            viewBox="0 0 50 35"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>unknown</title>
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="rainbow-UniversalPicker-"
                    transform="translate(-322.000000, -122.000000)"
                    fillRule="nonzero"
                >
                    <g id="unknown" transform="translate(322.000000, 122.200000)">
                        <path
                            d="M47.0444336,33.6 L2.95556641,33.6 C1.32324219,33.6 0,32.3105141 0,30.7198532 L0,2.88005166 C0,1.28939073 1.32324219,1.81188398e-13 2.95556641,1.81188398e-13 L47.0444336,1.81188398e-13 C48.6768555,1.81188398e-13 50,1.28948589 50,2.88005166 L50,30.7198532 C50,32.3105141 48.6767578,33.6 47.0444336,33.6 Z"
                            id="Shape"
                            fill="#EBEDF1"
                        />
                        <path
                            d="M15.4545455,6.8 C16.8603612,6.8 18,7.80735931 18,9.05 L18,13.55 C18,14.7926407 16.8603612,15.8 15.4545455,15.8 L6.54545455,15.8 C5.13963882,15.8 4,14.7926407 4,13.55 L4,9.05 C4,7.80735931 5.13963882,6.8 6.54545455,6.8 L15.4545455,6.8 Z"
                            id="Path"
                            fill="#FFFFFF"
                        />
                        <path
                            d="M11,22.8 C12.1045695,22.8 13,23.6954305 13,24.8 C13,25.9045695 12.1045695,26.8 11,26.8 L6,26.8 C4.8954305,26.8 4,25.9045695 4,24.8 C4,23.6954305 4.8954305,22.8 6,22.8 L11,22.8 Z M22,22.8 C23.1045695,22.8 24,23.6954305 24,24.8 C24,25.9045695 23.1045695,26.8 22,26.8 L17,26.8 C15.8954305,26.8 15,25.9045695 15,24.8 C15,23.6954305 15.8954305,22.8 17,22.8 L22,22.8 Z M33,22.8 C34.1045695,22.8 35,23.6954305 35,24.8 C35,25.9045695 34.1045695,26.8 33,26.8 L28,26.8 C26.8954305,26.8 26,25.9045695 26,24.8 C26,23.6954305 26.8954305,22.8 28,22.8 L33,22.8 Z M44,22.8 C45.1045695,22.8 46,23.6954305 46,24.8 C46,25.9045695 45.1045695,26.8 44,26.8 L39,26.8 C37.8954305,26.8 37,25.9045695 37,24.8 C37,23.6954305 37.8954305,22.8 39,22.8 L44,22.8 Z"
                            id="Combined-Shape"
                            fill="#CFD2D7"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

UnknownCard.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

UnknownCard.defaultProps = {
    className: undefined,
    style: undefined,
};

export default UnknownCard;
