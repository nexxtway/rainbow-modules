import React from 'react';
import PropTypes from 'prop-types';

const Point = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>{title}</title>
            <g id="Variant-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M9.54545455,1.32338585e-12 C14.8172635,1.32338585e-12 19.0909091,4.27364557 19.0909091,9.54545455 C19.0909091,14.8172635 14.8172635,19.0909091 9.54545455,19.0909091 C4.27364557,19.0909091 -4.08562073e-14,14.8172635 -4.08562073e-14,9.54545455 C-4.08562073e-14,4.27364557 4.27364557,1.32338585e-12 9.54545455,1.32338585e-12 Z M9.54545455,1.54545455 C5.12717655,1.54545455 1.54545455,5.12717655 1.54545455,9.54545455 C1.54545455,13.9637325 5.12717655,17.5454545 9.54545455,17.5454545 C13.9637325,17.5454545 17.5454545,13.9637325 17.5454545,9.54545455 C17.5454545,5.12717655 13.9637325,1.54545455 9.54545455,1.54545455 Z M9.54545455,3.54545455 C12.859163,3.54545455 15.5454545,6.23174605 15.5454545,9.54545455 C15.5454545,12.859163 12.859163,15.5454545 9.54545455,15.5454545 C6.23174605,15.5454545 3.54545455,12.859163 3.54545455,9.54545455 C3.54545455,6.23174605 6.23174605,3.54545455 9.54545455,3.54545455 Z"
                    id="start"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

Point.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
Point.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Point;
