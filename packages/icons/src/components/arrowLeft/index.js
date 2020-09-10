import React from 'react';
import PropTypes from 'prop-types';

const ArrowLeft = (props) => {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="16px" height="14px" viewBox="0 0 16 14">
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M15.3333333,6 L2.03366667,6 L7.12633333,1.14933333 C7.393,0.895333333 7.40333333,0.473333333 7.14933333,0.206666667 C6.89566667,-0.0596666667 6.47366667,-0.0703333333 6.20666667,0.183666667 L0.390666667,5.72366667 C0.139,5.97566667 0,6.31033333 0,6.66666667 C0,7.02266667 0.139,7.35766667 0.402333333,7.62066667 L6.207,13.1493333 C6.336,13.2723333 6.50133333,13.3333333 6.66666667,13.3333333 C6.84266667,13.3333333 7.01866667,13.264 7.14966667,13.1263333 C7.40366667,12.8596667 7.39333333,12.438 7.12666667,12.184 L2.01266667,7.33333333 L15.3333333,7.33333333 C15.7013333,7.33333333 16,7.03466667 16,6.66666667 C16,6.29866667 15.7013333,6 15.3333333,6 L15.3333333,6 Z"
                    id="Path"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

ArrowLeft.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

ArrowLeft.defaultProps = {
    className: undefined,
    style: undefined,
};

export default ArrowLeft;
