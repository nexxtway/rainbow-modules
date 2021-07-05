import React from 'react';
import PropTypes from 'prop-types';

const OneFilled = (props) => {
    const { className, style, title } = props;
    return (
        <svg className={className} style={style} width="81px" height="201px" viewBox="0 0 81 201">
            <title>{title}</title>
            <g
                id="column-customization"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
            >
                <polygon
                    id="one"
                    fill="currentColor"
                    fillRule="nonzero"
                    points="40.66625 200.333 80.6664375 200.333 80.6664375 0.333 0.667 0.333 0.667 40.3331875 40.66625 40.3331875"
                />
            </g>
        </svg>
    );
};

OneFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
OneFilled.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default OneFilled;
