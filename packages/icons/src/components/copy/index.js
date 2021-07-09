import React from 'react';
import PropTypes from 'prop-types';

const CopyToClipboard = (props) => {
    const { className, style, title } = props;

    return (
        <svg
            className={className}
            style={style}
            width="14px"
            height="16px"
            viewBox="0 0 14 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>{title}</title>
            <g id="new-layout" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="authentication-search/tipyng"
                    transform="translate(-1350.000000, -257.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-4" transform="translate(281.023824, 220.000000)">
                        <path
                            d="M1077.5642,52.75 L1071.51139,52.75 C1070.11343,52.75 1068.97618,51.6127448 1068.97618,50.2147887 L1068.97618,41.6267606 C1068.97618,40.2288045 1070.11343,39.0915493 1071.51139,39.0915493 L1077.5642,39.0915493 C1078.96216,39.0915493 1080.09941,40.2288045 1080.09941,41.6267606 L1080.09941,50.2147887 C1080.09941,51.6127448 1078.96216,52.75 1077.5642,52.75 Z M1071.51139,40.3591549 C1070.81247,40.3591549 1070.24378,40.9278444 1070.24378,41.6267606 L1070.24378,50.2147887 C1070.24378,50.9137049 1070.81247,51.4823944 1071.51139,51.4823944 L1077.5642,51.4823944 C1078.26312,51.4823944 1078.83181,50.9137049 1078.83181,50.2147887 L1078.83181,41.6267606 C1078.83181,40.9278444 1078.26312,40.3591549 1077.5642,40.3591549 L1071.51139,40.3591549 Z M1082.28603,49.1056338 L1082.28603,39.5352113 C1082.28603,38.1372552 1081.14878,37 1079.75082,37 L1072.71561,37 C1072.36554,37 1072.08181,37.2837258 1072.08181,37.6338028 C1072.08181,37.9838798 1072.36554,38.2676056 1072.71561,38.2676056 L1079.75082,38.2676056 C1080.44974,38.2676056 1081.01843,38.8362951 1081.01843,39.5352113 L1081.01843,49.1056338 C1081.01843,49.4557108 1081.30215,49.7394366 1081.65223,49.7394366 C1082.00231,49.7394366 1082.28603,49.4557108 1082.28603,49.1056338 Z"
                            id="copy"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

CopyToClipboard.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

CopyToClipboard.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default CopyToClipboard;
