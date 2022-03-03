import React from 'react';
import PropTypes from 'prop-types';
import { Option } from 'react-rainbow-components';

const Options = ({ countries }) => {
    return countries.map(({ isoCode, country, flagIcon }) => {
        return <Option key={isoCode} name={isoCode} label={country} icon={flagIcon} />;
    });
};

Options.propTypes = {
    countries: PropTypes.arrayOf(
        PropTypes.shape({
            flagIcon: PropTypes.node,
            country: PropTypes.string,
            isoCode: PropTypes.string,
        }),
    ),
};

export default Options;
