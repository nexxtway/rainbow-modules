import React from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import RecordField from '../../src/components/RecordField';
import RecordDetails from '../../src/components/RecordDetails';

const Container = styled.div`
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 20px;
    margin: 36px;
`;

export const basicRecordDetails = () => {
    return (
        <Application>
            <Container>
                <RecordDetails>
                    <RecordField
                        label="Name: od the casa of the carousel on un "
                        value="John Doe"
                    />
                    <RecordField label="Age:" value="25 years" />
                    <RecordField label="Gender:" value="Male" />
                </RecordDetails>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules|Record/Stories/',
};
