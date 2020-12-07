import React from 'react';
import PropTypes from 'prop-types';

const Google = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            idth="512px"
            height="512px"
            viewBox="0 0 512 512"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="google" fillRule="nonzero">
                    <path
                        d="M113.47,309.408 L95.648,375.94 L30.509,377.318 C11.042,341.211 0,299.9 0,256 C0,213.549 10.324,173.517 28.624,138.268 L28.638,138.268 L86.63,148.9 L112.034,206.544 C106.717,222.045 103.819,238.685 103.819,256 C103.821,274.792 107.225,292.797 113.47,309.408 Z"
                        id="Path"
                        fill="#FBBB00"
                    />
                    <path
                        d="M507.527,208.176 C510.467,223.662 512,239.655 512,256 C512,274.328 510.073,292.206 506.402,309.451 C493.94,368.134 461.377,419.376 416.268,455.638 L416.254,455.624 L343.21,451.897 L332.872,387.362 C362.804,369.808 386.196,342.337 398.518,309.451 L261.628,309.451 L261.628,208.176 L400.515,208.176 L507.527,208.176 L507.527,208.176 Z"
                        id="Path"
                        fill="#518EF8"
                    />
                    <path
                        d="M416.253,455.624 L416.267,455.638 C372.396,490.901 316.666,512 256,512 C158.509,512 73.748,457.509 30.509,377.319 L113.47,309.409 C135.089,367.107 190.748,408.18 256,408.18 C284.047,408.18 310.323,400.598 332.87,387.362 L416.253,455.624 Z"
                        id="Path"
                        fill="#28B446"
                    />
                    <path
                        d="M419.404,58.936 L336.471,126.832 C313.136,112.246 285.552,103.82 256,103.82 C189.271,103.82 132.571,146.777 112.035,206.544 L28.638,138.268 L28.624,138.268 C71.23,56.123 157.06,0 256,0 C318.115,0 375.068,22.126 419.404,58.936 Z"
                        id="Path"
                        fill="#F14336"
                    />
                </g>
            </g>
        </svg>
    );
};

Google.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Google.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Google;
