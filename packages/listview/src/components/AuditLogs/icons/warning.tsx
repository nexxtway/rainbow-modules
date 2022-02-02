import React from 'react';
import PropTypes from 'prop-types';
import { IconProps } from '../types';

const Warning = (props: IconProps): JSX.Element => {
    const { className, style, title } = props;
    return (
        <svg className={className} style={style} width="18px" height="18px" viewBox="0 0 18 18">
            <title>{title}</title>
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="logs"
                    transform="translate(-115.000000, -245.000000)"
                    fill="#FFC107"
                    fillRule="nonzero"
                >
                    <g id="warning" transform="translate(115.000000, 245.000000)">
                        <path
                            d="M2.7163125,16.5 C1.216125,16.5 0,15.2701143 0,13.7531108 C0,13.2535697 0.132503906,12.7856344 0.362917969,12.3820126 L0.362917969,12.3820126 L6.64667578,1.37571993 C7.11608203,0.55365119 7.99382813,7.10542736e-15 9,7.10542736e-15 L9,7.10542736e-15 L9,7.10542736e-15 C10.0061719,7.10542736e-15 10.883918,0.55365119 11.3533242,1.37571993 L17.6370469,12.3820126 C17.8674961,12.7856344 18,13.2535697 18,13.7531108 C18,15.2701143 16.783875,16.5 15.2836875,16.5 Z"
                            id="Combined-Shape"
                            fillOpacity="0.4"
                        />
                        <path
                            d="M8.95085853,12.6498219 C9.34471703,12.6498219 9.66400243,12.9691073 9.66400243,13.3629658 C9.66400243,13.7568243 9.34471703,14.0761097 8.95085853,14.0761097 C8.55700003,14.0761097 8.23771463,13.7568243 8.23771463,13.3629658 C8.23771463,12.9691073 8.55700003,12.6498219 8.95085853,12.6498219 Z M8.94069739,5.07610999 C9.20478963,5.07610999 9.45670492,5.18718153 9.63479781,5.38218828 C9.81289071,5.57719503 9.90072885,5.83812827 9.87681761,6.1011358 L9.50170392,10.7437026 C9.47529869,11.0339469 9.23214013,11.2562928 8.94069739,11.2566907 C8.64898112,11.2566907 8.40540797,11.034219 8.37897771,10.7437026 L8.00386402,6.1011358 C7.97994145,5.83800459 8.06787358,5.5769557 8.2461242,5.38192482 C8.42437482,5.18689395 8.67648104,5.07589378 8.94069739,5.07610999 Z"
                            id="Combined-Shape"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

Warning.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    title: PropTypes.string,
};

Warning.defaultProps = {
    className: undefined,
    style: undefined,
    title: undefined,
};

export default Warning;
