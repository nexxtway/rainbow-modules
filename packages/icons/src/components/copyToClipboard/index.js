import React from 'react';
import PropTypes from 'prop-types';

const CopyToClipboard = (props) => {
    const { className, style, title } = props;

    return (
        <svg
            className={className}
            style={style}
            width="10px"
            height="10px"
            viewBox="0 0 10 10"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>{title}</title>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="auth/users-details-copy"
                    transform="translate(-433.000000, -405.000000)"
                    fillRule="nonzero"
                >
                    <g id="Group-20" transform="translate(178.271589, 400.000000)">
                        <g id="Group-18" transform="translate(107.728411, 0.000000)">
                            <g id="Group-19" transform="translate(4.000000, 0.000000)">
                                <g id="Group-15" transform="translate(138.000000, 0.000000)">
                                    <g
                                        id="copy_to_clipboard"
                                        transform="translate(5.000000, 5.000000)"
                                    >
                                        <rect
                                            id="Rectangle-5"
                                            x="0"
                                            y="0"
                                            width="10"
                                            height="9.3559322"
                                        />
                                        <path
                                            d="M3.65625,2.57288136 L6.359375,2.57288136 C6.5,2.57288136 6.609375,2.47055085 6.609375,2.33898305 L6.609375,1.87118644 C6.609375,1.49110169 6.28125,1.16949153 5.875,1.16949153 L4.15625,1.16949153 C3.75,1.16949153 3.421875,1.49110169 3.421875,1.87118644 L3.421875,2.33898305 C3.40625,2.47055085 3.515625,2.57288136 3.65625,2.57288136 L3.65625,2.57288136 Z M7.703125,1.75423729 L7.453125,1.75423729 C7.375,1.75423729 7.328125,1.79809322 7.328125,1.87118644 L7.328125,2.33898305 C7.328125,2.85063559 6.890625,3.27457627 6.34375,3.27457627 L3.65625,3.27457627 C3.109375,3.27457627 2.671875,2.85063559 2.671875,2.33898305 L2.671875,1.87118644 C2.671875,1.79809322 2.625,1.75423729 2.546875,1.75423729 L2.296875,1.75423729 C1.890625,1.75423729 1.5625,2.07584746 1.5625,2.4559322 L1.5625,7.48474576 C1.5625,7.86483051 1.890625,8.18644068 2.296875,8.18644068 L7.703125,8.18644068 C8.109375,8.18644068 8.4375,7.86483051 8.4375,7.48474576 L8.4375,2.4559322 C8.4375,2.07584746 8.109375,1.75423729 7.703125,1.75423729 L7.703125,1.75423729 Z"
                                            id="Shape"
                                            fill="currentColor"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

CopyToClipboard.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

CopyToClipboard.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default CopyToClipboard;
