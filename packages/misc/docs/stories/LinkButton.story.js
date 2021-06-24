import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import LinkButton from '../../src/components/LinkButton';
import RainbowFirebaseApp from '../../../app/src/components/App';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Nav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`;

const StyledSpan = styled.span`
    color: ${(props) => props.theme.rainbow.palette.brand.main};
`;

export const BasicLinkButton = () => {
    return (
        <RainbowFirebaseApp>
            <StyledSpan>Test</StyledSpan>
            <Container>
                <Nav>
                    <LinkButton to="/" variant="base" className="rainbow-m-vertical_xx-small">
                        Base
                    </LinkButton>
                    <LinkButton
                        to="/neutral"
                        variant="neutral"
                        className="rainbow-m-vertical_xx-small"
                    >
                        Neutral
                    </LinkButton>
                    <LinkButton
                        to="https://react-rainbow.io/"
                        variant="brand"
                        className="rainbow-m-vertical_xx-small"
                        target="_blank"
                    >
                        Rainbow Components
                    </LinkButton>
                    <LinkButton
                        to="/destructive"
                        variant="destructive"
                        className="rainbow-m-vertical_xx-small"
                    >
                        Destructive
                    </LinkButton>
                </Nav>
                <Switch>
                    <Route exact path="/">
                        <Content data-cy="base">Base page</Content>
                    </Route>
                    <Route path="/neutral">
                        <Content data-cy="neutral">Neutral page </Content>
                    </Route>
                    <Route path="/destructive">
                        <Content data-cy="destructive">Destructive page </Content>
                    </Route>
                </Switch>
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Misc/Stories/LinkButton',
};
