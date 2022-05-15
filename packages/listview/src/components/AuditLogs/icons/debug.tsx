import React from 'react';
import PropTypes from 'prop-types';
import { IconProps } from '../types';

const Debug = (props: IconProps): JSX.Element => {
    const { className, style, title } = props;
    return (
        <svg className={className} style={style} width="18px" height="18px" viewBox="0 0 18 18">
            <title>{title}</title>
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="logs" transform="translate(-115.000000, -163.000000)" fill="#01B6F5">
                    <g id="debug" transform="translate(115.000000, 163.000000)">
                        <circle id="Oval" fillOpacity="0.2" cx="9" cy="9" r="9" />
                        <path
                            d="M11.5549032,7.1139957 C11.2610968,6.06130753 10.1493978,5.11795269 8.76858065,5.22633978 C7.40754839,5.33322151 6.56574194,6.38943656 6.41146237,7.1139957 L11.5549032,7.1139957 Z M9.52875269,13.8545978 C9.61326882,13.8339957 9.68926882,13.8201462 9.76234409,13.7969634 C10.934043,13.4255226 11.6928817,12.3938667 11.6954194,11.1660817 C11.6973978,10.2203183 11.6959355,9.27451183 11.6955914,8.32870538 C11.6955914,8.29094194 11.6917634,8.25313548 11.6896559,8.21416774 L9.52875269,8.21416774 L9.52875269,13.8545978 Z M8.42823656,8.21317849 C8.39851613,8.21029677 8.38092473,8.20711398 8.36329032,8.20711398 C7.69339785,8.2068129 7.02350538,8.20853333 6.35365591,8.2048302 C6.26036559,8.20431828 6.26062366,8.25137204 6.26066667,8.31803871 C6.26169892,9.28169462 6.2428172,10.2457806 6.2663871,11.2088344 C6.29498925,12.3756731 6.86926882,13.203329 7.92243011,13.6969634 C8.07791398,13.7698667 8.2496129,13.8081462 8.42823656,13.8672 L8.42823656,8.21317849 Z M5.48015054,12.7244043 C5.34552688,12.8664688 5.21683871,12.995028 5.09649462,13.1309849 C4.94354839,13.3038452 4.75941935,13.3806624 4.52634409,13.3727054 C4.20776344,13.3618237 3.88853763,13.371028 3.5696129,13.3695656 C3.24341935,13.3681032 2.99941935,13.1334796 3.00002039,12.8247484 C3.00062366,12.5147699 3.24294624,12.2843183 3.57176344,12.2828129 C3.81903226,12.2816516 4.0663871,12.2857806 4.31352688,12.2797591 C4.36436559,12.2785118 4.42664516,12.2555871 4.46268817,12.2208774 C4.68707527,12.0047054 4.90673118,11.7835441 5.12445161,11.5606194 C5.15356989,11.5307699 5.17894624,11.4816086 5.17898925,11.4413935 C5.17967742,10.7497806 5.17615054,10.0582108 5.17331183,9.36664086 C5.1731828,9.34190968 5.17077419,9.31722151 5.16806452,9.26780215 C5.12789247,9.30195269 5.09774194,9.32225376 5.07425806,9.34844731 C4.93356989,9.50530753 4.76075269,9.57270538 4.54866667,9.56745806 C4.22277419,9.55937204 3.89649462,9.56646882 3.5703871,9.56487742 C3.24354839,9.56328602 2.9995914,9.32930753 3.00002039,9.0207914 C3.0004086,8.71094194 3.24286022,8.47967312 3.57098925,8.47803871 C3.82187097,8.47683441 4.0727957,8.48070538 4.32350538,8.47502796 C4.37073118,8.47395269 4.42823656,8.44995269 4.46221505,8.41713548 C4.68354839,8.20294194 4.9075914,7.99051183 5.11266667,7.76130753 C5.17339785,7.69343656 5.18956989,7.57524301 5.20277419,7.47696344 C5.33197849,6.51425376 5.75576344,5.70986667 6.48410753,5.06642581 C6.49731183,5.05476989 6.50870968,5.04100645 6.53507527,5.01339355 C6.46595699,4.97752258 6.40531183,4.94302796 6.34221505,4.91386667 C6.1023871,4.80302796 5.98427957,4.61829677 5.98802151,4.35249032 C5.99150538,4.10169462 5.98733333,3.8508129 5.98926882,3.59993118 C5.99172043,3.28221075 6.22827957,3.04221075 6.53516129,3.04302491 C6.83511828,3.04375914 7.07133333,3.28444731 7.07572043,3.59524301 C7.07739785,3.71347957 7.08109677,3.8320172 7.07455914,3.94990968 C7.06995699,4.03244731 7.09387097,4.08117849 7.17331183,4.11554409 C7.30449462,4.17227527 7.4336129,4.23563011 7.55709677,4.30741505 C7.64019355,4.35575914 7.71352688,4.35167312 7.80023656,4.32294194 C8.5875914,4.06221075 9.37602151,4.06152258 10.1627312,4.32552258 C10.2463441,4.3536086 10.3158925,4.35459785 10.3952473,4.3096086 C10.5257849,4.2355871 10.662,4.17102796 10.7984731,4.10827527 C10.8592043,4.08036129 10.8840645,4.04388817 10.8816129,3.97653333 C10.8770968,3.85128602 10.8793763,3.72573763 10.8807097,3.60031828 C10.8840645,3.28242581 11.1200645,3.04203871 11.4266022,3.04302491 C11.7262151,3.04397419 11.9646667,3.28526452 11.9675914,3.5948129 C11.970043,3.8564043 11.9686667,4.1179957 11.9680215,4.37963011 C11.9674194,4.61249032 11.8629032,4.78324301 11.6573978,4.89227527 C11.5827312,4.93188817 11.5077634,4.97089892 11.4321935,5.01051183 C11.5870753,5.17292043 11.7393763,5.31864086 11.8757204,5.47808172 C12.365828,6.05137204 12.653914,6.7160172 12.7495269,7.46363011 C12.7703011,7.6259957 12.8149892,7.76487742 12.9487097,7.88061935 C13.1377419,8.04427527 13.3034194,8.23468387 13.485828,8.40651183 C13.5270753,8.44535054 13.5955484,8.47287742 13.6524086,8.47455484 C13.8994624,8.48190968 14.1468602,8.47661935 14.394129,8.47816774 C14.7121075,8.48014624 14.9558065,8.71537204 14.9569719,9.01902796 C14.958129,9.32393118 14.7164946,9.5623828 14.3992043,9.56461935 C14.065914,9.56698495 13.7325376,9.56044731 13.3993763,9.56711398 C13.1959355,9.57124301 13.0267742,9.50969462 12.8933548,9.35597419 C12.8675914,9.32633978 12.8490108,9.29046882 12.8271183,9.25743656 L12.7905591,9.27872688 C12.7881935,9.31154409 12.7838925,9.34436129 12.7837634,9.37722151 C12.7804516,10.0651785 12.7767097,10.7531785 12.7771398,11.4411785 C12.7771828,11.4813075 12.8031183,11.5302968 12.8322796,11.5601892 C13.0525376,11.7856086 13.2750323,12.0088774 13.5012258,12.2283613 C13.5327527,12.2589419 13.5877634,12.279243 13.6323656,12.2801032 C13.8866882,12.2850065 14.1412258,12.2813505 14.3956344,12.2828989 C14.7127097,12.2848774 14.9564086,12.5213935 14.9569719,12.8251785 C14.9575269,13.1299957 14.7152473,13.3675871 14.3977419,13.3693935 C14.0465591,13.371329 13.6953333,13.3690495 13.3441505,13.3701677 C13.1811398,13.3706839 13.0442796,13.3124473 12.929828,13.1977806 C12.8033333,13.071028 12.6765806,12.9445763 12.5495699,12.8183398 C12.5249247,12.7938237 12.4986022,12.7709419 12.4675914,12.7422538 C11.7343871,14.1719312 10.5915054,14.9904688 8.97868817,14.9896093 C7.36991398,14.9887054 6.22767742,14.1748559 5.48015054,12.7244043 L5.48015054,12.7244043 Z"
                            id="Fill-1"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

Debug.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

Debug.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Debug;