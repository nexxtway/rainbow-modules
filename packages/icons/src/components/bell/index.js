import React from 'react';
import PropTypes from 'prop-types';

const Bell = (props) => {
    const { className, style, title } = props;
    return (
        <svg className={className} style={style} width="20px" height="24px" viewBox="0 0 20 24">
            <title>{title}</title>
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="functions/installed"
                    transform="translate(-1176.000000, -30.000000)"
                    fill="#6B7087"
                    fillRule="nonzero"
                >
                    <g id="Group-5" transform="translate(926.000000, 18.000000)">
                        <g id="Group-8" transform="translate(250.000000, 12.000000)">
                            <path
                                fill="currentColor"
                                fillRule="nonzero"
                                d="M13.674,21 C13.326,22.709 11.811,24 10,24 C8.189,24 6.674,22.709 6.326,21 L6.326,21 Z M10,0 C10.552,0 11,0.447 11,1 L11,1 L11,2.08 C14.386,2.568 17,5.481 17,9 L17,9 L17,11.788 C17,13.767 17.867,15.635 19.379,16.913 C19.777,17.254 20,17.738 20,18.25 C20,19.215 19.215,20 18.25,20 L18.25,20 L1.75,20 C0.785,20 0,19.215 0,18.25 C0,17.738 0.223,17.254 0.612,16.921 C2.133,15.635 3,13.767 3,11.788 L3,11.788 L3,9 C3,5.481 5.613,2.568 9,2.08 L9,2.08 L9,1 C9,0.447 9.448,0 10,0 Z"
                                id="Combined-Shape"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Bell.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

Bell.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Bell;
