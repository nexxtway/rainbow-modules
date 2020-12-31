import React from 'react';
import PropTypes from 'prop-types';

const OpenBookFilled = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="20px"
            height="16px"
            viewBox="0 0 20 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="Transactions" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M19.2843771,2.47818182 C19.6789226,2.47818182 19.9999327,2.79919192 19.9999327,3.19373737 L19.9999327,3.19373737 L19.9999327,14.5674747 C19.9999327,14.7862626 19.9018855,14.990101 19.7309764,15.1264646 C19.5594613,15.263165 19.3382492,15.3135354 19.1241751,15.2647811 C17.409697,14.8740741 14.4013468,14.4198653 11.5476094,15.1185859 C13.1976431,13.5569024 15.5274747,13.2806061 16.9404714,13.2772391 C17.9468013,13.2747475 18.7654545,12.4554209 18.7654545,11.4506397 L18.7654545,11.4506397 L18.7654545,2.47818182 Z M1.23447811,2.47818182 L1.23447811,11.4506397 C1.23447811,12.4554209 2.05319865,13.2747475 3.05946128,13.2771717 C4.47245791,13.2805387 6.80228956,13.5567677 8.45225589,15.1183838 C5.5986532,14.4196633 2.59023569,14.8738047 0.875757576,15.2645791 C0.661346801,15.313468 0.4403367,15.2628956 0.268956229,15.1262626 C0.098047138,14.989899 1.98951966e-13,14.7861279 1.98951966e-13,14.5672727 L1.98951966e-13,14.5672727 L1.98951966e-13,3.19373737 C1.98951966e-13,2.79919192 0.321077441,2.47818182 0.715555556,2.47818182 L0.715555556,2.47818182 L1.23447811,2.47818182 Z M3.05939394,0.00329966329 C4.72902357,0.0072053872 7.76579125,0.393872054 9.34606061,2.93878788 C9.41037037,3.04249158 9.44444444,3.16781145 9.44444444,3.30121212 L9.44444444,3.30121212 L9.44444444,14.5321886 C7.51905724,12.5173064 4.72808081,12.170101 3.06222222,12.1661279 C2.66707071,12.1651178 2.34565657,11.8441751 2.34565657,11.4506397 L2.34565657,11.4506397 L2.34565657,0.718989899 C2.34565657,0.526936027 2.42047138,0.346531987 2.5562963,0.211043771 C2.69063973,0.077037037 2.86855219,0.00329966329 3.05771044,0.00329966329 L3.05771044,0.00329966329 Z M16.9423569,0.00323232323 C17.1313131,0.00323232323 17.3093603,0.076969697 17.4437037,0.210976431 C17.5795286,0.346464646 17.6543434,0.526868687 17.6543434,0.718922559 L17.6543434,0.718922559 L17.6543434,11.4506397 C17.6543434,11.8441077 17.3329293,12.1650505 16.9378451,12.1660606 C15.2719865,12.1700337 12.4810101,12.5172391 10.5556229,14.5321212 L10.5556229,14.5321212 L10.5556229,3.30121212 C10.5556229,3.16781145 10.5896296,3.04249158 10.6539394,2.93878788 C12.2342761,0.393872054 15.2710438,0.0072053872 16.9406061,0.00323232323 L16.9406061,0.00323232323 Z"
                    id="open-book"
                    fill="currentColor"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

OpenBookFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

OpenBookFilled.defaultProps = {
    className: undefined,
    style: undefined,
};

export default OpenBookFilled;