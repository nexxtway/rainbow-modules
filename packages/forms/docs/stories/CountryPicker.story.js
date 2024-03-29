import React, { useState } from 'react';
import { Application } from 'react-rainbow-components';
import styled from 'styled-components';
import CountryPicker from '../../src/components/CountryPicker';

const Container = styled(Application)`
    max-width: 480px;
    margin: 48px auto;
`;

export const Basic = () => {
    const [value, setValue] = useState({ isoCode: 'us' });

    return (
        <Container>
            <CountryPicker label="Select a country" onChange={setValue} value={value} />
        </Container>
    );
};

const countries = ['cu', 'mx', 'es', 'us'];

export const FilteredCountries = () => {
    const [value, setValue] = useState({ isoCode: 'mx' });

    return (
        <Container>
            <CountryPicker
                label="Select a country"
                onChange={setValue}
                value={value}
                countries={countries}
            />
        </Container>
    );
};

export default {
    title: 'Modules/Forms/Stories/CountryPicker',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
