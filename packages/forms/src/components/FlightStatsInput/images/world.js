import React from 'react';
import PropTypes from 'prop-types';

const World = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="51px"
            height="52px"
            viewBox="0 0 51 52"
        >
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="FlightStatsInput-not-results"
                    transform="translate(-552.000000, -261.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-2" transform="translate(427.000000, 261.029412)">
                        <path
                            d="M138.473684,0 L144.654,9.889 L144.842337,9.81030539 C146.609666,8.99917686 148.473096,8.43321156 150.393408,8.1255791 L150.971169,8.04105251 C151.365134,7.98904102 151.725575,8.26557359 151.777682,8.6588686 C151.829789,9.05216362 151.553161,9.41327474 151.159866,9.46538201 C149.294157,9.71260424 147.481513,10.2195008 145.762452,10.9722786 C145.649747,11.0248276 145.5386,11.0770284 145.429012,11.1288808 L146.894737,13.4736842 L156.157895,13.4736842 C157.505263,13.4736842 158.684211,14.6526316 158.684211,16 C158.684211,17.3473684 157.505263,18.5263158 156.157895,18.5263158 L156.157895,18.5263158 L146.894737,18.5263158 L138.473684,32 L135.105263,32 L139.315789,18.5263158 L136.897243,18.5259329 C134.801651,21.774427 133.695211,25.5379214 133.695211,29.4251521 C133.695211,30.8042709 133.834866,32.1513973 134.100287,33.453313 L134.100287,33.453313 L141.677395,33.453313 C143.364751,33.453313 144.942337,34.2048456 146.005556,35.5150947 C147.068774,36.8253437 147.479215,38.5238111 147.131705,40.1750563 L147.131705,40.1750563 L145.533046,47.7701713 C148.064464,48.9195966 150.873946,49.5603054 153.830364,49.5603054 C154.5909,49.5603054 155.341284,49.5164357 156.080172,49.4338686 L156.080172,49.4338686 L154.622031,42.9606885 C154.209195,41.1277383 154.645402,39.2349222 155.818966,37.7676809 C156.992529,36.3004395 158.743199,35.4588686 160.622126,35.4588686 L160.622126,35.4588686 L162.240421,35.4588686 C162.637165,35.4588686 162.958812,35.7805161 162.958812,36.1772594 C162.958812,36.5740027 162.637165,36.8956502 162.240421,36.8956502 L162.240421,36.8956502 L160.622126,36.8956502 C159.182184,36.8956502 157.840517,37.5405736 156.941092,38.6650947 C156.041667,39.7896157 155.70728,41.2402862 156.023755,42.6450755 L156.023755,42.6450755 L157.505556,49.2231406 C164.353257,47.9550372 169.995785,43.2108801 172.527969,36.895746 L172.527969,36.895746 L165.113985,36.895746 C164.717241,36.895746 164.395594,36.5740985 164.395594,36.1773552 C164.395594,35.7806119 164.717241,35.4589644 165.113985,35.4589644 L165.113985,35.4589644 L173.041667,35.4589644 C173.641571,33.5532173 173.965613,31.5264931 173.965613,29.4252479 C173.965613,28.2110717 173.857567,27.0217039 173.65067,25.8661483 C171.569444,27.7958418 168.836207,28.8808993 165.962835,28.8808993 L165.962835,28.8808993 L162.811782,28.8808993 C161.847414,28.8808993 161.062931,29.665382 161.062931,30.6297498 L161.062931,30.6297498 L161.062931,30.8038878 C161.062931,31.8956502 160.174713,32.7837728 159.083046,32.7837728 L159.083046,32.7837728 L154.764559,32.7837728 C153.672797,32.7837728 152.784674,31.8956502 152.784674,30.8038878 L152.784674,30.8038878 L152.784674,26.4854012 C152.784674,25.3936387 153.672797,24.5055161 154.764559,24.5055161 L154.764559,24.5055161 L154.98046,24.5055161 C155.79272,24.5055161 156.492146,23.953792 156.681226,23.1637537 C157.278544,20.6686387 158.638218,18.4842517 160.613314,16.8467039 C162.443103,15.329654 164.636686,14.4199797 166.987165,14.1950755 C163.455747,11.1402862 158.855172,9.28999887 153.830364,9.28999887 C153.433621,9.28999887 153.111973,8.96835136 153.111973,8.57160807 C153.111973,8.17486477 153.433621,7.85321726 153.830364,7.85321726 C159.592529,7.85321726 165.009674,10.097087 169.0841,14.1715123 C173.158525,18.2459376 175.40249,23.6630832 175.40249,29.4251521 C175.40249,35.1873169 173.158621,40.6044625 169.084195,44.6788878 C165.00977,48.753313 159.592529,50.9971828 153.83046,50.9971828 C148.068391,50.9971828 142.651149,48.7532173 138.576724,44.6788878 C134.502299,40.6044625 132.258429,35.1872211 132.258429,29.4251521 C132.258429,25.4923935 133.316667,21.6777383 135.32567,18.3334855 L135.212,18.526 L130.052632,18.5263158 L127.526316,21.8947368 L125,21.8947368 L126.684211,16 L125,10.1052632 L127.526316,10.1052632 L130.052632,13.4736842 L138.886398,13.4724621 C138.987819,13.3701273 139.08544,13.277083 139.179262,13.1933292 C139.191677,13.1822458 139.204125,13.1711749 139.216604,13.1601164 L135.105263,0 L138.473684,0 Z M141.677395,34.8901904 L134.449234,34.8901904 C135.933429,40.1465123 139.503257,44.5366464 144.204598,47.106474 L144.204598,47.106474 L145.725766,39.8792709 C145.983621,38.6536962 145.679023,37.3929682 144.889847,36.4204586 C144.10067,35.4479491 142.929789,34.8901904 141.677395,34.8901904 L141.677395,34.8901904 Z M168.408333,15.5496732 L167.619349,15.5880832 C165.369732,15.6974701 163.264272,16.5150947 161.530364,17.9526426 C159.796552,19.3901904 158.602874,21.3077192 158.078544,23.4981406 C157.7341,24.9371253 156.460153,25.9422019 154.98046,25.9422019 L154.98046,25.9422019 L154.764559,25.9422019 C154.465134,25.9422019 154.221456,26.1858801 154.221456,26.4853054 L154.221456,26.4853054 L154.221456,30.803792 C154.221456,31.103313 154.465134,31.3468954 154.764559,31.3468954 L154.764559,31.3468954 L159.083046,31.3468954 C159.382567,31.3468954 159.626149,31.103313 159.626149,30.803792 L159.626149,30.803792 L159.626149,30.629654 C159.626149,28.8730449 161.055172,27.4440219 162.811782,27.4440219 L162.811782,27.4440219 L165.962835,27.4440219 C168.759195,27.4440219 171.404215,26.2675851 173.277586,24.2036004 C173.257663,24.1295583 171.473372,17.9664357 168.408333,15.5496732 L168.408333,15.5496732 Z"
                            id="Combined-Shape"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

World.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
World.defaultProps = {
    className: undefined,
    style: undefined,
};

export default World;
