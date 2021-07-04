import React from 'react';
import PropTypes from 'prop-types';

const Email = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="20px"
            height="14px"
            viewBox="0 0 20 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>{title}</title>
            <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="auth/users-details-loading-metadata"
                    transform="translate(-286.000000, -552.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-22" transform="translate(178.271589, 401.000000)">
                        <g id="Group-17" transform="translate(0.728411, 149.000000)">
                            <path
                                d="M125.161111,2 L108.75,2 C107.783106,2 107,2.78796667 107,3.75 L107,14.25 C107,15.21775 107.788861,16 108.75,16 L125.161111,16 C126.119917,16 126.911111,15.2210556 126.911111,14.25 L126.911111,3.75 C126.911111,2.78967778 126.131117,2 125.161111,2 Z M124.916033,3.16666667 C124.558489,3.52230556 118.40545,9.64295 118.193,9.85427222 C117.862444,10.1848278 117.423,10.3668278 116.955556,10.3668278 C116.488111,10.3668278 116.048667,10.1847889 115.717022,9.85318333 C115.574144,9.71104444 109.489006,3.65798889 108.995078,3.16666667 L124.916033,3.16666667 Z M108.166667,14.0125444 L108.166667,3.98819444 L113.208144,9.00311111 L108.166667,14.0125444 Z M108.995817,14.8333333 L114.035311,9.82588333 L114.893161,10.6792222 C115.444061,11.2301222 116.176494,11.5334944 116.955556,11.5334944 C117.734617,11.5334944 118.46705,11.2301222 119.016861,10.6803111 L119.8758,9.82588333 L124.915294,14.8333333 L108.995817,14.8333333 Z M125.744444,14.0125444 L120.702967,9.00311111 L125.744444,3.98819444 L125.744444,14.0125444 Z"
                                id="email"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Email.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};
Email.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Email;
