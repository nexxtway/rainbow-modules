import React from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import RecordField from '../../src/components/RecordField';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 50px;
`;

export const basicRecordField = () => {
    return (
        <Application>
            <Container>
                <RecordField label="Customer Name" value="John Doe" />
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules|Record/Stories/',
};
