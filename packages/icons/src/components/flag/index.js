import React from 'react';
import PropTypes from 'prop-types';

const Flag = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            height="512"
            width="512"
            viewBox="0 0 58 58"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="Page-1" fill="none" fillRule="evenodd">
                <g
                    id="037---Waypoint-Flag"
                    fill="currentColor"
                    fillRule="nonzero"
                    transform="translate(0 -1)"
                >
                    <path
                        id="Shape"
                        d="m14.678 58.9507 1.0678-.2984c1.0270794-.287091 1.6269982-1.3523947 1.34-2.3795l-12.2083-43.6888c-.17227193-.6165569-.58242107-1.139423-1.14021438-1.4535673-.5577933-.3141444-1.21753647-.3938324-1.83408562-.2215327l-.1379.0385c-1.28397381.3587434-2.0340279 1.6904218-1.6753 2.9744l12.2086 43.6888c.2870014 1.0271063 1.3522895 1.6270863 2.3794 1.3401z"
                    />
                    <path
                        id="Shape"
                        d="m57.67 28.42c-3.8715209-1.930437-7.4530885-4.3944478-10.64-7.32-.2678864-.245221-.3726619-.6216366-.27-.97 1.579074-5.9738125 2.7517572-12.04771023 3.51-18.18.12-1.02-.43-1.32-1.01-.62-11.38 13.61-31.07-2.49-42.79 9.88.14070884.2634479.25140182.5418575.33.83l7.92 28.36c11.74-12.22 31.36 3.78 42.72-9.8.58-.7.69-1.98.23-2.18z"
                    />
                </g>
            </g>
        </svg>
    );
};

Flag.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};
Flag.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Flag;
