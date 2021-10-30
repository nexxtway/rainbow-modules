import React from 'react';
import PropTypes from 'prop-types';

const ArrowLink = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>{title}</title>
            <g id="billing" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="billing/invoices"
                    transform="translate(-1321.000000, -386.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <path
                        d="M1330,389.25 C1330.41421,389.25 1330.75,389.585786 1330.75,390 C1330.75,390.379696 1330.46785,390.693491 1330.10177,390.743153 L1330,390.75 L1324,390.75 C1323.35279,390.75 1322.82047,391.241875 1322.75645,391.872195 L1322.75,392 L1322.75,403 C1322.75,403.647209 1323.24187,404.179534 1323.87219,404.243546 L1324,404.25 L1335,404.25 C1335.64721,404.25 1336.17953,403.758125 1336.24355,403.127805 L1336.25,403 L1336.25,397 C1336.25,396.585786 1336.58579,396.25 1337,396.25 C1337.3797,396.25 1337.69349,396.532154 1337.74315,396.898229 L1337.75,397 L1337.75,403 C1337.75,404.462532 1336.6083,405.658404 1335.16752,405.744981 L1335,405.75 L1324,405.75 C1322.53747,405.75 1321.3416,404.608295 1321.25502,403.167522 L1321.25,403 L1321.25,392 C1321.25,390.537468 1322.3917,389.341596 1323.83248,389.255019 L1324,389.25 L1330,389.25 Z M1340,386.25 L1340.01745,386.250202 C1340.03747,386.250665 1340.05747,386.251924 1340.0774,386.253981 L1340,386.25 C1340.04685,386.25 1340.09269,386.254295 1340.13716,386.262512 C1340.14803,386.264576 1340.15973,386.267015 1340.17137,386.269735 C1340.19483,386.275171 1340.21728,386.281579 1340.23928,386.28898 C1340.24909,386.292303 1340.25946,386.296028 1340.26975,386.299989 C1340.28909,386.30745 1340.30751,386.315445 1340.32553,386.32414 C1340.33999,386.331058 1340.35462,386.338702 1340.36905,386.346861 C1340.38651,386.356813 1340.40366,386.367461 1340.42033,386.378763 C1340.43066,386.385685 1340.44113,386.393176 1340.45144,386.400968 C1340.5082,386.443902 1340.55853,386.494472 1340.601,386.551263 L1340.53033,386.46967 C1340.56738,386.506723 1340.59975,386.546689 1340.62743,386.58883 C1340.64059,386.608985 1340.65297,386.629972 1340.66433,386.651582 C1340.66916,386.660704 1340.67352,386.669434 1340.67769,386.67823 C1340.69044,386.705018 1340.70195,386.733478 1340.7117,386.76274 C1340.71396,386.769683 1340.71588,386.775754 1340.71773,386.781844 C1340.72908,386.818934 1340.73771,386.858077 1340.74315,386.898229 L1340.75,387 L1340.75,393 C1340.75,393.414214 1340.41421,393.75 1340,393.75 C1339.6203,393.75 1339.30651,393.467846 1339.25685,393.101771 L1339.25,393 L1339.25,388.81 L1329.53033,398.53033 C1329.23744,398.823223 1328.76256,398.823223 1328.46967,398.53033 C1328.2034,398.264064 1328.1792,397.8474 1328.39705,397.553788 L1328.46967,397.46967 L1338.188,387.75 L1334,387.75 C1333.6203,387.75 1333.30651,387.467846 1333.25685,387.101771 L1333.25,387 C1333.25,386.620304 1333.53215,386.306509 1333.89823,386.256847 L1334,386.25 L1340,386.25 Z"
                        id="link"
                    />
                </g>
            </g>
        </svg>
    );
};

ArrowLink.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

ArrowLink.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default ArrowLink;
