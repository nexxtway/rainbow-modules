import React, { useState } from 'react';
import styled from 'styled-components';
import { Button, Card as RainbowCard } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { RainbowLogo } from '@rainbow-modules/icons';
import Iframe from '../../src/components/Iframe';

const Card = styled(RainbowCard)`
    width: 650px;
    display: flex;
    flex-direction: row;
    padding: 1.25rem 1rem;
`;

const IconContainer = styled.div`
    display: flex;
    min-width: 78px;
    min-height: 78px;
    max-width: 78px;
    max-height: 78px;
    border-radius: 39px;
    background: ${(props) => props.theme.rainbow.palette.background.highlight};
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
`;

const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h3`
    font-size: 1.25rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: ${(props) => props.theme.rainbow.palette.text.title};
`;

const Text = styled.p`
    color: ${(props) => props.theme.rainbow.palette.text.label};
    font-size: 0.9rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.57;
    letter-spacing: normal;
    padding-top: 1rem;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 5rem 2rem;
`;

// eslint-disable-next-line react/prop-types
const IframeCard = ({ onClick }) => (
    <Container>
        <Card>
            <IconContainer>
                <RainbowLogo />
            </IconContainer>
            <div>
                <Header>
                    <Title>react-rainbow-components</Title>
                    <Button label="Check it out!" variant="brand" onClick={onClick} />
                </Header>
                <Text>
                    React Rainbow is a collection of components that will reliably help you build
                    your application in a snap. Give it a hack and let us know what you think.
                </Text>
            </div>
        </Card>
    </Container>
);

export const BasicIframe = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(true);

    return (
        <RainbowFirebaseApp>
            <IframeCard onClick={handleClick} />
            <Iframe
                src="https://react-rainbow.io/"
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
            />
        </RainbowFirebaseApp>
    );
};

export const PopupIframe = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(true);

    return (
        <RainbowFirebaseApp>
            <IframeCard onClick={handleClick} />
            <Iframe
                variant="popup"
                src="https://react-rainbow.io/"
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
            />
        </RainbowFirebaseApp>
    );
};

const StyledTitle = styled.h2`
    padding-left: 15px;
    font-size: 14px;
    color: ${(props) => props.theme.rainbow.palette.text.title};
`;

export const FullIframeWithHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(true);

    return (
        <RainbowFirebaseApp>
            <IframeCard onClick={handleClick} />
            <Iframe
                src="https://react-rainbow.io/"
                isOpen={isOpen}
                header={<StyledTitle>React Rainbow Components</StyledTitle>}
                onRequestClose={() => setIsOpen(false)}
            />
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Micro/Stories/Iframe',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
