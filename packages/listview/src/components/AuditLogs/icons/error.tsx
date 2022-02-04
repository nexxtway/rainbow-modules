import React from 'react';
import PropTypes from 'prop-types';
import { IconProps } from '../types';

const Error = (props: IconProps): JSX.Element => {
    const { className, style, title } = props;
    return (
        <svg className={className} style={style} width="18px" height="18px" viewBox="0 0 18 18">
            <title>{title}</title>
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="logs" transform="translate(-115.000000, -204.000000)">
                    <g id="Group-10-Copy" transform="translate(80.000000, 193.000000)">
                        <g id="error" transform="translate(35.000000, 11.000000)">
                            <circle
                                id="Oval"
                                fillOpacity="0.2"
                                fill="#FE4849"
                                cx="9"
                                cy="9"
                                r="9"
                            />
                            <path
                                d="M8.8522921,12.3944047 C9.45793531,12.3944047 9.95748043,12.8939499 9.93095591,13.5261176 C9.95748043,14.1008155 9.43141079,14.6047814 8.8522921,14.6047814 C8.25106965,14.6047814 7.74710377,14.1008155 7.74710377,13.4995931 C7.74710377,12.8983706 8.25106965,12.3944047 8.8522921,12.3944047 Z M8.57820539,4.63598264 C9.10427504,4.51220155 9.63034469,4.76418449 9.85580311,5.25930886 C9.93095591,5.436139 9.95748043,5.61296913 9.95748043,5.81190303 C9.93095591,6.3644972 9.88232763,6.91709136 9.85580311,7.46968553 L9.85580311,7.46968553 L9.70549749,10.0293017 C9.67897297,10.3078092 9.67897297,10.5597921 9.67897297,10.8338788 C9.65686921,11.2892164 9.30320894,11.6384559 8.8522921,11.6384559 C8.40137526,11.6384559 8.05213575,11.3113202 8.02561123,10.8604033 C7.95045842,9.52975658 7.87530561,8.22563435 7.80015281,6.8949876 C7.77362829,6.54574808 7.75152452,6.19208782 7.725,5.8428483 C7.725,5.26372962 8.05213575,4.78628826 8.57820539,4.63598264 Z"
                                id="Combined-Shape"
                                fill="#FF5A5B"
                                fillRule="nonzero"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Error.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

Error.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Error;
