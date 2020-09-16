import React from 'react';
import PropTypes from 'prop-types';

export default function Checkmark(props) {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="14"
            height="10"
            viewBox="0 0 14 10"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g fill="none" fillRule="evenodd">
                <g fill="currentColor" fillRule="nonzero">
                    <g>
                        <g>
                            <path
                                d="M180.65 14.008l-7.744 7.647c-.232.23-.537.345-.842.345-.305 0-.61-.115-.842-.345l-3.873-3.823c-.465-.46-.465-1.204 0-1.664.466-.46 1.22-.46 1.685 0l3.03 2.992 6.902-6.815c.466-.46 1.219-.46 1.685 0 .465.46.465 1.203 0 1.663z"
                                transform="translate(-269 -131) translate(102 85) translate(0 34)"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
}

Checkmark.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Checkmark.defaultProps = {
    className: undefined,
    style: undefined,
};
