import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
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
        <BrowserRouter>
            <Application>
                <Container>
                    <RecordField label="Customer Name" isLoading={loading} value="John Doe" />
                </Container>
                <Container>
                    <RecordField
                        label="Customer Name"
                        isLoading={loading}
                        value="John Doe"
                        icon={<CubeFilled />}
                    />
                </Container>
                <Container>
                    <RecordField
                        label="Customer Name"
                        isLoading={loading}
                        value="John Doe"
                        icon={<CubeFilled />}
                        iconPosition="right"
                    />
                </Container>
                <Container>
                    <RecordField
                        label="Customer Name"
                        value="John Doe"
                        type="url"
                        href="/john-doe"
                    />
                </Container>
                <Container>
                    <RecordField
                        label="Component"
                        value="React Router Link"
                        type="url"
                        href="https://reactrouter.com/web/api/Link"
                        target="_blank"
                    />
                </Container>
                <Container>
                    <RecordField
                        label="Date & Time"
                        type="dateTime"
                        value={new Date()}
                        component={({ value }) => <span style={{ color: 'purple' }}>{value}</span>}
                    />
                </Container>
            </Application>
        </BrowserRouter>
    );
};

export default {
    title: 'Modules/Record/Stories/RecordField',
};
