import React from 'react';
import PropTypes from 'prop-types';

const Yahoo = (props) => {
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
                            fill="#720E9E"
                            d="M11.972 0c6.612 0 11.972 5.36 11.972 11.972 0 6.612-5.36 11.972-11.972 11.972C5.36 23.944 0 18.584 0 11.972 0 5.36 5.36 0 11.972 0z"
                            transform="translate(-506 -479) translate(506 479)"
                        />
                        <path
                            fill="#FFF"
                            d="M17.454 9.45l.012-.002.397-.441-.02-.002.042-.066H12.33l.214.76h1.516l-2.552 2.361c-.52-.76-1.741-2.505-2.593-3.814h1.583v-.539l.022-.155-.022-.003v-.063H4.49v.76H6.37c.73.602 3.892 4.442 4.008 4.809.046.343.112 2.37-.024 2.523-.164.236-1.875.108-2.177.13l-.011.745c.55.017 2.203 0 2.76 0 1.099 0 3.022-.029 3.293-.007l.034-.705-2.211-.033c-.047-.32-.097-2.336-.051-2.556.209-.638 3.601-3.28 3.95-3.38l.329-.073h1.025l.16-.249zm-.83 5.269l.961.073 1.12-4.108c-.187-.006-1.886-.158-2.107-.2l.027 4.235zm-.166.658l.006 1.004.486.04.525.037.154-.982-.553-.025-.618-.074z"
                            transform="translate(-506 -479) translate(506 479)"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

Yahoo.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

Yahoo.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Yahoo;
