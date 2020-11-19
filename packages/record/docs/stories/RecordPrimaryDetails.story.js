import React from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import RecordField from '../../src/components/RecordField';
import RecordPrimaryDetails from '../../src/components/RecordPrimaryDetails';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

export const basicRecordPrimaryDetails = () => {
    return (
        <Application>
            <Container>
                <RecordPrimaryDetails>
                    <RecordField label="Customer Name" value="John Doe" />
                    <RecordField label="Customer Name" value="John Doe" />
                    <RecordField label="Customer Name" value="John Doe" />
                </RecordPrimaryDetails>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules|Record/Stories/',
};
