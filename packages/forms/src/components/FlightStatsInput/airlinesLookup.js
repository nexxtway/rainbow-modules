import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { filterByFields } from '@rainbow-modules/listview';
import { StyledLookup } from './styled';

const getNormalizedOption = (airline) => {
    if (airline) {
        const { iata, icao, name } = airline;
        const code = iata || icao;
        let label = '';
        if (code && name) {
            label = `${code} - ${name}`;
        }
        if (code) {
            label = code;
        }
        if (name) {
            label = name;
        }
        return {
            label,
            airline,
        };
    }
    return null;
};

const getNormalizedOptions = (options) => {
    return options.map(getNormalizedOption);
};

export default function AirlinesLookup(props) {
    const { airlines, onChange, value, required } = props;
    const [options, setOptions] = useState(getNormalizedOptions(airlines.slice(0, 20)));

    const search = (query) => {
        if (query.length > 0) {
            const data = filterByFields({
                data: airlines,
                query,
                fields: ['name', 'iata', 'icao'],
            });
            setOptions(getNormalizedOptions(data.slice(0, 20)));
        } else {
            setOptions(getNormalizedOptions(airlines.slice(0, 20)));
        }
    };

    return (
        <StyledLookup
            placeholder="Select Airline"
            label="Select Airline"
            required={required}
            labelAlignment="left"
            onChange={onChange}
            value={getNormalizedOption(value)}
            onSearch={search}
            options={options}
            debounce
        />
    );
}

AirlinesLookup.propTypes = {
    airlines: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
    required: PropTypes.bool.isRequired,
    value: PropTypes.object,
};

AirlinesLookup.defaultProps = {
    value: undefined,
};
