import React from 'react';
import PropTypes from 'prop-types';

const Tag = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15"
            viewBox="0 0 15 15"
            className={className}
            style={style}
        >
            <title>{title}</title>
            <g fill="none" fillRule="evenodd">
                <g fill="currentColor" fillRule="nonzero">
                    <g>
                        <path
                            d="M18.742 85c.454 0 .89.18 1.211.502l6.546 6.544c.669.67.669 1.754 0 2.423L21.47 99.5c-.669.668-1.754.668-2.423 0l-6.545-6.545c-.322-.322-.502-.758-.502-1.213v-5.028c0-.946.767-1.713 1.713-1.713h5.029zm0 1.025h-5.029c-.38 0-.688.308-.688.688v5.028c0 .183.073.359.202.489l6.545 6.543c.269.27.705.27.973 0l5.029-5.028c.269-.27.269-.705 0-.974l-6.545-6.544c-.13-.13-.305-.202-.487-.202zm-2.927 1.89c.497 0 .9.403.9.9s-.403.9-.9.9-.9-.403-.9-.9.403-.9.9-.9z"
                            transform="translate(-1194.000000, -171.000000) translate(1182.000000, 86.000000)"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

Tag.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
Tag.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Tag;
