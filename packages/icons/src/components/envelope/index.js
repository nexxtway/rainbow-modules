import React from 'react';
import PropTypes from 'prop-types';

const Phone = (props) => {
    const { className, style } = props;

    return (
        <svg className={className} style={style} width="18px" height="13px" viewBox="0 0 18 13">
            <g id="edit-rides" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="dispatch/rides-customerInfo"
                    transform="translate(-581.000000, -225.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-49" transform="translate(250.000000, 159.000000)">
                        <g id="Group-48" transform="translate(0.000000, 46.000000)">
                            <g id="Group-37" transform="translate(10.000000, 11.000000)">
                                <g id="Group-47" transform="translate(321.253662, 4.000000)">
                                    <g id="envelope-(1)" transform="translate(-0.000000, 5.219655)">
                                        <path
                                            d="M17.4195862,1.03082759 L11.3146207,5.68172414 L17.4321379,10.9451724 C17.5742759,10.6764828 17.6551724,10.3706552 17.6551724,10.0461034 L17.6551724,1.95386207 C17.6551724,1.61968966 17.5696897,1.30517241 17.4195862,1.03082759 Z"
                                            id="Path"
                                        />
                                        <path
                                            d="M15.7258276,0.0245172414 L1.92931034,0.0245172414 C1.54955172,0.0245172414 1.19531034,0.135241379 0.896448276,0.325517241 L8.50975862,6.03148276 C8.70051724,6.17148276 8.95610345,6.17175862 9.14717241,6.03241379 L16.6916552,0.284758621 C16.4074138,0.119586207 16.0776207,0.0245172414 15.7258276,0.0245172414 Z"
                                            id="Path"
                                        />
                                        <path
                                            d="M10.4732759,6.32272414 L9.76427586,6.86289655 C9.48465517,7.06934483 9.15682759,7.17258621 8.82913793,7.17258621 C8.50137931,7.17258621 8.17372414,7.06937931 7.894,6.86289655 L7.891,6.86068966 L7.18296552,6.33003448 L0.939758621,11.7015862 C1.22927586,11.8753448 1.5677931,11.9754828 1.92931034,11.9754828 L15.7258621,11.9754828 C16.0897241,11.9754828 16.4303448,11.8741379 16.7211034,11.6983103 L10.4732759,6.32272414 Z"
                                            id="Path"
                                        />
                                        <path
                                            d="M0.201206897,1.09737931 C0.0726551724,1.35562069 0,1.64631034 0,1.95386207 L0,10.0461724 C0,10.3729655 0.0819310345,10.6808966 0.225965517,10.9508966 L6.33513793,5.69458621 L0.201206897,1.09737931 Z"
                                            id="Path"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Phone.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Phone.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Phone;
