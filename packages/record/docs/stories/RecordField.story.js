import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import { CubeFilled } from '@rainbow-modules/icons';
import RecordField from '../../src/components/RecordField';

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

const useChangeLoading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return loading;
};

export const BasicRecordField = () => {
    const loading = useChangeLoading();

    return (
        <Application>
            <Container>
                <RecordField label="Customer Name" isLoading={loading} value="John Doe" />
            </Container>
            <Container>
                <RecordField label="Customer Name" value="John Doe" icon={<CubeFilled />} />
            </Container>
            <Container>
                <RecordField
                    label="Customer Name"
                    value="John Doe"
                    icon={<CubeFilled />}
                    iconPosition="right"
                />
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules|Record/Stories/',
};
