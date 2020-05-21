import React from 'react';
import PropTypes from 'prop-types';

const RainbowLogo = (props) => {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="40" height="40" viewBox="0 0 40 40">
            <g fill="none">
                <path fill="#323B45" d="M1.771 1.71H38.18V38.119H1.771z" />
                <rect width="11.84" height="11.84" x="28.153" y=".032" fill="#1DE9B6" rx="2" />
                <rect width="11.84" height="11.84" x="14.08" y=".032" fill="#01B6F5" rx="2" />
                <rect width="11.84" height="11.84" x=".11" y=".032" fill="#FE4849" rx="2" />
                <path
                    fill="#F4F6F9"
                    d="M30.075 13.995h7.84c1.104 0 2 .895 2 2v7.84c0 1.104-.896 2-2 2h-7.84c-1.105 0-2-.896-2-2v-7.84c0-1.105.895-2 2-2z"
                />
                <path
                    fill="#FC0"
                    d="M16.005 13.995h7.84c1.105 0 2 .895 2 2v7.84c0 1.104-.895 2-2 2h-7.84c-1.104 0-2-.896-2-2v-7.84c0-1.105.896-2 2-2z"
                />
                <path
                    fill="#F8752D"
                    d="M2.032 13.995h7.84c1.105 0 2 .895 2 2v7.84c0 1.104-.895 2-2 2h-7.84c-1.105 0-2-.896-2-2v-7.84c0-1.105.895-2 2-2z"
                />
                <rect width="11.84" height="11.84" x="28.075" y="27.954" fill="#01B6F5" rx="2" />
                <rect width="11.84" height="11.84" x="14.005" y="27.954" fill="#EA4243" rx="2" />
                <rect width="11.84" height="11.84" x=".032" y="27.954" fill="#1AD1A3" rx="2" />
            </g>
        </svg>
    );
};

RainbowLogo.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

RainbowLogo.defaultProps = {
    className: undefined,
    style: undefined,
};

export default RainbowLogo;
