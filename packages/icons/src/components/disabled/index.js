import React from 'react';
import PropTypes from 'prop-types';

const Disabled = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            version="1.1"
            width="56.693px"
            height="56.693px"
            viewBox="0 0 56.693 56.693"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <path
                fill="#474A56"
                d="M28.421,5.317c-13.357,0-24.225,10.866-24.225,24.224c0,13.357,10.867,24.224,24.225,24.224  c13.357,0,24.223-10.866,24.223-24.224C52.644,16.183,41.778,5.317,28.421,5.317z M28.421,49.272c-4.322,0-8.322-1.401-11.576-3.766  l27.303-27.867c2.511,3.312,4.004,7.434,4.004,11.901C48.152,40.42,39.301,49.272,28.421,49.272z M28.421,9.808  c4.571,0,8.779,1.566,12.128,4.185L13.123,41.987c-2.769-3.399-4.435-7.73-4.435-12.446C8.688,18.66,17.541,9.808,28.421,9.808z"
            />
        </svg>
    );
};

Disabled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Disabled.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Disabled;
