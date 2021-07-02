import React from 'react';
import PropTypes from 'prop-types';

const PencilFilled = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="17px"
            height="17px"
            viewBox="0 0 17 17"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>{title}</title>
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="RecordSection"
                    transform="translate(-1011.000000, -102.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group" transform="translate(953.000000, 90.000000)">
                        <path
                            d="M58.9407331,24.7332297 L62.2667703,28.0592669 L58,29 L58.9407331,24.7332297 Z M69.0532461,13.814244 L73.1855872,17.9465851 L63.6106183,27.521554 L59.4782772,23.3892129 L69.0532461,13.814244 Z M72.0434109,12.000027 C72.8245364,12.0112437 73.5710009,12.3242855 74.1264122,12.8735878 C74.6726278,13.428356 74.9749305,14.1781002 74.9663135,14.9565891 C74.9853481,15.7271041 74.6807303,16.4704177 74.1264122,17.0059584 L74.1264122,17.0059584 L69.9940416,12.8399557 C70.5384566,12.2988847 71.275854,11.9967106 72.0434109,12.000027 Z"
                            id="Combined-Shape"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

PencilFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
PencilFilled.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default PencilFilled;
