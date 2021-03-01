import React from 'react';
import PropTypes from 'prop-types';

const Function = (props) => {
    const { className, style } = props;
    return (
        <svg width="48px" height="35px" viewBox="0 0 48 35" className={className} style={style}>
            <g id="marketplace" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="marketplace-copy-7"
                    transform="translate(-31.000000, -268.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <path
                        d="M66.8606682,268.140736 C69.1555646,268.352292 70.8312168,269.105477 72.0091026,270.703321 C72.6637749,271.591495 73.0314982,272.577088 73.0822264,273.63715 L73.0822264,273.63715 L73.2137593,276.878731 L73.2885018,278.481179 L73.343781,279.354833 C73.4507613,280.700029 73.6845728,281.717854 74.1455911,282.637901 C74.6056202,283.55584 75.3451745,284.100458 76.3840827,284.300573 C76.4172548,284.306957 76.4497431,284.313024 76.4821694,284.318871 L76.4821694,284.318871 L76.7891225,284.368161 L77.8361508,284.501419 C78.4285007,284.581446 78.8196222,284.985463 78.816178,285.565278 C78.8127023,286.142238 78.4146007,286.556726 77.8362236,286.650032 L77.8362236,286.650032 L77.6751187,286.675163 L76.7872683,286.801663 L76.4523657,286.857003 C76.4020058,286.866157 76.354006,286.875359 76.3078134,286.884733 L76.3078134,286.884733 L76.0479212,286.944024 L75.8048644,287.013375 C74.8553674,287.311196 74.242041,288.030123 73.8443591,289.201498 C73.5848198,289.966039 73.4391399,290.672077 73.3424622,291.657686 L73.3424622,291.657686 L73.2979065,292.175353 L73.2597164,292.749006 C73.2537817,292.849802 73.2480372,292.953322 73.2424453,293.059762 L73.2424453,293.059762 L73.2047145,293.872275 L73.1405859,296.10114 L73.1133757,296.796427 L73.0769641,297.409929 C72.8985102,299.979591 71.2050596,302.012837 68.709638,302.657999 C68.6010823,302.686069 68.4945655,302.711328 68.385006,302.734853 L68.385006,302.734853 L68.0421171,302.801309 C67.9817537,302.811878 67.9193591,302.822284 67.8542981,302.832661 L67.8542981,302.832661 L67.4268542,302.895658 L66.6835177,302.994508 C66.441051,303.027682 66.1994066,302.96989 65.950769,302.857673 C65.5151368,302.660666 65.2739033,302.240072 65.3359043,301.76543 C65.3980035,301.289192 65.7086015,300.926918 66.1981833,300.851849 L66.1981833,300.851849 L66.3521553,300.829029 L67.2771599,300.703669 L67.551555,300.658206 C68.7895149,300.43387 69.6755782,299.915043 70.2791032,299.000608 C70.7219464,298.32958 70.8986294,297.56542 70.9356513,296.436571 L70.9356513,296.436571 L70.9450857,296.13883 L70.9928441,294.372673 L71.0336999,293.027449 L71.0812626,291.985723 C71.1839773,290.355194 71.458784,289.029803 72.0083581,287.799761 C72.408021,286.905192 72.9713011,286.174657 73.7065736,285.620322 L73.7065736,285.620322 L73.7699353,285.575065 L73.5403408,285.397954 C72.7205132,284.726609 72.1428826,283.822646 71.7373505,282.672463 L71.7373505,282.672463 L71.6395123,282.379779 C71.4060948,281.642863 71.2681478,280.97884 71.1737359,280.108642 L71.1737359,280.108642 L71.126244,279.611864 L71.0855141,279.064128 L71.0496734,278.455369 L71.016849,277.775523 L70.9480835,275.882935 L70.9079579,274.885694 L70.8722128,274.260593 L70.8387705,273.813466 C70.712525,272.268751 69.883194,271.238349 68.3758472,270.715329 C68.3433396,270.704051 68.3112444,270.693404 68.2790405,270.683267 L68.2790405,270.683267 L68.0803424,270.627567 C68.0456186,270.618974 68.0097435,270.610645 67.9721959,270.602457 L67.9721959,270.602457 L67.7226702,270.554031 L66.7251456,270.398355 L66.2245197,270.301406 C66.0365127,270.257092 65.8957896,270.20256 65.7543938,270.107244 C65.3660112,269.845708 65.2590951,269.386218 65.3934676,268.936619 C65.5206687,268.5115 65.8413162,268.239159 66.274789,268.168773 C66.3828991,268.15127 66.4626268,268.146916 66.6344794,268.143562 L66.6344794,268.143562 Z M43.2819387,268.140736 L43.5081274,268.143562 C43.67998,268.146916 43.7597078,268.15127 43.8678178,268.168773 C44.3012906,268.239159 44.6219382,268.5115 44.7491393,268.936619 C44.8835118,269.386218 44.7765956,269.845708 44.3882131,270.107244 C44.2468172,270.20256 44.1060941,270.257092 43.9180872,270.301406 L43.4174612,270.398355 L42.4199366,270.554031 L42.1704109,270.602457 C42.1328633,270.610645 42.0969882,270.618974 42.0622644,270.627567 L41.8635663,270.683267 C41.8313624,270.693404 41.7992673,270.704051 41.7667596,270.715329 C40.2594128,271.238349 39.4300819,272.268751 39.3038363,273.813466 L39.2703941,274.260593 L39.234649,274.885694 L39.1945233,275.882935 L39.1257578,277.775523 L39.0929334,278.455369 L39.0570928,279.064128 L39.0163629,279.611864 L38.9688709,280.108642 C38.8744591,280.97884 38.736512,281.642863 38.5030945,282.379779 L38.4052563,282.672463 C37.9997242,283.822646 37.4220937,284.726609 36.602266,285.397954 L36.3726716,285.575065 L36.4360333,285.620322 C37.1713058,286.174657 37.7345859,286.905192 38.1342487,287.799761 C38.6838228,289.029803 38.9586295,290.355194 39.0613442,291.985723 L39.1089069,293.027449 L39.1497627,294.372673 L39.1975211,296.13883 L39.2069555,296.436571 C39.2439775,297.56542 39.4206605,298.32958 39.8635036,299.000608 C40.4670287,299.915043 41.3530919,300.43387 42.5910518,300.658206 L42.865447,300.703669 L43.7904515,300.829029 L43.9444235,300.851849 C44.4340054,300.926918 44.7446034,301.289192 44.8067026,301.76543 C44.8687035,302.240072 44.62747,302.660666 44.1918379,302.857673 C43.9432003,302.96989 43.7015558,303.027682 43.4590891,302.994508 L42.7157527,302.895658 L42.2883087,302.832661 C42.2232478,302.822284 42.1608532,302.811878 42.1004897,302.801309 L41.7576009,302.734853 C41.6480413,302.711328 41.5415246,302.686069 41.4329689,302.657999 C38.9375472,302.012837 37.2440966,299.979591 37.0656427,297.409929 L37.0292312,296.796427 L37.0020209,296.10114 L36.9378923,293.872275 L36.9001615,293.059762 C36.8945697,292.953322 36.8888252,292.849802 36.8828905,292.749006 L36.8447003,292.175353 L36.8001447,291.657686 C36.7034669,290.672077 36.557787,289.966039 36.2982478,289.201498 C35.9005659,288.030123 35.2872394,287.311196 34.3377424,287.013375 L34.0946856,286.944024 L33.8347935,286.884733 C33.7886009,286.875359 33.7406011,286.866157 33.6902412,286.857003 L33.3553385,286.801663 L32.4674881,286.675163 L32.3063833,286.650032 C31.7280061,286.556726 31.3299045,286.142238 31.3264289,285.565278 C31.3229846,284.985463 31.7141061,284.581446 32.306456,284.501419 L33.3534843,284.368161 L33.6604375,284.318871 C33.6928638,284.313024 33.725352,284.306957 33.7585241,284.300573 C34.7974323,284.100458 35.5369867,283.55584 35.9970158,282.637901 C36.458034,281.717854 36.6918455,280.700029 36.7988259,279.354833 L36.8541051,278.481179 L36.9288475,276.878731 L37.0603804,273.63715 C37.1111087,272.577088 37.478832,271.591495 38.1335043,270.703321 C39.3113901,269.105477 40.9870422,268.352292 43.2819387,268.140736 Z M61.17537,283.478465 C62.1982174,283.463698 62.9877493,284.230095 62.9902145,285.23916 C62.9921794,286.215738 62.2823882,286.923561 61.277261,286.94768 C60.2199577,286.972783 59.4638973,286.242811 59.4781719,285.210611 C59.4919542,284.229111 60.2135588,283.492739 61.17537,283.478465 Z M54.7823384,283.47748 C55.7549786,283.504061 56.4381895,284.22665 56.4386828,285.230792 C56.4396662,286.245764 55.7781133,286.921099 54.759696,286.946203 C53.6841803,286.973276 52.9665135,286.277759 52.9724203,285.214549 C52.9778348,284.198101 53.7575221,283.449916 54.7823384,283.47748 Z M48.214074,283.478957 C49.2009888,283.45976 49.9225934,284.141002 49.967386,285.133332 C50.015132,286.202448 49.3299522,286.931928 48.2637889,286.946203 C47.2379881,286.960478 46.5414871,286.314676 46.5016168,285.31201 C46.4607619,284.288178 47.19861,283.498646 48.214074,283.478957 Z"
                        id="function"
                    />
                </g>
            </g>
        </svg>
    );
};

Function.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Function.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Function;
