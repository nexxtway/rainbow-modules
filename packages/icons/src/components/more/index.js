import React from 'react';
import PropTypes from 'prop-types';

const More = (props) => {
    const { className, style, title } = props;

    return (
        <svg
            className={className}
            style={style}
            width="4px"
            height="16px"
            viewBox="0 0 4 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>{title}</title>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="auth/users-details-copy"
                    transform="translate(-1340.000000, -180.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-14" transform="translate(1233.000000, 168.000000)">
                        <path
                            d="M108.777792,24.4444167 C109.759639,24.4444167 110.555583,25.2403611 110.555583,26.2222083 C110.555583,27.2040556 109.759639,28 108.777792,28 C107.795944,28 107,27.2040556 107,26.2222083 C107,25.2403611 107.795944,24.4444167 108.777792,24.4444167 Z M108.777792,18.2222083 C109.759639,18.2222083 110.555583,19.0181528 110.555583,20 C110.555583,20.9818472 109.759639,21.7777917 108.777792,21.7777917 C107.795944,21.7777917 107,20.9818472 107,20 C107,19.0181528 107.795944,18.2222083 108.777792,18.2222083 Z M108.777792,12 C109.759639,12 110.555583,12.7959444 110.555583,13.7777917 C110.555583,14.7596389 109.759639,15.5555833 108.777792,15.5555833 C107.795944,15.5555833 107,14.7596389 107,13.7777917 C107,12.7959444 107.795944,12 108.777792,12 Z"
                            id="Combined-Shape"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

More.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

More.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default More;
