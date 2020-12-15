import React from 'react';
import PropTypes from 'prop-types';

const Logout = (props) => {
    const { className, style } = props;
    return (
        <svg
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="logout" fill="currentColor" fillRule="nonzero">
                    <path
                        d="M19.4204082,10.4408163 C19.4244898,10.4367347 19.4244898,10.4367347 19.4285714,10.4326531 C19.4408163,10.4163265 19.4530612,10.4040816 19.4612245,10.3877551 C19.4653061,10.3836735 19.4653061,10.3795918 19.4693878,10.3755102 C19.477551,10.3591837 19.4897959,10.3428571 19.4979592,10.3265306 C19.4979592,10.322449 19.5020408,10.3183673 19.5020408,10.3183673 C19.5102041,10.3020408 19.5183673,10.2857143 19.5265306,10.2653061 C19.5265306,10.2612245 19.5265306,10.2612245 19.5306122,10.2571429 C19.5387755,10.2408163 19.5428571,10.2204082 19.5510204,10.2 C19.5510204,10.1959184 19.5510204,10.1918367 19.555102,10.1918367 C19.5591837,10.1714286 19.5673469,10.155102 19.5673469,10.1346939 C19.5673469,10.1265306 19.5673469,10.122449 19.5714286,10.1142857 C19.5755102,10.0979592 19.5755102,10.0816327 19.5795918,10.0653061 C19.5836735,10.0408163 19.5836735,10.0204082 19.5836735,9.99591837 C19.5836735,9.97142857 19.5836735,9.95102041 19.5795918,9.92653061 C19.5795918,9.91020408 19.5755102,9.89387755 19.5714286,9.87755102 C19.5714286,9.86938776 19.5714286,9.86530612 19.5673469,9.85714286 C19.5632653,9.83673469 19.5591837,9.82040816 19.555102,9.8 C19.555102,9.79591837 19.555102,9.79183673 19.5510204,9.79183673 C19.5469388,9.77142857 19.5387755,9.75510204 19.5306122,9.73469388 C19.5183673,9.71020408 19.5102041,9.68979592 19.5020408,9.67346939 C19.4897959,9.64897959 19.4816327,9.63265306 19.4693878,9.61632653 C19.4653061,9.6122449 19.4653061,9.60816327 19.4612245,9.60408163 C19.4489796,9.5877551 19.4408163,9.57142857 19.4285714,9.55918367 C19.4244898,9.55510204 19.4244898,9.55510204 19.4204082,9.55102041 C19.4040816,9.53469388 19.3918367,9.51428571 19.3714286,9.49795918 L15.3346939,5.46530612 C15.0612245,5.19183673 14.6163265,5.19183673 14.3428571,5.46530612 C14.0693878,5.73877551 14.0693878,6.18367347 14.3428571,6.45714286 L17.1836735,9.29795918 L7.88979592,9.29795918 C7.50204082,9.29795918 7.1877551,9.6122449 7.1877551,9.99591837 C7.1877551,10.3836735 7.50204082,10.6979592 7.88979592,10.6979592 L17.1877551,10.6979592 L14.3673469,13.5183673 C14.0938776,13.7918367 14.0938776,14.2367347 14.3673469,14.5102041 C14.5020408,14.644898 14.6816327,14.7142857 14.8612245,14.7142857 C15.0408163,14.7142857 15.2204082,14.644898 15.355102,14.5102041 L19.3673469,10.4979592 C19.3877551,10.4734694 19.4040816,10.4571429 19.4204082,10.4408163 Z"
                        id="Path"
                    />
                    <path
                        d="M3.8244898,1.4 L9.04897959,1.4 C9.43673469,1.4 9.75102041,1.08571429 9.75102041,0.702040816 C9.75102041,0.314285714 9.43673469,0 9.04897959,0 L3.8244898,0 C1.73061224,0 0.0244897959,1.70612245 0.0244897959,3.8 L0.0244897959,16.1959184 C0.0244897959,18.2897959 1.73061224,19.9959184 3.8244898,19.9959184 L8.96326531,19.9959184 C9.35102041,19.9959184 9.66530612,19.6816327 9.66530612,19.2979592 C9.66530612,18.9102041 9.35102041,18.5959184 8.96326531,18.5959184 L3.8244898,18.5959184 C2.50204082,18.5959184 1.4244898,17.5183673 1.4244898,16.1959184 L1.4244898,3.8 C1.42857143,2.47346939 2.50204082,1.4 3.8244898,1.4 Z"
                        id="Path"
                    />
                </g>
            </g>
        </svg>
    );
};

Logout.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Logout.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Logout;
