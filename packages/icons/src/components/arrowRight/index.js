import React from 'react';
import PropTypes from 'prop-types';

const ArrowRight = (props) => {
    const { className, style, title } = props;
    return (
        <svg className={className} style={style} width="16px" height="14px" viewBox="0 0 16 14">
            <title>{title}</title>
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M15.3333333,6.00016251 L2.03366667,6.00016251 L7.12633333,1.14949584 C7.393,0.895495845 7.40333333,0.473495845 7.14933333,0.206829178 C6.89566667,-0.0595041554 6.47366667,-0.070170822 6.20666667,0.183829178 L0.390666667,5.72382918 C0.139,5.97582918 0,6.31049584 0,6.66682918 C0,7.02282918 0.139,7.35782918 0.402333333,7.62082918 L6.207,13.1494958 C6.336,13.2724958 6.50133333,13.3334958 6.66666667,13.3334958 C6.84266667,13.3334958 7.01866667,13.2641625 7.14966667,13.1264958 C7.40366667,12.8598292 7.39333333,12.4381625 7.12666667,12.1841625 L2.01266667,7.33349584 L15.3333333,7.33349584 C15.7013333,7.33349584 16,7.03482918 16,6.66682918 C16,6.29882918 15.7013333,6.00016251 15.3333333,6.00016251 L15.3333333,6.00016251 Z"
                    id="Path"
                    fill="currentColor"
                    fillRule="nonzero"
                    transform="translate(8.000000, 6.666748) scale(-1, 1) translate(-8.000000, -6.666748) "
                />
            </g>
        </svg>
    );
};

ArrowRight.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

ArrowRight.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default ArrowRight;
