import React, { useState } from 'react';
import { Application, Button, ButtonGroup, ButtonIcon, Badge } from 'react-rainbow-components';
import styled from 'styled-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Trash, Edit, SettingsFilled, CubeFilled } from '@rainbow-modules/icons';
import {
    RecordHeader,
    RecordField,
    RecordPrimaryDetails,
    RecordSection,
    RecordDetails,
} from '@rainbow-modules/record';
import { FloatingBar, useFloatingBarScrollHandler } from '../../src';

const StyledTopBarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const TopBarContent = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 32px;
`;

const OuterContainer = styled.div`
    width: calc(100% + 32px);
    overflow: hidden;
    height: 400px;
    margin: -16px;
    display: flex;
    justify-content: center;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    height: 100%;
    overflow: auto;
    width: 100%;
`;

const Content = styled.div`
    padding: 0 32px 32px 32px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
`;

const RecordContainer = styled.div`
    display: flex;
    justify-content: flex-start;
`;

const Divider = styled.div`
    width: 1px;
    height: 120px;
    margin: 20px 60px;
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

// eslint-disable-next-line react/prop-types
const StatusBadge = ({ value }) => {
    return <Badge label={value} variant="success" size="small" />;
};

export const SimpleFloatingBar = () => {
    const [isVisible, setIsVisible] = useState();
    return (
        <Application>
            <FloatingBar isVisible={isVisible}>
                <StyledTopBarContainer>
                    <TopBarContent>
                        <h1>Hello from Rainbow Modules</h1>
                        <Button
                            id="hide-bar-button"
                            label="Hide FloatingBar"
                            variant="brand"
                            onClick={() => setIsVisible(false)}
                        />
                    </TopBarContent>
                </StyledTopBarContainer>
            </FloatingBar>
            <Button
                id="show-bar-button"
                label="Show FloatingBar"
                variant="brand"
                onClick={() => setIsVisible(true)}
            />
        </Application>
    );
};

export const FloatingBarWithScrollHandler = () => {
    const [isVisible, handleScroll] = useFloatingBarScrollHandler({ scrollTop: 50 });

    return (
        <RainbowFirebaseApp>
            <OuterContainer>
                <FloatingBar isVisible={isVisible}>
                    <StyledTopBarContainer>
                        <TopBarContent>
                            <RecordField label="Customer" icon={<CubeFilled />} value="John Doe" />
                            <Actions />
                        </TopBarContent>
                    </StyledTopBarContainer>
                </FloatingBar>
                <Container onScroll={handleScroll}>
                    <Content>
                        <RecordHeader
                            label="CUSTOMER"
                            description="John Doe"
                            actions={<Actions />}
                            tags={<Badge label="active" />}
                        >
                            <RecordPrimaryDetails>
                                <RecordField label="Organization" value="Google" />
                                <RecordField
                                    label="Date & Time"
                                    value={new Date()}
                                    type="dateTime"
                                />
                                <RecordField
                                    label="Web page"
                                    value="https://google.com"
                                    href="https://google.com"
                                    type="url"
                                />
                                <RecordField label="Price" value={50.5} type="currency" />
                                <RecordField
                                    label="Status"
                                    component={StatusBadge}
                                    value="success"
                                />
                            </RecordPrimaryDetails>
                        </RecordHeader>
                        <RecordSection label="Details">
                            <RecordContainer>
                                <RecordDetails>
                                    <RecordField label="Id" value="1q2w3e4r5t6y7u8i" />
                                    <RecordField
                                        label="Date of creation"
                                        value={new Date()}
                                        type="dateTime"
                                    />
                                    <RecordField label="Email" value="johndoe@mail.com" />
                                    <RecordField label="Type" value="Custom" />
                                    <RecordField label="Business type" value="Company" />
                                    <RecordField label="Business name" value="Google" />
                                </RecordDetails>
                                <Divider />
                                <RecordDetails>
                                    <RecordField label="Products amount" value="124" />
                                    <RecordField label="Value" value={120345760} type="currency" />
                                    <RecordField
                                        label="Status"
                                        value="Active"
                                        component={StatusBadge}
                                    />
                                </RecordDetails>
                            </RecordContainer>
                        </RecordSection>
                    </Content>
                </Container>
            </OuterContainer>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Layout/Stories/FloatingBar',
};
