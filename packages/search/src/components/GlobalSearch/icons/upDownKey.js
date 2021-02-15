import React from 'react';
import PropTypes from 'prop-types';

const UpDownKey = (props) => {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="38px" height="19px" viewBox="0 0 38 19">
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="rainbow-GlobalSearch"
                    transform="translate(-160.000000, -229.000000)"
                    fillRule="nonzero"
                >
                    <g id="Group-3" transform="translate(146.000000, 213.000000)">
                        <g id="Group-2" transform="translate(0.000000, 1.000000)">
                            <g id="upDownKey" transform="translate(14.750000, 15.750000)">
                                <path
                                    d="M16.3295456,0 L1.67021557,0 C0.752396497,0 0,0.748419118 0,1.6830912 L0,16.316394 C0,17.2515609 0.752299262,18 1.67025538,18 L16.3297844,18 C17.247735,18 18,17.2515658 18,16.316394 L18,1.6830912 C18,0.748386801 17.2475333,0 16.3295456,0 Z M1.67021557,0.559738134 L16.3295456,0.559738134 C16.9698884,0.559738134 17.4810319,1.06811016 17.4810319,1.6830912 L17.4810319,16.316394 C17.4810319,16.9318874 16.9700553,17.4402619 16.3297844,17.4402619 L1.67025538,17.4402619 C1.02997486,17.4402619 0.518968134,16.9318772 0.518968134,16.316394 L0.518968134,1.6830912 C0.518968134,1.06812397 1.03005573,0.559738134 1.67021557,0.559738134 Z"
                                    id="Path"
                                    fill="#DDDEE4"
                                />
                                <path
                                    d="M11.4657519,10.6717996 C11.422023,10.7259996 11.3436842,10.7462139 11.2752111,10.7214256 L6.50955715,10.7211305 C6.44119069,10.7458696 6.36349184,10.7254094 6.31906965,10.6714553 C6.27438081,10.6172062 6.27438081,10.5428411 6.31960293,10.4884444 L8.76223721,6.79060014 C8.79332742,6.75346677 8.84180254,6.73190863 8.8922508,6.73190863 C8.94301903,6.73143266 8.99122751,6.75346677 9.02199775,6.79060014 L11.464632,10.4887395 C11.4876697,10.5163313 11.4989219,10.5491857 11.4986433,10.5807614 C11.498442,10.6128289 11.4877764,10.6445029 11.4657519,10.6717996 Z"
                                    id="Path"
                                    fill="#777B89"
                                />
                                <path
                                    d="M35.3295854,0 L20.6702554,0 C19.7524308,0 19,0.745490523 19,1.6764942 L19,16.322993 C19,17.2544896 19.7523335,18 20.6702952,18 L35.3298242,18 C36.2477693,18 37,17.2545043 37,16.322993 L37,1.6764942 C37,0.745448554 36.2475676,0 35.3295854,0 Z M20.6702554,0.557544199 L35.3295854,0.557544199 C35.9699186,0.557544199 36.4810319,1.06391347 36.4810319,1.6764942 L36.4810319,16.322993 C36.4810319,16.9360841 35.9700855,17.4424558 35.3298242,17.4424558 L20.6702952,17.4424558 C20.030005,17.4424558 19.5189681,16.9360536 19.5189681,16.322993 L19.5189681,1.6764942 C19.5189681,1.06394754 20.0300859,0.557544199 20.6702554,0.557544199 Z"
                                    id="Path"
                                    fill="#DDDEE4"
                                />
                                <path
                                    d="M30.4657519,10.9349575 C30.422023,10.9891575 30.3436842,11.0093718 30.2752111,10.9845834 L25.5095572,10.9842883 C25.4411907,11.0090275 25.3634918,10.9885673 25.3190696,10.9346132 C25.2743808,10.8803641 25.2743808,10.805999 25.3196029,10.7516023 L27.7622372,7.05375804 C27.7933274,7.01662467 27.8418025,6.99506652 27.8922508,6.99506652 C27.943019,6.99459056 27.9912275,7.01662467 28.0219977,7.05375804 L30.464632,10.7518974 C30.4876697,10.7794892 30.4989219,10.8123436 30.4986433,10.8439193 C30.498442,10.8759868 30.4877764,10.9076608 30.4657519,10.9349575 Z"
                                    id="Path"
                                    fill="#777B89"
                                    transform="translate(27.892131, 8.995067) scale(1, -1) translate(-27.892131, -8.995067) "
                                />
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

UpDownKey.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

UpDownKey.defaultProps = {
    className: undefined,
    style: undefined,
};

export default UpDownKey;