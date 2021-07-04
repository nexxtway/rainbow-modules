import React from 'react';
import PropTypes from 'prop-types';

const Checkmark = (props) => {
    const { className, style, title } = props;
    return (
        <svg className={className} style={style} width="100px" height="100px" viewBox="0 0 100 100">
            <title>{title}</title>
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="checkmark" fillRule="nonzero">
                    <circle
                        id="Oval"
                        fill="#1DE9B6"
                        cx="49.9026316"
                        cy="49.9026316"
                        r="49.9026316"
                    />
                    <path
                        d="M99.8050439,49.9026316 C99.8050439,77.3491228 77.3489035,99.8052632 49.9024123,99.8052632 C33.9960526,99.8052632 19.9609649,92.6317982 10.9160088,81.091886 C19.3370614,87.9535088 30.2532895,92.008114 42.1050439,92.008114 C69.5515351,92.008114 92.0076754,69.5519737 92.0076754,42.1054825 C92.0076754,30.2537281 87.9530702,19.3375 81.0914474,10.9164474 C92.6315789,19.9609649 99.8050439,33.9960526 99.8050439,49.9026316 Z"
                        id="Shape"
                        fillOpacity="0.03"
                        fill="#000000"
                    />
                    <path
                        d="M71.1317235,40.4271589 L46.6617839,64.896409 C45.9276651,65.630528 44.9640049,66 44.0003446,66 C43.0366842,66 42.0730241,65.630528 41.3389053,64.896409 L29.1042802,52.6617839 C27.6319066,51.1900998 27.6319066,48.8105894 29.1042802,47.3389053 C30.5759644,45.8665316 32.9547853,45.8665316 34.4271589,47.3389053 L44.0003446,56.912091 L65.8088448,35.1042802 C67.280529,33.6319066 69.6593499,33.6319066 71.1317235,35.1042802 C72.6034078,36.5759644 72.6034078,38.9547853 71.1317235,40.4271589 Z"
                        id="Path"
                        fill="#FFFFFF"
                    />
                </g>
            </g>
        </svg>
    );
};

Checkmark.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

Checkmark.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Checkmark;
