import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Card, Notification } from 'react-rainbow-components';
import app from '../../../../firebase';
import RainbowFirebaseApp from '../../src/components/App';
import { showAppNotification, removeAppNotification } from '../../src/actions';
import Cancel from './icons/cancel';
import Checkmark from './icons/checkmark';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 50%;
    margin: auto;
`;

const Icon = styled(Cancel)`
    width: 72px;
    height: 72px;
    margin-bottom: -36px;
    z-index: 1;
`;

const ContentCard = styled(Card)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px 32px 24px 32px;
    width: 400px;
`;

const Title = styled.h1.attrs((props) => props.theme.rainbow)`
    font-size: 32px;
    font-weight: 100;
    text-align: center;
    color: ${(props) => props.palette.text.title};
    margin: 8px 0;
`;

const Description = styled.p.attrs((props) => props.theme.rainbow)`
    font-size: 18px;
    font-weight: 400;
    text-align: center;
    color: ${(props) => props.palette.text.title};
    margin-bottom: 20px;
`;

export const showAppLevelNotification = () => {
    const showNotification = () => {
        const notification = (
            <Notification
                title="Notification"
                description="This is the Notification description"
                onRequestClose={() => {
                    removeAppNotification(notification);
                }}
            />
        );
        showAppNotification(notification);
    };

    return (
        <RainbowFirebaseApp app={app}>
            <Container>
                <Icon as={Checkmark} />
                <ContentCard>
                    <Title>Notifications!</Title>
                    <Description>Click the button below to show a notification.</Description>
                    <Button
                        label="Show notification"
                        variant="primary"
                        onClick={showNotification}
                    />
                </ContentCard>
            </Container>
        </RainbowFirebaseApp>
    );
};

export const showAppLevelNotificationTimeout5s = () => {
    // eslint-disable-next-line
    const [count, setCount] = useState(1);
    const showNotification = () => {
        const notification = (
            <Notification
                title={`Notification ${count}`}
                description="This is the Notification description"
                hideCloseButton
            />
        );
        setCount(count + 1);
        showAppNotification(notification, 5000);
    };

    return (
        <RainbowFirebaseApp app={app}>
            <Container>
                <Icon as={Checkmark} />
                <ContentCard>
                    <Title>Notifications!</Title>
                    <Description>
                        Click the button below to show a notification with timeout.
                    </Description>
                    <Button
                        label="Show notification"
                        variant="primary"
                        onClick={showNotification}
                    />
                </ContentCard>
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|App/Stories/Notifications',
    component: RainbowFirebaseApp,
};