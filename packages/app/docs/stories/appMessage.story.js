import React from 'react';
import styled from 'styled-components';
import { Button, Card } from 'react-rainbow-components';
import app from '../../../../firebase';
import RainbowFirebaseApp from '../../src/components/App';
import { showAppMessage } from '../../src/actions';
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

export const showAppLevelMessage = () => {
    const showMessage = () => {
        showAppMessage({
            message: 'Uh-oh! We Were Unable To Find your Information.',
            variant: 'error',
        });
    };

    return (
        <RainbowFirebaseApp app={app}>
            <Container>
                <Icon />
                <ContentCard>
                    <Title>Uh-oh!</Title>
                    <Description>
                        Something went wrong using rainbow-modules. Please try again.
                    </Description>
                    <Button label="Try Again" variant="destructive" onClick={showMessage} />
                </ContentCard>
            </Container>
        </RainbowFirebaseApp>
    );
};

export const showAppLevelMessageTimeout3s = () => {
    const showMessage = () => {
        showAppMessage({
            message: 'Congratulations, you are ready to proceed.',
            variant: 'success',
            timeout: 3000,
        });
    };

    return (
        <RainbowFirebaseApp app={app}>
            <Container>
                <Icon as={Checkmark} />
                <ContentCard>
                    <Title>Awesome!</Title>
                    <Description>
                        Congratulations, you are ready to proceed using rainbow-modules.
                    </Description>
                    <Button label="Done" onClick={showMessage} variant="success" />
                </ContentCard>
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|App/Stories/Messages',
};
