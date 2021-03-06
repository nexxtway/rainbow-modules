import React from 'react';
import PropTypes from 'prop-types';

const Filter = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="16px"
            height="16px"
            viewBox="0 0 1000 667"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>{title}</title>
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M555.555556,555.555556 C586.238042,555.555556 611.111111,580.428625 611.111111,611.111111 C611.111111,641.486772 586.733016,666.168624 556.474268,666.659224 L555.555556,666.666667 L444.444444,666.666667 C413.761958,666.666667 388.888889,641.793597 388.888889,611.111111 C388.888889,580.73545 413.266984,556.053598 443.525732,555.562998 L444.444444,555.555556 L555.555556,555.555556 Z M777.777778,277.777778 C808.460264,277.777778 833.333333,302.650847 833.333333,333.333333 C833.333333,363.708995 808.955238,388.390847 778.69649,388.881446 L777.777778,388.888889 L222.222222,388.888889 C191.539736,388.888889 166.666667,364.015819 166.666667,333.333333 C166.666667,302.957672 191.044762,278.27582 221.30351,277.785221 L222.222222,277.777778 L777.777778,277.777778 Z M944.444444,-9.09494702e-13 C975.126931,-9.09494702e-13 1000,24.8730695 1000,55.5555556 C1000,85.9312168 975.621905,110.613069 945.363157,111.103668 L944.444444,111.111111 L55.5555556,111.111111 C24.8730695,111.111111 0,86.2380417 0,55.5555556 C0,25.1798943 24.3780954,0.498042331 54.6368429,0.00744285718 L55.5555556,-9.09494702e-13 L944.444444,-9.09494702e-13 Z"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

Filter.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

Filter.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Filter;
