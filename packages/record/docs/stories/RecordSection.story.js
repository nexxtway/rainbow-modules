import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Application, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import { TrashFilled, PencilFilled, SettingsFilled } from '@rainbow-modules/icons';
import RecordSection from '../../src/components/RecordSection';
import RecordField from '../../src/components/RecordField';
import RecordDetails from '../../src/components/RecordDetails';

const Container = styled.div`
    background-color: ${(props) => props.theme.rainbow.palette.background.main};
    padding: 0 32px 12px 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    border-radius: 20px;
    margin: 36px;
`;

const RecordContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Divider = styled.div`
    width: 1px;
    height: 120px;
    background-color: ${(props) => props.theme.rainbow.palette.border.divider};
    margin: 20px 50px;
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

const Actions = () => {
    return (
        <ButtonGroup>
            <ButtonIcon variant="border-filled" icon={<TrashFilled />} />
            <ButtonIcon variant="border-filled" icon={<PencilFilled />} />
            <ButtonIcon variant="border-filled" icon={<SettingsFilled />} />
        </ButtonGroup>
    );
};

export const BasicRecordSection = () => {
    const loading = useChangeLoading();

    return (
        <Application>
            <Container>
                <RecordSection label="Identity" actions={<Actions />}>
                    <RecordContainer>
                        <RecordDetails>
                            <RecordField label="Name" value="John Doe" isLoading={loading} />
                            <RecordField
                                label="Date & Time"
                                value={new Date()}
                                type="dateTime"
                                isLoading={loading}
                            />
                            <RecordField
                                label="Email"
                                value="johndoe@mail.com"
                                isLoading={loading}
                            />
                            <RecordField
                                label="Percent"
                                value={0.5389}
                                type="percent"
                                isLoading={loading}
                            />
                            <RecordField
                                label="Status"
                                component={<Badge label="success" variant="success" size="small" />}
                                isLoading={loading}
                            />
                        </RecordDetails>
                        <Divider />
                        <RecordDetails>
                            <RecordField label="Organization" value="Google" isLoading={loading} />
                            <RecordField
                                label="Date"
                                value={new Date()}
                                type="date"
                                isLoading={loading}
                            />
                            <RecordField
                                label="Web page"
                                value="https://google.com"
                                href="https://google.com"
                                type="url"
                                isLoading={loading}
                            />
                            <RecordField
                                label="Price"
                                value={50.5}
                                type="currency"
                                isLoading={loading}
                            />
                            <RecordField
                                label="Number of workers"
                                value={1023425}
                                type="number"
                                isLoading={loading}
                            />
                        </RecordDetails>
                    </RecordContainer>
                </RecordSection>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules|Record/Stories/',
};
