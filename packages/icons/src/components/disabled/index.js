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
            width="16"
            height="16"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20 81c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8zm-6 8c0-1.294.416-2.49 1.115-3.471l8.356 8.356C22.49 94.585 21.294 95 20 95c-3.309 0-6-2.691-6-6zm10.885 3.471l-8.356-8.356C17.509 83.415 18.706 83 20 83c3.309 0 6 2.691 6 6 0 1.294-.416 2.49-1.115 3.471z"
                transform="translate(-1135 -316) translate(1123 235)"
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
