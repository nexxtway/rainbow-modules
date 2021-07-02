import React from 'react';
import PropTypes from 'prop-types';

const ColumnsFilled = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="20px"
            height="17px"
            viewBox="0 0 20 17"
        >
            <title>{title}</title>
            <g
                id="column-customization"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <g
                    id="dispatch/rides-colum-customization-show-service-3"
                    transform="translate(-1441.000000, -247.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <path
                        d="M1445.21051,247.333 C1445.78949,247.333 1446.26313,247.787886 1446.26313,248.343889 L1446.26313,248.343889 L1446.26313,262.322158 C1446.26313,262.878114 1445.78944,263.333 1445.21051,263.333 L1445.21051,263.333 L1442.05262,263.333 C1441.47368,263.333 1441,262.878114 1441,262.322158 L1441,262.322158 L1441,248.343889 C1441,247.787886 1441.47368,247.333 1442.05262,247.333 L1442.05262,247.333 Z M1452.57897,247.333 C1453.1579,247.333 1453.63159,247.787886 1453.63159,248.343889 L1453.63159,248.343889 L1453.63159,262.322158 C1453.63159,262.878114 1453.1579,263.332953 1452.57897,263.332953 L1452.57897,263.332953 L1449.42108,263.332953 C1448.84214,263.332953 1448.36846,262.878067 1448.36846,262.322111 L1448.36846,262.322111 L1448.36846,248.343842 C1448.36846,247.787886 1448.84214,247.333 1449.42108,247.333 L1449.42108,247.333 Z M1459.94738,247.333 C1460.52632,247.333 1461,247.787886 1461,248.343842 L1461,248.343842 L1461,262.322111 C1461,262.878067 1460.52632,263.332953 1459.94738,263.332953 L1459.94738,263.332953 L1456.78949,263.332953 C1456.21056,263.332953 1455.73687,262.878067 1455.73687,262.322111 L1455.73687,262.322111 L1455.73687,248.343842 C1455.73687,247.787886 1456.21056,247.333 1456.78949,247.333 L1456.78949,247.333 Z"
                        id="Combined-Shape"
                    />
                </g>
            </g>
        </svg>
    );
};

ColumnsFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
ColumnsFilled.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default ColumnsFilled;
