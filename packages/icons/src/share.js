import React from 'react';
import PropTypes from 'prop-types';

const Share = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="11px"
            height="12px"
            viewBox="0 0 11 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="rainbow-ConfirmModal-delete"
                    transform="translate(-759.000000, -233.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="share-(1)" transform="translate(759.000000, 233.000000)">
                        <path
                            d="M9.12496948,3.75 C8.09152221,3.75 7.24996948,2.90899659 7.24996948,1.875 C7.24996948,0.841003406 8.09152221,0 9.12496948,0 C10.1585083,0 10.9999695,0.841003406 10.9999695,1.875 C10.9999695,2.90899659 10.1585083,3.75 9.12496948,3.75 Z"
                            id="Shape"
                        />
                        <path
                            d="M9.12496948,12 C8.09152221,12 7.24996948,11.1589966 7.24996948,10.125 C7.24996948,9.09100341 8.09152221,8.25 9.12496948,8.25 C10.1585083,8.25 10.9999695,9.09100341 10.9999695,10.125 C10.9999695,11.1589966 10.1585083,12 9.12496948,12 Z"
                            id="Shape"
                        />
                        <path
                            d="M1.875,7.875 C0.841461187,7.875 0,7.03399659 0,6 C0,4.96600341 0.841461187,4.125 1.875,4.125 C2.90853881,4.125 3.75,4.96600341 3.75,6 C3.75,7.03399659 2.90853881,7.875 1.875,7.875 Z"
                            id="Shape"
                        />
                        <path
                            d="M3.18054199,5.63497924 C3.04998778,5.63497924 2.92300416,5.56695558 2.85452271,5.4460144 C2.75198365,5.26602173 2.81451417,5.03695678 2.99450684,4.93450927 L7.6340332,2.28945923 C7.81347656,2.18600463 8.04299927,2.24899291 8.14498901,2.42953491 C8.24752807,2.60952759 8.18499755,2.83850098 8.00500488,2.94104004 L3.36547852,5.58599855 C3.30697631,5.61895753 3.24353027,5.63497924 3.18054199,5.63497924 L3.18054199,5.63497924 Z"
                            id="Path"
                        />
                        <path
                            d="M7.81951903,9.75997924 C7.75653075,9.75997924 7.69299316,9.74395753 7.63449096,9.71054077 L2.99496459,7.06549073 C2.81497193,6.96304322 2.75253295,6.73397827 2.85498047,6.5539856 C2.9569702,6.37353516 3.18603516,6.31100463 3.36602784,6.41400145 L8.00546264,9.05895996 C8.18545533,9.16149902 8.24798583,9.39047241 8.14553834,9.57046509 C8.07650756,9.69195558 7.94952394,9.75997924 7.81951903,9.75997924 Z"
                            id="Path"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

Share.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Share.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Share;
