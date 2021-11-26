import React, { useState } from 'react';
import styled from 'styled-components';
import { Picklist, Option } from 'react-rainbow-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

export const BasicPicklist = () => {
    const [value, setValue] = useState();
    return (
        <Container>
            <Picklist id="picklist-1" value={value} onChange={setValue}>
                <Option name="header" label="Your Buildings" variant="header" />
                <Option name="option 1" label="Experimental Building" />
                <Option name="option 2" label="Empire State" />
                <Option name="option 3" label="Central Park" />
            </Picklist>
        </Container>
    );
};

export default {
    title: 'Modules/Cypress/Stories/Picklist',
};
