import React from 'react';
import styled from 'styled-components';
import { Route, Link, Routes } from 'react-router-dom';
import { RainbowLogo } from '@rainbow-modules/icons';
import app from '../../../../firebase';
import RainbowFirebaseApp from '../../src/components/App';

const Navigation = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: white;
    padding: 12px 32px;
    box-shadow: 0 1px 0 0 #e3e5ed;
`;

const Logo = styled(RainbowLogo)`
    width: 40px;
    height: 40px;
`;

const Li = styled.li`
    font-size: 16px;
    margin: 0 12px;
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 400px;
    font-size: 20px;
`;

export const basicRouter = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Navigation>
                <Logo />
                <ul className="rainbow-flex">
                    <Li>
                        <Link to="/">Home</Link>
                    </Li>
                    <Li>
                        <Link to="/about">About</Link>
                    </Li>
                    <Li>
                        <Link to="/dashboard">Contact us</Link>
                    </Li>
                </ul>
            </Navigation>

            <Routes>
                <Route exact path="/" element={<Container>Home page</Container>} />
                <Route path="/about" element={<Container>About page</Container>} />
                <Route path="/dashboard" element={<Container>Contact page</Container>} />
            </Routes>
        </RainbowFirebaseApp>
    );
};
