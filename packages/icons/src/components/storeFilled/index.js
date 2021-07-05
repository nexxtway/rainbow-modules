import React from 'react';
import PropTypes from 'prop-types';

const StoreFilled = (props) => {
    const { className, style, title } = props;
    return (
        <svg width="48px" height="38px" viewBox="0 0 48 38" className={className} style={style}>
            <title>{title}</title>
            <g id="marketplace" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="marketplace-copy-7"
                    transform="translate(-30.000000, -144.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <path
                        d="M72.9415141,144.411607 C73.3475929,144.411607 73.714306,144.642347 73.8926178,144.99958 L73.9403103,145.110441 L77.5483829,155.001716 C77.5909512,155.118441 77.6127447,155.241739 77.6127447,155.365992 C77.6127447,156.269575 77.4353328,157.14794 77.0857236,157.974565 C76.7482762,158.772386 76.264918,159.489359 75.6501281,160.104149 C75.239248,160.515029 74.7826223,160.867299 74.2866021,161.156542 L73.966,161.331 L73.966145,177.027249 C73.966145,177.466092 73.9045415,177.896432 73.7826497,178.311458 L73.7022906,178.558582 L73.6075255,178.801703 C73.3779777,179.34437 73.0491459,179.832171 72.631201,180.250116 C72.2132228,180.668094 71.7254445,180.996923 71.182767,181.226475 C70.7007169,181.430356 70.1927187,181.548196 69.6705467,181.577703 L69.4083341,181.585086 L38.5900897,181.585086 C37.975775,181.585086 37.3780402,181.464333 36.8156356,181.226466 C36.2729793,180.996923 35.785201,180.668094 35.3672228,180.250116 C34.9492642,179.832158 34.6204331,179.344346 34.3909233,178.801702 C34.1870204,178.319658 34.0691715,177.811657 34.0396616,177.289482 L34.0322789,177.027268 L34.031,161.329 L33.8950152,161.259525 C33.5168364,161.054693 33.1603196,160.814313 32.8280934,160.540257 L32.5835194,160.328429 L32.3483008,160.104149 C31.7335109,159.489359 31.2501527,158.772386 30.9127066,157.974568 C30.5630893,157.147989 30.3856842,156.269623 30.3856842,155.365992 C30.3856842,155.283157 30.3953702,155.200746 30.4144442,155.120413 L30.4500591,155.00168 L34.0581123,145.110458 C34.1972593,144.728953 34.5397058,144.463531 34.9364211,144.418425 L35.0569148,144.411607 L72.9415141,144.411607 Z M42.724,158.986 L42.6845897,159.050714 C42.4357575,159.428208 42.1483756,159.780388 41.8246069,160.104157 C41.2097915,160.718945 40.492813,161.202313 39.6950208,161.539749 C38.868406,161.889354 37.9900408,162.066766 37.0864578,162.066766 C36.876775,162.066766 36.6683562,162.057212 36.4615375,162.038146 L36.157,162.003 L36.1586465,177.027249 C36.1586465,178.313909 37.1642883,179.371024 38.4304825,179.453534 L38.59006,179.458718 L39.952,179.458 L39.9530559,168.957388 C39.9530559,168.246321 40.2056584,167.571854 40.6671347,167.039528 L40.8118001,166.8842 C41.3146217,166.381379 41.9701564,166.083072 42.6728655,166.03299 L42.8849879,166.025456 L48.5446266,166.025456 C49.3268518,166.025456 50.0647434,166.331099 50.6178144,166.8842 C51.120636,167.387022 51.4189424,168.042557 51.4690244,168.745296 L51.4765586,168.957428 L51.475,179.458 L69.4083341,179.458718 C70.6949973,179.458718 71.7521087,178.453073 71.8346189,177.186806 L71.84,177.02722 L71.84,162.003 L71.5368872,162.038146 C71.4334787,162.047679 71.3296703,162.054834 71.2255036,162.059606 L70.9119711,162.066766 C70.0083719,162.066766 69.1300314,161.889357 68.3033982,161.539744 C67.5056049,161.202309 66.7886253,160.718935 66.1738396,160.104149 C65.850083,159.780392 65.5627058,159.42822 65.3138696,159.050729 L65.274,158.987 L65.2349502,159.050697 C65.0483231,159.333816 64.8400092,159.6027 64.6109238,159.856039 L64.3749485,160.104149 C63.7601549,160.718943 63.0431714,161.202315 62.2453545,161.539749 C61.4187397,161.889354 60.5403745,162.066766 59.6367915,162.066766 C58.7331878,162.066766 57.8548456,161.889355 57.0282498,161.539747 C56.2304371,161.202315 55.5134536,160.718943 54.89866,160.104149 C54.5748907,159.78038 54.2875105,159.428207 54.0386763,159.050719 L53.999,158.987 L53.9597739,159.050715 C53.7731484,159.333834 53.5648363,159.602712 53.3357484,159.856045 L53.0997689,160.104149 C52.4849753,160.718943 51.7679918,161.202315 50.9701804,161.539746 C50.1435886,161.889353 49.2652214,162.066766 48.3616119,162.066766 C47.4580244,162.066766 46.5796575,161.889352 45.7530702,161.539747 C44.9552575,161.202315 44.238274,160.718943 43.6234804,160.104149 C43.2997053,159.780374 43.0123149,159.428189 42.7634787,159.050697 L42.724,158.986 Z M48.5446266,168.151824 L42.8849879,168.151824 C42.4753673,168.151824 42.1355714,168.460111 42.0857188,168.856592 L42.0794236,168.957422 L42.078,179.458 L49.349,179.458 L49.3501909,168.957388 C49.3501909,168.547758 49.0419171,168.20797 48.6454526,168.158119 L48.5446266,168.151824 Z M65.0179001,164.024885 C66.5858037,164.024885 67.8953138,165.2075 68.0631929,166.75675 L68.0631929,166.75675 L68.0719388,166.864662 L68.0810712,167.088056 L68.0810712,172.936803 C68.0810712,174.504693 66.8984715,175.814232 65.3492175,175.98212 L65.3492175,175.98212 L65.1254557,175.997106 L65.0179001,176 L57.0631711,176 C55.4952546,176 54.1857552,174.817351 54.0178782,173.268108 L54.0178782,173.268108 L54.0091323,173.160197 L54,172.936803 L54,167.088056 C54,165.520153 55.1826147,164.210642 56.7318653,164.042763 L56.7318653,164.042763 L56.839777,164.034017 L57.0631711,164.024885 Z M65.0179001,166.024885 L57.0631711,166.024885 L56.9473269,166.031124 C56.4146471,166.088846 56,166.540028 56,167.088056 L56,167.088056 L56,172.936803 L56.0062385,173.052648 C56.0639602,173.585329 56.5151408,174 57.0631711,174 L57.0631711,174 L65.0179001,174 L65.1337447,173.993761 C65.666426,173.936036 66.0810712,173.48483 66.0810712,172.936803 L66.0810712,172.936803 L66.0810712,167.088056 L66.0748327,166.972212 C66.0171107,166.439532 65.5659284,166.024885 65.0179001,166.024885 L65.0179001,166.024885 Z"
                        id="store-filled"
                    />
                </g>
            </g>
        </svg>
    );
};

StoreFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
StoreFilled.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default StoreFilled;
