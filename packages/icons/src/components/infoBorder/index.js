import React from 'react';
import PropTypes from 'prop-types';

const InfoBorder = (props) => {
    const { className, style } = props;

    return (
        <svg
            width="12px"
            height="12px"
            viewBox="0 0 12 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <g id="billing" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="functions/billing"
                    transform="translate(-480.000000, -203.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-29" transform="translate(130.000000, 104.000000)">
                        <path
                            d="M355.999788,99.5 C359.037057,99.5 361.5,101.962655 361.5,104.999788 C361.5,108.036989 359.036989,110.5 355.999788,110.5 C352.962655,110.5 350.5,108.037057 350.5,104.999788 C350.5,101.962588 352.962588,99.5 355.999788,99.5 Z M355.999788,100.5 C353.514873,100.5 351.5,102.514873 351.5,104.999788 C351.5,107.484798 353.514966,109.5 355.999788,109.5 C358.484704,109.5 360.5,107.484704 360.5,104.999788 C360.5,102.514966 358.484798,100.5 355.999788,100.5 Z M355.732275,103.999577 C356.041693,103.999577 356.280423,104.074921 356.448466,104.223915 C356.615661,104.373333 356.699894,104.567619 356.699894,104.806349 C356.699894,104.855873 356.693968,104.943069 356.68254,105.067513 C356.671111,105.192381 356.649524,105.306243 356.618201,105.410794 L356.297778,106.545185 C356.271534,106.63619 356.248254,106.740317 356.22709,106.85672 C356.206349,106.973122 356.19619,107.062011 356.19619,107.121693 C356.19619,107.272381 356.22963,107.375238 356.297354,107.429841 C356.364233,107.484444 356.481481,107.511958 356.647407,107.511958 C356.725714,107.511958 356.813333,107.497989 356.912381,107.470899 C357.010582,107.44381 357.081693,107.419683 357.126561,107.398942 L357.040635,107.748995 C356.78328,107.850582 356.578413,107.927619 356.424762,107.980952 C356.271534,108.034286 356.093333,108.060952 355.890582,108.060952 C355.579048,108.060952 355.336508,107.984762 355.16381,107.832804 C354.991111,107.680847 354.905185,107.488254 354.905185,107.25418 C354.905185,107.163175 354.911534,107.070053 354.924233,106.975238 C354.937354,106.880423 354.958095,106.773757 354.986455,106.653968 L355.308571,105.51619 C355.336931,105.406984 355.361481,105.30328 355.380952,105.206772 C355.400423,105.109418 355.409735,105.020106 355.409735,104.938836 C355.409735,104.794074 355.379683,104.692487 355.32,104.635344 C355.259471,104.578201 355.145608,104.550265 354.975873,104.550265 C354.89291,104.550265 354.807407,104.56254 354.719788,104.58836 C354.633016,104.615026 354.557672,104.639153 354.495873,104.662857 L354.580952,104.312381 C354.791746,104.226455 354.993651,104.152804 355.186243,104.091852 C355.378836,104.030053 355.560847,103.999577 355.732275,103.999577 Z M356.444233,101.922963 C356.654603,101.922963 356.834921,101.992804 356.983915,102.133333 C357.133333,102.273439 357.208254,102.442751 357.208254,102.639577 C357.208254,102.837249 357.133333,103.005714 356.983915,103.14455 C356.834497,103.283386 356.654603,103.352804 356.444233,103.352804 C356.234286,103.352804 356.053122,103.283386 355.902434,103.14455 C355.752593,103.005714 355.676825,102.836825 355.676825,102.639577 C355.676825,102.442751 355.753016,102.273439 355.902434,102.133333 C356.053122,101.992804 356.234286,101.922963 356.444233,101.922963 Z"
                            id="info-border"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

InfoBorder.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

InfoBorder.defaultProps = {
    className: undefined,
    style: undefined,
};

export default InfoBorder;
