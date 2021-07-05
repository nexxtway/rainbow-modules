import React from 'react';
import PropTypes from 'prop-types';

const Check = (props) => {
    const { className, style, title } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="14px"
            height="10px"
            viewBox="0 0 14 10"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <title>{title}</title>
            <g id="Variant-3" stroke="none" strokeWidth="1" fillRule="evenodd">
                <path
                    d="M13.6506722,2.00848715 L5.90623037,9.6551278 C5.67389058,9.88453999 5.36890372,10 5.0639168,10 C4.75892988,10 4.45394301,9.88453999 4.22160323,9.6551278 L0.349491416,5.83180748 C-0.116497139,5.37190617 -0.116497139,4.62830919 0.349491416,4.16840789 C0.81526177,3.70829114 1.56813,3.70829114 2.03411855,4.16840789 L5.0639168,7.16002843 L11.9660451,0.345087565 C12.4318154,-0.115029188 13.1846836,-0.115029188 13.6506722,0.345087565 C14.1164426,0.804988866 14.1164426,1.54837039 13.6506722,2.00848715 Z"
                    id="checkmark"
                />
            </g>
        </svg>
    );
};

Check.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

Check.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Check;
