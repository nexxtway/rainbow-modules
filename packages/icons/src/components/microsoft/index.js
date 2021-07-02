import React from 'react';
import PropTypes from 'prop-types';

const Microsoft = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className={className}
            style={style}
        >
            <title>{title}</title>
            <g fill="none" fillRule="evenodd">
                <g fillRule="nonzero">
                    <g>
                        <path
                            fill="#4CAF50"
                            d="M12.75 11.25H24V.75c0-.414-.336-.75-.75-.75h-10.5v11.25z"
                            transform="translate(-506 -438) translate(506 438)"
                        />
                        <path
                            fill="#F44336"
                            d="M11.25 11.25V0H.75C.336 0 0 .336 0 .75v10.5h11.25z"
                            transform="translate(-506 -438) translate(506 438)"
                        />
                        <path
                            fill="#2196F3"
                            d="M11.25 12.75H0v10.5c0 .414.336.75.75.75h10.5V12.75z"
                            transform="translate(-506 -438) translate(506 438)"
                        />
                        <path
                            fill="#FFC107"
                            d="M12.75 12.75V24h10.5c.414 0 .75-.336.75-.75v-10.5H12.75z"
                            transform="translate(-506 -438) translate(506 438)"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

Microsoft.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

Microsoft.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Microsoft;
