import React from 'react';
import PropTypes from 'prop-types';

const FilterFilled = (props) => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            fill="currentColor"
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <g id="Variant-3" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="dispatch/rides-search-on-table"
                    transform="translate(-1401.000000, -247.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-2" transform="translate(1387.000000, 235.000000)">
                        <path
                            d="M28.9368938,12 L14.6724597,12 C14.4207148,11.9995253 14.1900676,12.140071 14.0750612,12.3638971 C13.9584686,12.5907372 13.9789318,12.8638971 14.1278848,13.0710671 L19.3537728,20.4329003 C19.3555177,20.4354384 19.3574212,20.4378178 19.3591662,20.4403559 C19.5490456,20.6967011 19.6518374,21.0072975 19.6523133,21.3263013 L19.6523133,27.328363 C19.6512029,27.506028 19.7209999,27.6768719 19.8461585,27.8029823 C19.9714758,27.928934 20.1418438,28 20.3195087,28 C20.4097689,28 20.4992359,27.9819163 20.5826749,27.9471764 L23.5192229,26.8275699 C23.7822306,26.7471448 23.9568815,26.4988897 23.9568815,26.2000319 L23.9568815,21.3263013 C23.9573574,21.0072975 24.0601493,20.6967011 24.2498701,20.4403559 C24.251615,20.4378178 24.2535186,20.4354384 24.2552635,20.4329003 L29.48131,13.0709085 C29.6302631,12.8638971 29.6507263,12.5908958 29.5341337,12.3640558 C29.419286,12.140071 29.1884801,11.9995253 28.9368938,12 Z"
                            id="Path"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

FilterFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

FilterFilled.defaultProps = {
    className: undefined,
    style: undefined,
};

export default FilterFilled;
