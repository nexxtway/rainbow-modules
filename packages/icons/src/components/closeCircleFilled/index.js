import React from 'react';
import PropTypes from 'prop-types';

const CloseCircleFilled = (props) => {
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
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="auth/role-details"
                    transform="translate(-1299.000000, -463.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-8" transform="translate(190.000000, 428.000000)">
                        <g id="Group-17" transform="translate(0.000000, 25.000000)">
                            <g id="Group-9" transform="translate(1097.023824, 0.000000)">
                                <path
                                    d="M21.9761756,10 C27.4990231,10 31.9761756,14.4771525 31.9761756,20 C31.9761756,25.5228475 27.4990231,30 21.9761756,30 C16.4533281,30 11.9761756,25.5228475 11.9761756,20 C11.9761756,14.4771525 16.4533281,10 21.9761756,10 Z M25.0066332,15.7573593 L21.9761756,18.7878169 L18.9457179,15.7573593 C18.6111554,15.4227968 18.0680974,15.4227968 17.7335349,15.7573593 C17.3989724,16.0919218 17.3989724,16.6349798 17.7335349,16.9695424 L20.7639925,20 L17.7335349,23.0304576 C17.3989724,23.3650202 17.3989724,23.9080782 17.7335349,24.2426407 C18.0680974,24.5772032 18.6111554,24.5772032 18.9457179,24.2426407 L21.9761756,21.2121831 L25.0066332,24.2426407 C25.3411957,24.5772032 25.8842537,24.5772032 26.2188162,24.2426407 C26.5533788,23.9080782 26.5533788,23.3650202 26.2188162,23.0304576 L23.1883586,20 L26.2188162,16.9695424 C26.5533788,16.6349798 26.5533788,16.0919218 26.2188162,15.7573593 C25.8842537,15.4227968 25.3411957,15.4227968 25.0066332,15.7573593 Z"
                                    id="closeFilled"
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

CloseCircleFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
CloseCircleFilled.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default CloseCircleFilled;
