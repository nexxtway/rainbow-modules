import React from 'react';
import PropTypes from 'prop-types';

const UserFilled = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            width="13px"
            height="14px"
            viewBox="0 0 13 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            style={style}
        >
            <title>{title}</title>
            <title>Path</title>
            <g id="Groups" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="contacts_groups-details-with-contacts-with-options"
                    transform="translate(-1260.000000, -502.000000)"
                    fill="currentColor"
                >
                    <g id="Group-16" transform="translate(1248.000000, 449.000000)">
                        <path
                            d="M16.2248932,62.0068496 C14.8073566,60.317662 14.4586391,58.4349362 14.661244,56.3893593 C14.8840744,54.1366443 16.0181038,53.0162149 18.1700395,53.0001739 C20.3599854,52.9837842 21.5881684,54.125834 21.7991425,56.3743645 C22.0041884,58.5698899 21.7569477,59.5218887 20.3122111,62.0169624 C21.2317791,62.286521 22.1450703,62.5271361 23.0402281,62.8228485 C24.2028522,63.2064378 24.8507694,64.7160358 24.2718983,65.8082191 C24.1229959,66.0896341 23.6483914,66.3462902 23.31432,66.3581466 C20.8781796,66.4446285 18.4399468,66.4840336 16.0020627,66.4997259 C15.0162384,66.5056541 14.0300653,66.4139414 13.0435435,66.3693055 C12.3694725,66.3382697 12.0866626,65.9560753 12.0218012,65.3130402 C11.8858014,63.9635035 12.3802828,63.1569199 13.6687939,62.7492691 C14.4691006,62.4961002 15.280915,62.2795467 16.2248932,62.0068496"
                            id="Path"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

export default UserFilled;

UserFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

UserFilled.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};
