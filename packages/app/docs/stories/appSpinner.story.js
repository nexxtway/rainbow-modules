import React from 'react';
import { Button, Spinner } from 'react-rainbow-components';
import styled from 'styled-components';
import { RainbowLogo } from '@rainbow-modules/icons';
import app from '../../../../firebase';
import RainbowFirebaseApp from '../../src/components/App';
import { showAppSpinner, hideAppSpinner } from '../../src/actions';

const show = (message) => {
    showAppSpinner({ message });
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

const SpinnerContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Logo = styled(RainbowLogo)`
    display: block;
    width: 68px;
    height: 68px;
`;

const SpinnerLogo = styled(RainbowLogo)`
    display: block;
    width: 28px;
    height: 28px;
`;

const Title = styled.h1.attrs((props) => props.theme.rainbow)`
    font-size: 24px;
    font-weight: 100;
    text-align: center;
    color: ${(props) => props.palette.text.title};
    margin: 8px 0;
`;

const Label = styled.h3.attrs((props) => props.theme.rainbow)`
    font-size: 18px;
    font-weight: normal;
    text-align: center;
    color: ${(props) => props.palette.brand.main};
    margin-top: 120px;
`;

const Description = styled.p.attrs((props) => props.theme.rainbow)`
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    color: ${(props) => props.palette.text.title};
    margin-bottom: 20px;
`;

export const circleSpinner = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Container>
                <Logo />
                <Title>rainbow-modules</Title>
                <Description>
                    React Rainbow is a collection of components that will reliably help you build
                    your application in a snap. Give it a hack and let us know what you think.
                </Description>
                <Button
                    variant="brand"
                    label="Show Spinner"
                    id="spinner-button"
                    onClick={() => show()}
                />
            </Container>
        </RainbowFirebaseApp>
    );
};

export const spinnerWithMessage = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Container>
                <Logo />
                <Title>rainbow-modules</Title>
                <Description>
                    React Rainbow is a collection of components that will reliably help you build
                    your application in a snap. Give it a hack and let us know what you think.
                </Description>
                <Button
                    variant="brand"
                    label="Show Spinner"
                    id="spinner-button"
                    onClick={() => show('Loading...')}
                />
            </Container>
        </RainbowFirebaseApp>
    );
};

const customSpinner = (
    <SpinnerContainer>
        <Spinner type="arc" size="x-large" variant="brand">
            <SpinnerLogo />
        </Spinner>
        <Label>loading react-rainbow</Label>
    </SpinnerContainer>
);

export const arcSpinnerWithChild = () => {
    return (
        <RainbowFirebaseApp app={app} spinner={customSpinner}>
            <Container>
                <Logo />
                <Title>rainbow-modules</Title>
                <Description>
                    React Rainbow is a collection of components that will reliably help you build
                    your application in a snap. Give it a hack and let us know what you think.
                </Description>
                <Button
                    variant="brand"
                    label="Show Spinner"
                    id="spinner-button"
                    onClick={() => show()}
                />
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/App/Stories/Spinners',
};
