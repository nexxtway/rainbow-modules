import React from 'react';
import styled from 'styled-components';
import { Button, Card } from 'react-rainbow-components';
import { RainbowLogo } from '@rainbow-modules/icons';
import app from '../../../../firebase';
import RainbowFirebaseApp from '../../src/components/App';
import AppNotificationManager from '../../src/components/AppNotificationManager';
import { showAppNotification } from '../../src/actions';
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
    width: 500px;
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

const StyledButton = styled(Button)`
    width: 100px;
    margin: 0 4px;
`;

export const showAppLevelNotification = () => {
    const notificationsMap = {
        info: {
            title: 'Information',
            description: 'This is something you need to know.',
            icon: 'info',
            timeout: null,
        },
        success: {
            title: 'Success!',
            description: 'Your notification was shown successfully.',
            icon: 'success',
            timeout: null,
        },
        error: {
            title: 'Oops! Something went wrong',
            description: 'The error report was sent to an administrator.',
            icon: 'error',
            timeout: null,
        },
        custom: {
            title: 'Rainbow Modules are cool',
            description: 'Share with your friends, they will admire you ;)',
            icon: <RainbowLogo />,
            timeout: null,
        },
    };

    const showNotification = (variant) => {
        showAppNotification(notificationsMap[variant]);
    };

    return (
        <RainbowFirebaseApp app={app}>
            <Container>
                <Icon as={Checkmark} />
                <ContentCard>
                    <Title>Notifications!</Title>
                    <Description>
                        Click one of the buttons below to show a notification.
                    </Description>
                    <div>
                        <StyledButton
                            id="notification-button-info"
                            label="Info"
                            variant="neutral"
                            onClick={() => showNotification('info')}
                        />
                        <StyledButton
                            id="notification-button-success"
                            label="Success"
                            variant="success"
                            onClick={() => showNotification('success')}
                        />
                        <StyledButton
                            label="Error"
                            variant="destructive"
                            onClick={() => showNotification('error')}
                        />
                        <StyledButton
                            label="Custom"
                            variant="border-filled"
                            onClick={() => showNotification('custom')}
                        />
                    </div>
                </ContentCard>
            </Container>
        </RainbowFirebaseApp>
    );
};

export const showAppLevelNotificationTimeout5s = () => {
    const showNotification = () => {
        showAppNotification({
            title: 'Notification',
            description: 'This is the notification description.',
            icon: 'success',
            timeout: 5000,
        });
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
                        id="notification-button-timeout"
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
    component: AppNotificationManager,
};
