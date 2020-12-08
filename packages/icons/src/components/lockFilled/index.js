import React from 'react';
import PropTypes from 'prop-types';

const LockFilled = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="22px"
            height="30px"
            viewBox="0 0 20 26"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="filled" fill="currentColor" fillRule="nonzero">
                    <path
                        d="M17.0625,9.75 C18.4058333,9.75 19.5,10.8430833 19.5,12.1875 L19.5,23.5625 C19.5,24.9069167 18.4058333,26 17.0625,26 L2.4375,26 C1.09416667,26 0,24.9069167 0,23.5625 L0,12.1875 C0,10.8430833 1.09416667,9.75 2.4375,9.75 L17.0625,9.75 Z M9.75,14.0833333 C8.55508333,14.0833333 7.58333333,15.0550833 7.58333333,16.25 C7.58333333,17.1576477 8.14401187,17.9365331 8.93728935,18.2585766 L8.93728935,18.2585766 L8.9375,20.8541667 C8.9375,21.3026667 9.3015,21.6666667 9.75,21.6666667 C10.1985,21.6666667 10.5625,21.3026667 10.5625,20.8541667 L10.5625,20.8541667 L10.5637121,18.2581697 C11.35646,17.9358775 11.9166667,17.1572657 11.9166667,16.25 C11.9166667,15.0550833 10.9449167,14.0833333 9.75,14.0833333 Z"
                        id="Combined-Shape"
                    />
                    <path
                        d="M15.4375,11.375 C14.989,11.375 14.625,11.011 14.625,10.5625 L14.625,6.5 C14.625,3.81225 12.43775,1.625 9.75,1.625 C7.06225,1.625 4.875,3.81225 4.875,6.5 L4.875,10.5625 C4.875,11.011 4.511,11.375 4.0625,11.375 C3.614,11.375 3.25,11.011 3.25,10.5625 L3.25,6.5 C3.25,2.91525 6.16525,0 9.75,0 C13.33475,0 16.25,2.91525 16.25,6.5 L16.25,10.5625 C16.25,11.011 15.886,11.375 15.4375,11.375 Z"
                        id="Path"
                    />
                </g>
            </g>
        </svg>
    );
};

export default LockFilled;

LockFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

LockFilled.defaultProps = {
    className: undefined,
    style: undefined,
};
