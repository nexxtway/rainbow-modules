import React from 'react';
import PropTypes from 'prop-types';

const Open = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            version="1.1"
            width="15"
            height="14"
            viewBox="0 0 15 14"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M20.46 20.382c.365 0 .66.295.66.66 0 .364-.295.66-.66.66h-6.14v8.942h8.942V25.04c0-.365.295-.66.66-.66.364 0 .66.295.66.66v6.263c0 .365-.296.66-.66.66H13.66c-.365 0-.66-.295-.66-.66V21.042c0-.365.295-.66.66-.66zM26.62 18c.365 0 .66.295.66.66v4.18c0 .365-.295.66-.66.66-.364 0-.66-.295-.66-.66v-2.588l-6.325 6.326c-.129.129-.298.193-.467.193-.168 0-.337-.064-.466-.193-.258-.258-.258-.675 0-.933l6.326-6.326h-2.589c-.364 0-.66-.295-.66-.66 0-.364.296-.659.66-.659z"
                transform="translate(-1136 -253) translate(1123 235)"
            />
        </svg>
    );
};

Open.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Open.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Open;
