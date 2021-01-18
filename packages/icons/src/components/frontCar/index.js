import React from 'react';
import PropTypes from 'prop-types';

const FrontCar = (props) => {
    const { className, style } = props;
    return (
        <svg width="15px" height="11px" viewBox="0 0 15 11" className={className} style={style}>
            <g id="MVP" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="dispatch/assign-driver"
                    transform="translate(-143.000000, -1358.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-6" transform="translate(71.000000, 1276.000000)">
                        <g id="Group-5" transform="translate(23.000000, 58.000000)">
                            <path
                                d="M63.0484521,27.3869091 C62.9793513,27.3026133 62.8762426,27.2534106 62.768069,27.2534106 L61.3929254,27.2534106 C61.0535714,26.3583553 60.6114705,25.4813892 60.1089516,25.1503562 C58.3705762,24.0067548 53.7596304,24.0067548 52.021255,25.1503562 C51.5183743,25.481751 51.0780823,26.3598024 50.7369193,27.2534106 L49.3617758,27.2534106 C49.2525168,27.2534106 49.1497699,27.3026133 49.0813926,27.3869091 C49.0126535,27.4708432 48.9851579,27.5819111 49.0075886,27.6886376 L49.2112733,28.6755862 C49.2460047,28.843816 49.3943364,28.9639286 49.5654605,28.9639286 L49.9728301,28.9639286 C49.5795701,29.4176066 49.3889096,29.9888646 49.3863771,30.5604844 C49.3838446,31.2666881 49.6519271,31.9048763 50.1421453,32.3563835 C50.1475721,32.3610867 50.1529989,32.3643428 50.1580638,32.369046 L50.1580638,33.7499781 C50.1580638,34.0491741 50.4011832,34.2926552 50.7007409,34.2926552 L51.969158,34.2926552 C52.2687157,34.2926552 52.511835,34.0491741 52.511835,33.7499781 L52.511835,33.1950004 L59.617648,33.1950004 L59.617648,33.7499781 C59.617648,34.0491741 59.8607673,34.2926552 60.160325,34.2926552 L61.4287421,34.2926552 C61.7275762,34.2926552 61.9714191,34.0491741 61.9714191,33.7499781 L61.9714191,32.3961799 C62.4916655,31.9197094 62.7402116,31.2641556 62.7434676,30.6096871 C62.7456384,30.0185309 62.546295,29.4262894 62.1298808,28.963205 L62.5643842,28.963205 C62.7362319,28.963205 62.8845637,28.8430925 62.9185714,28.6745008 L63.122618,27.687914 C63.1436015,27.5819111 63.1171912,27.4715667 63.0484521,27.3869091 Z M52.6171143,26.0566268 C54.0027497,25.1445677 58.1267333,25.1445677 59.5116451,26.0566268 C59.7808129,26.2331778 60.1270408,26.946979 60.444326,27.8210507 L51.685157,27.8210507 C52.0017186,26.9473407 52.3479465,26.2339013 52.6171143,26.0566268 Z M50.9941482,30.6965154 C50.9941482,30.1068064 51.4724276,29.6292506 52.0617749,29.6292506 C52.6518457,29.6292506 53.1294015,30.1068064 53.1294015,30.6965154 C53.1294015,31.2862244 52.6518457,31.764142 52.0617749,31.764142 C51.4724276,31.764142 50.9941482,31.2862244 50.9941482,30.6965154 Z M60.0818177,31.764142 C59.4924705,31.764142 59.0141911,31.2862244 59.0141911,30.6965154 C59.0141911,30.1068064 59.4924705,29.6292506 60.0818177,29.6292506 C60.6718885,29.6292506 61.1494443,30.1068064 61.1494443,30.6965154 C61.1494443,31.2862244 60.671165,31.764142 60.0818177,31.764142 Z"
                                id="front-car"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

FrontCar.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
FrontCar.defaultProps = {
    className: undefined,
    style: undefined,
};

export default FrontCar;
