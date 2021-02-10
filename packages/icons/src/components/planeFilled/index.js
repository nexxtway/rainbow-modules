import React from 'react';
import PropTypes from 'prop-types';

const PlaneFilled = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            version="1.1"
        >
            <g id="custom-fields" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="dispatch/rides-show-custom-Fields-show-fight-info"
                    transform="translate(-448.000000, -1262.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-37" transform="translate(250.000000, 876.000000)">
                        <g id="Group-64" transform="translate(0.000000, 269.000000)">
                            <g id="Group-50" transform="translate(0.000000, 81.000000)">
                                <g id="Group-46" transform="translate(12.500000, 20.000000)">
                                    <path
                                        d="M205.5,25.5294118 C205.5,24.7294118 204.8,24.0294118 204,24.0294118 L198.5,24.0294118 L193.5,16.0294118 L191.5,16.0294118 L194,24.0294118 L188.5,24.0294118 L187,22.0294118 L185.5,22.0294118 L186.5,25.5294118 L185.5,29.0294118 L187,29.0294118 L188.5,27.0294118 L194,27.0294118 L191.5,35.0294118 L193.5,35.0294118 L198.5,27.0294118 L204,27.0294118 C204.8,27.0294118 205.5,26.3294118 205.5,25.5294118 Z"
                                        id="Path"
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

PlaneFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
PlaneFilled.defaultProps = {
    className: undefined,
    style: undefined,
};

export default PlaneFilled;
