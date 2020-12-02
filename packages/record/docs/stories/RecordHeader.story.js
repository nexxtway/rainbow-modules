import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Trash, Edit, SettingsFilled } from '@rainbow-modules/icons';
import { Application, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import RecordHeader from '../../src/components/RecordHeader';
import RecordField from '../../src/components/RecordField';
import RecordPrimaryDetails from '../../src/components/RecordPrimaryDetails';

const Container = styled.div`
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    padding: 0 32px 32px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 20px;
    margin: 36px;
`;

const Actions = () => {
    return (
        <ButtonGroup>
            <ButtonIcon variant="border-filled" icon={<Trash />} />
            <ButtonIcon variant="border-filled" icon={<Edit />} />
            <ButtonIcon variant="border-filled" icon={<SettingsFilled />} />
        </ButtonGroup>
    );
};

const useChangeLoading = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 1500);
    }, []);

    return loading;
};

export const BasicRecordHeader = () => {
    const loading = useChangeLoading();

    return (
        <Application>
            <Container>
                <RecordHeader
                    label="CUSTOMER"
                    description="John Doe"
                    actions={<Actions />}
                    tags={<Badge label="active" />}
                    isLoading={loading}
                >
                    <RecordPrimaryDetails>
                        <RecordField label="Organization" isLoading={loading} value="Google" />
                        <RecordField
                            label="Date & Time"
                            isLoading={loading}
                            value={new Date()}
                            type="dateTime"
                        />
                        <RecordField
                            label="Web page"
                            isLoading={loading}
                            value="https://google.com"
                            href="https://google.com"
                            type="url"
                        />
                        <RecordField
                            label="Price"
                            isLoading={loading}
                            value={50.5}
                            type="currency"
                        />
                        <RecordField
                            label="Status"
                            isLoading={loading}
                            component={<Badge label="success" variant="success" size="small" />}
                        />
                    </RecordPrimaryDetails>
                </RecordHeader>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules|Record/Stories/',
};
