import React from 'react';
import PropTypes from 'prop-types';

const Webhook = (props) => {
    const { className, style, title } = props;
    return (
        <svg width="24px" height="23px" viewBox="0 0 24 23" className={className} style={style}>
            <title>{title}</title>
            <g id="webhook-solution" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <path
                    d="M13.9650455,4.38291146 C14.4989238,5.0575515 14.6685718,5.81687439 14.3876129,6.64893044 C14.3095165,6.88096145 14.2083675,7.1054651 14.0987503,7.38040208 C14.8020884,8.62109993 15.5162471,9.88061619 16.2240075,11.1285591 C19.8013875,10.0217543 22.4986304,12.0021098 23.4662731,14.1222861 C24.6350846,16.6833777 23.8360549,19.7167174 21.5406792,21.2968053 C19.1846141,22.9187642 16.205001,22.6416631 14.1175687,20.5580886 C14.6495652,20.1127509 15.1841962,19.6654373 15.7554291,19.1875437 C17.8171742,20.5228982 19.6204485,20.4600447 20.9591903,18.8787336 C22.1008092,17.5297358 22.076063,15.5183299 20.9013236,14.1976538 C19.5456453,12.6736448 17.7297627,12.6271633 15.5347832,14.0901066 C14.6242544,12.4747342 13.6979181,10.8722524 12.8161815,9.24521254 C12.5188506,8.69684404 12.1906575,8.37862471 11.5205339,8.2626092 C10.401497,8.06859138 9.67905823,7.10762921 9.6356818,6.03102791 C9.59305809,4.96628221 10.2203698,4.00381457 11.2008091,3.62885773 C12.1720273,3.2572882 13.3117643,3.55715958 13.9650455,4.38291146 Z M4.45365591,10.86576 C4.63685314,11.5310849 4.82202631,12.2028081 5.00522354,12.8665335 C2.57049751,14.1087368 1.72780905,15.6738641 2.40922372,17.6309788 C3.00906058,19.3532398 4.71297362,20.2972654 6.56310571,19.9321882 C8.45247419,19.5593955 9.40506217,17.9891873 9.28876439,15.4692139 C11.0799008,15.4692139 12.8725426,15.4506777 14.6638672,15.4783408 C15.3633475,15.4893496 15.9033418,15.4168046 16.4302573,14.8001252 C17.2977861,13.7854365 18.8946224,13.8769881 19.8289565,14.8353157 C20.7838027,15.8147199 20.7380739,17.3905736 19.7276193,18.3286714 C18.7527315,19.233837 17.2125387,19.1854737 16.3004103,18.2101154 C16.1129789,18.0091348 15.9652544,17.7704233 15.779799,17.5234316 L11.4732056,17.5234316 C11.0604237,19.2212287 10.1688074,20.5919617 8.63256639,21.4636305 C7.43825592,22.1410933 6.1510766,22.3707721 4.78109627,22.1495616 C2.25867643,21.7428017 0.196178568,19.4720781 0.0145809003,16.9152206 C-0.19091615,14.0186907 1.79997766,11.4440498 4.45365591,10.86576 Z M15.153334,0.920135622 C17.3441735,2.32756459 18.3475712,5.06903073 17.4922744,7.41540433 C16.8473674,7.24058129 16.197944,7.06425278 15.4840676,6.87061133 C15.7526063,5.56602497 15.553978,4.39457888 14.6741232,3.39099301 C14.0928225,2.72839675 13.3468607,2.38110297 12.4987149,2.25313778 C10.7982832,1.99626646 9.12880789,3.08867523 8.63341322,4.75768012 C8.09050854,6.58644034 8.86516833,8.09197141 11.0123565,9.24310735 L11.247,9.365 L10.5058143,10.614349 C9.76988059,11.8550321 9.04880612,13.0716071 8.31651117,14.2813016 C8.06575584,14.6954008 7.94164842,15.0327208 8.14197041,15.5590718 C8.69504351,17.0131704 7.91483219,18.4282208 6.44850159,18.8123046 C5.06563064,19.1746531 3.71832649,18.2658179 3.44395406,16.7852794 C3.20082019,15.4748594 4.21776713,14.1902205 5.66264474,13.9853821 C5.78364712,13.9680692 5.90728408,13.9660933 6.11071111,13.9508503 L8.30851335,10.2654527 C6.92620695,8.89095595 6.10346602,7.2843341 6.28553415,5.29334619 C6.41425208,3.88601131 6.96770155,2.6697774 7.97919115,1.67296616 C9.91654658,-0.235973468 12.8721662,-0.545065872 15.153334,0.920135622 Z"
                    id="webhook"
                    fill="#8592A0"
                    fillRule="nonzero"
                />
            </g>
        </svg>
    );
};

Webhook.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
Webhook.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Webhook;
