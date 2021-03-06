import React from 'react';
import PropTypes from 'prop-types';

const LocationPinFilled = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="28px"
            height="30px"
            viewBox="0 0 28 30"
        >
            <title>{title}</title>
            <g id="Variant-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="dispatch/rides-calendar-with-rides-completed-and-assigned"
                    transform="translate(-36.000000, -214.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-8" transform="translate(12.000000, 11.000000)">
                        <path
                            d="M44.4421892,222.400908 C48.7290546,223.22275 52,224.909785 52,227.41123 C52,231.080099 44.9568569,233 38.0003049,233 C31.0437529,233 24,231.080718 24,227.41123 C24,224.909785 27.2715552,223.22275 31.5578108,222.400908 C31.9950345,223.116226 32.4712851,223.861272 32.9877823,224.635425 C28.6442058,225.295004 26.4214997,226.70768 26.4214997,227.410611 C26.4214997,228.346408 30.3607814,230.540669 38.0003049,230.540669 C45.6392186,230.540669 49.5778905,228.346408 49.5778905,227.410611 C49.5778905,226.708299 47.3551844,225.295004 43.0128275,224.635425 C43.5287149,223.861272 44.0049655,223.116226 44.4421892,222.400908 Z M38.0003049,203 C42.5219418,203 46.1880349,206.72275 46.1880349,211.315648 C46.1880349,214.609827 41.9755646,223.056152 39.5943115,226.357143 C39.222336,226.873658 38.6302241,227.177746 38.0009147,227.177746 C37.3716053,227.177746 36.7794934,226.873658 36.4056885,226.357143 C34.0238256,223.056152 29.8125749,214.609207 29.8125749,211.315648 C29.8125749,206.72275 33.4774484,203 38.0003049,203 Z M38.0003049,207.693229 C36.1190844,207.693229 34.5945946,209.241536 34.5945946,211.151528 C34.5945946,213.062139 36.1190844,214.610446 38.0003049,214.609827 C39.8809156,214.609827 41.4054054,213.061519 41.4054054,211.151528 C41.4054054,209.241536 39.8809156,207.693229 38.0003049,207.693229 Z"
                            id="rides-filled"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

LocationPinFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

LocationPinFilled.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default LocationPinFilled;
