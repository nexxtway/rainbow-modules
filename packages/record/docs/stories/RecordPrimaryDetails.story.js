import React from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import RecordField from '../../src/components/RecordField';
import RecordPrimaryDetails from '../../src/components/RecordPrimaryDetails';

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

export const basicRecordPrimaryDetails = () => {
    return (
        <Application>
            <Container>
                <RecordPrimaryDetails>
                    <RecordField label="Name" value="John Doe" />
                    <RecordField label="Age" value="25 years" />
                    <RecordField label="Gender" value="Male" />
                </RecordPrimaryDetails>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules|Record/Stories/',
};
