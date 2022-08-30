import React from 'react';
import styled from 'styled-components';
import { Route, Routes, Switch } from 'react-router-dom';
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
                <LinkButton variant="base" className="rainbow-m-around_medium" to="/base">
                    Button Base
                </LinkButton>
                <LinkButton
                    variant="outline-brand"
                    className="rainbow-m-around_medium"
                    to="/outline-brand"
                >
                    Button Outline Brand
                </LinkButton>
                <LinkButton variant="border" className="rainbow-m-around_medium" to="/border">
                    Button Border
                </LinkButton>
                <LinkButton variant="neutral" className="rainbow-m-around_medium" to="/neutral">
                    Button Neutral
                </LinkButton>
                <LinkButton
                    variant="border-filled"
                    className="rainbow-m-around_medium"
                    to="/border-filled"
                >
                    Button Border Filled
                </LinkButton>
                <LinkButton variant="brand" className="rainbow-m-around_medium" to="/brand">
                    Button Brand
                </LinkButton>
                <LinkButton variant="success" className="rainbow-m-around_medium" to="/success">
                    Button Success
                </LinkButton>
                <LinkButton
                    variant="destructive"
                    className="rainbow-m-around_medium"
                    to="/destructive"
                >
                    Button Destructive
                </LinkButton>
            </div>
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <Routes>
                    <Route path="/base" element={<>Navigated to Base</>} />
                    <Route path="/outline-brand" element={<>Navigated to Outline Brand</>} />
                    <Route path="/border" element={<>Navigated to Border</>} />
                    <Route
                        path="/neutral"
                        element={<span data-cy="neutral">Navigated to Neutral</span>}
                    />
                    <Route path="/border-filled" element={<>Navigated to Border Filled</>} />
                    <Route path="/brand" element={<>Navigated to Brand</>} />
                    <Route path="/success" element={<>Navigated to Success</>} />
                    <Route path="/destructive" element={<>Navigated to Destructive</>} />
                </Routes>
            </div>
        </RainbowFirebaseApp>
    );
};

export const LinkButtonSizes = () => {
    return (
        <RainbowFirebaseApp>
            <div className="rainbow-p-vertical_large rainbow-align-content_center rainbow-flex_wrap">
                <LinkButton variant="brand" className="rainbow-m-around_medium" size="small" to="">
                    Button Small
                </LinkButton>
                <LinkButton variant="brand" className="rainbow-m-around_medium" size="medium" to="">
                    Button Medium
                </LinkButton>
                <LinkButton variant="brand" className="rainbow-m-around_medium" size="large" to="">
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
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
