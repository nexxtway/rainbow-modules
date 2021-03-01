import React from 'react';
import styled from 'styled-components';
import { Avatar, Button } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { NotificationMenu } from '../../src';

const notifications = [
    {
        title: 'Rainbow Components',
        description: 'Lorem ipsum dolor sit amer, adipiscing consectetur',
        status: 'success',
        createdAt: Date.now(),
    },
    {
        title: 'Rainbow Modules',
        description: 'Lorem ipsum dolor sit amer, adipiscing consectetur',
        status: 'success',
    },
];

const Container = styled.div`
    display: flex;
    justify-content: center;
`;

const FooterContainer = styled.div`
    display: block;
    text-align: right;
`;

const Footer = () => (
    <FooterContainer>
        <Button label="See All Activities" variant="base" size="small" />
    </FooterContainer>
);

export const SimpleNotificationMenu = () => {
    return (
        <RainbowFirebaseApp>
            <Container>
                <NotificationMenu notifications={notifications} footer={<Footer />} />
            </Container>
        </RainbowFirebaseApp>
    );
};

export const ProgressNotificationMenu = () => {
    const progressNotifications = [
        {
            title: 'fire-authentication',
            description:
                'The "fire-authentication” function is still installing, this may take a few minutes.',
            status: 'inProgress',
            createdAt: 'Now',
            unread: true,
        },
        ...notifications,
    ];
    return (
        <RainbowFirebaseApp>
            <Container>
                <NotificationMenu notifications={progressNotifications} footer={<Footer />} />
            </Container>
        </RainbowFirebaseApp>
    );
};

export const UnreadNotificationMenu = () => {
    const unreadNotifications = [
        {
            title: 'fire-authentication',
            description:
                'The "fire-authentication” function is still installing, this may take a few minutes.',
            status: 'error',
            createdAt: 'Now',
            unread: true,
        },
        ...notifications,
    ];
    return (
        <RainbowFirebaseApp>
            <Container>
                <NotificationMenu
                    notifications={unreadNotifications}
                    unreads={1}
                    footer={<Footer />}
                />
            </Container>
        </RainbowFirebaseApp>
    );
};

export const NotificationMenuWithIcons = () => {
    const iconNotifications = notifications.map((value) => {
        const { title } = value;
        const initial = title[0];
        return {
            ...value,
            icon: <Avatar initials={initial} title={title} />,
        };
    });
    return (
        <RainbowFirebaseApp>
            <Container>
                <NotificationMenu notifications={iconNotifications} footer={<Footer />} />
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Notifications/Stories/NotificationMenu',
};
