import React from 'react';
import PropTypes from 'prop-types';

const CubeFilled = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="606px"
            height="605px"
            viewBox="0 0 606 605"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M26.535,182.036 L279.741,290.277 C286.738,293.268 291.283,300.136 291.301,307.745 L291.959055,585.887 C291.991,599.574 278.009,608.826 265.425,603.447 L12.219,495.206 C5.222,492.215 0.676,485.347 0.659,477.737 L0.000945174701,199.595 C-0.031,185.909 13.951,176.657 26.535,182.036 Z M586.26,179.130942 C596.303,179.106 605.316,187.185 605.341,198.153 L605.999054,476.295 C606.017,483.904 601.504,490.795 594.521,493.818 L341.831,603.256 C339.338,604.335 336.784,604.839 334.297,604.846049 C324.253,604.869 315.239,596.791 315.214,585.824 L314.55594,307.681 C314.537,300.072 319.051,293.181 326.035,290.158 L578.725,180.721 C581.218,179.64 583.771,179.137 586.26,179.130942 Z M301.083,-4.95411186e-05 C303.715,-0.006 306.349,0.533 308.811,1.618 L575.214,119.057 C590.326,125.72 590.377,147.145 575.296,153.878 L309.451,272.577 C306.995,273.674 304.363,274.225 301.73,274.23205 C299.098,274.238 296.464,273.699 294.002,272.614 L27.6,155.175 C12.487,148.513 12.437,127.087 27.517,120.354 L293.361,1.655 C295.818,0.558 298.449,0.006 301.083,-4.95411186e-05 Z"
                    id="cube"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

CubeFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
CubeFilled.defaultProps = {
    className: undefined,
    style: undefined,
};

export default CubeFilled;
