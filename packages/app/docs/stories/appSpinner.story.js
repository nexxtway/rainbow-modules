import React from 'react';
import { Button } from 'react-rainbow-components';
import styled from 'styled-components';
import { RainbowLogo } from '@rainbow-modules/icons';
import app from '../../../../firebase';
import RainbowFirebaseApp from '../../src/components/App';
import { showAppSpinner, hideAppSpinner } from '../../src/actions';

const show = () => {
    showAppSpinner();
    setTimeout(() => {
        hideAppSpinner();
    }, 3000);
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 50%;
    margin: auto;
`;

const Logo = styled(RainbowLogo)`
    width: 68px;
    height: 68px;
`;

const Title = styled.h1.attrs((props) => props.theme.rainbow)`
    font-size: 24px;
    font-weight: 100;
    text-align: center;
    color: ${(props) => props.palette.text.title};
    margin: 8px 0;
`;

const Description = styled.p.attrs((props) => props.theme.rainbow)`
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: ${(props) => props.palette.text.title};
    margin-bottom: 20px;
`;

export const spinner = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Container>
                <Logo />
                <Title>rainbow-modules</Title>
                <Description>
                    React Rainbow is a collection of components that will reliably help you build
                    your application in a snap. Give it a hack and let us know what you think.
                </Description>
                <Button variant="brand" label="Show Spinner" id="spinner-button" onClick={show} />
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'App/Stories',
    component: RainbowFirebaseApp,
};
