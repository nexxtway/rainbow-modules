import React from 'react';
import styled from 'styled-components';
import LinkButton from '../../src/components/LinkButton';
import RainbowFirebaseApp from '../../../app/src/components/App';

const MessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const MessageTitle = styled.h3`
    font-size: 18px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    text-align: center;
    font-family: 'Lato Bold', Arial, Helvetica, sans-serif;
`;

const MessageDescription = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.rainbow.palette.text.header};
    text-align: center;
    margin-top: 8px;
`;

export const LinkButtonVariants = () => {
    return (
        <RainbowFirebaseApp>
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <LinkButton variant="base" className="rainbow-m-around_medium">
                    Button Base
                </LinkButton>
                <LinkButton
                    label=" Brand"
                    variant="outline-brand"
                    className="rainbow-m-around_medium"
                >
                    Button Outline
                </LinkButton>
                <LinkButton variant="border" className="rainbow-m-around_medium">
                    Button Border
                </LinkButton>
                <LinkButton variant="neutral" className="rainbow-m-around_medium">
                    Button Neutral
                </LinkButton>
                <LinkButton variant="border-filled" className="rainbow-m-around_medium">
                    Button Border Filled
                </LinkButton>
                <LinkButton variant="brand" className="rainbow-m-around_medium">
                    Button Brand
                </LinkButton>
                <LinkButton variant="success" className="rainbow-m-around_medium">
                    Button Success
                </LinkButton>
                <LinkButton variant="destructive" className="rainbow-m-around_medium">
                    Button Destructive
                </LinkButton>
            </div>
        </RainbowFirebaseApp>
    );
};

export const LinkButtonSizes = () => {
    return (
        <RainbowFirebaseApp>
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <LinkButton variant="brand" className="rainbow-m-around_medium" size="small">
                    Button Small
                </LinkButton>
                <LinkButton variant="brand" className="rainbow-m-around_medium" size="medium">
                    Button Medium
                </LinkButton>
                <LinkButton variant="brand" className="rainbow-m-around_medium" size="large">
                    Button Large
                </LinkButton>
            </div>
        </RainbowFirebaseApp>
    );
};

export const LinkButtonExample = () => {
    return (
        <RainbowFirebaseApp>
            <MessageContainer>
                <MessageTitle>Develop as Fast as You Can Think</MessageTitle>
                <MessageDescription>
                    The Marketplace for Google Cloud Functions to Help You Launch and Grow Your Web
                    App.
                </MessageDescription>
                <LinkButton
                    className="rainbow-m-around_medium"
                    to="https://www.functions.store/"
                    target="_blank"
                >
                    Go to Function Store
                </LinkButton>
            </MessageContainer>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Misc/Stories/LinkButton',
};
