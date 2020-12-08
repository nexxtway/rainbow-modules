import React from 'react';
import PropTypes from 'prop-types';

const RolesFilled = (props) => {
    const { className } = props;
    return (
        <svg
            className={className}
            width="32px"
            height="26px"
            viewBox="0 0 40 32"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M31.1030795,0.0223396498 C36.1836949,0.0403909318 39.0727205,2.98028837 39.0833872,8.0764935 C39.0929796,13.4090063 39.0997974,18.7415191 39.0809256,24.0732114 C39.0636949,28.8001858 36.1877974,31.7712627 31.4632846,31.854955 C27.4993872,31.9255191 23.5338487,31.8697243 19.5691308,31.8721858 C15.6725154,31.8746473 11.7759,31.9164935 7.88010513,31.8639807 C2.8479,31.7966986 0.0335410256,28.9363909 0.0146692308,23.9214166 C-0.00502307692,18.5889038 -0.00502307692,13.2563909 0.0146692308,7.92469862 C0.0335410256,2.96059606 2.93241282,0.0444934959 7.9293359,0.0231601626 C15.6536436,-0.00966035024 23.3787718,-0.00637829896 31.1030795,0.0223396498 Z M13.2533154,7.40441144 C8.5632641,7.36174478 4.61823846,11.3338473 4.67731538,16.0386679 C4.73639231,20.7041038 8.56982821,24.4751807 13.2336231,24.4547511 C17.8826487,24.432514 21.7242897,20.5884114 21.7300397,15.950873 C21.7357769,11.342873 17.8711615,7.44707811 13.2533154,7.40441144 Z M32.9355002,22.1733016 L25.8251761,22.1733016 C24.5787164,22.1733016 24.5787164,24.4225038 25.9589564,24.4290679 C26.0146819,24.4293329 26.0749793,24.4295624 26.1395029,24.4297591 L26.5745915,24.4305655 C26.814726,24.4307921 27.086671,24.4307693 27.3810892,24.4305669 L27.9971232,24.4299432 C28.4241,24.4293952 28.8799627,24.4286104 29.3425787,24.4277542 L30.0388011,24.4264368 C30.6185962,24.4253286 31.1916522,24.4242379 31.714741,24.4234872 L32.3156968,24.4227703 C32.5061763,24.4225995 32.6858944,24.4225038 32.8520846,24.4225038 C34.1363513,24.4225038 34.1363513,22.1733016 32.9355002,22.1733016 L32.9355002,22.1733016 Z M32.9355002,17.2502247 L25.8251761,17.2502247 C24.5787164,17.2502247 24.5787164,19.4994268 25.9589564,19.5059909 C26.0146819,19.5062559 26.0749793,19.5064855 26.1395029,19.5066822 L27.9971232,19.5068662 C28.4241,19.5063182 28.8799627,19.5055335 29.3425787,19.5046772 L30.0388011,19.5033598 C30.6185962,19.5022517 31.1916522,19.501161 31.714741,19.5004103 L32.3156968,19.4996933 C32.5061763,19.4995226 32.6858944,19.4994268 32.8520846,19.4994268 C34.1363513,19.4994268 34.1363513,17.2502247 32.9355002,17.2502247 L32.9355002,17.2502247 Z M32.9355002,12.3271478 L25.8251761,12.3271478 C24.5787164,12.3271478 24.5787164,14.5763499 25.9589564,14.582914 C26.0704074,14.583444 26.2001462,14.5838323 26.3454062,14.5840993 L27.9971232,14.5837893 C29.3847976,14.5820084 31.0775803,14.5777266 32.3156968,14.5766164 L32.8520846,14.5763499 C34.1363513,14.5763499 34.1363513,12.3271478 32.9355002,12.3271478 L32.9355002,12.3271478 Z M32.9355002,7.40407087 L25.8251761,7.40407087 C24.5787164,7.40407087 24.5787164,9.65327298 25.9589564,9.65983709 C26.0704074,9.66036712 26.2001462,9.66075534 26.3454062,9.6610224 L27.9971232,9.66071238 C29.3847976,9.65893145 31.0775803,9.65464965 32.3156968,9.6535395 L32.8520846,9.65327298 C34.1363513,9.65327298 34.1363513,7.40407087 32.9355002,7.40407087 L32.9355002,7.40407087 Z"
                    id="filled"
                    fill="currentColor"
                />
            </g>
        </svg>
    );
};

export default RolesFilled;

RolesFilled.propTypes = {
    className: PropTypes.string,
};

RolesFilled.defaultProps = {
    className: undefined,
};
