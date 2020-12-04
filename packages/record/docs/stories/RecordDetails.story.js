import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Application, Badge } from 'react-rainbow-components';
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

const useChangeLoading = () => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return loading;
};

// eslint-disable-next-line react/prop-types
const StatusBadge = ({ value }) => {
    return <Badge label={value} variant="success" size="small" />;
};

export const BasicRecordDetails = () => {
    const loading = useChangeLoading();

    return (
        <Application>
            <Container>
                <RecordDetails>
                    <RecordField label="Organization" value="Google" isLoading={loading} />
                    <RecordField
                        label="Date & Time"
                        value={new Date()}
                        type="dateTime"
                        isLoading={loading}
                    />
                    <RecordField
                        label="Web page"
                        value="https://google.com"
                        href="https://google.com"
                        type="url"
                        isLoading={loading}
                    />
                    <RecordField label="Price" value={50.5} type="currency" isLoading={loading} />
                    <RecordField
                        label="Status"
                        component={StatusBadge}
                        isLoading={loading}
                        value="success"
                    />
                </RecordDetails>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules|Record/Stories/',
};
