import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import {
    HomeBorder,
    HomeFilled,
    ExportBorder,
    ExportFilled,
    MoneyBorder,
    MoneyFilled,
    RainbowLogo,
} from '@rainbow-modules/icons';
import RainbowFirebaseApp from '../../src/components/App';
import SideBarNavigation from '../../src/components/SideBarNavigation';
import SideBarOption from '../../src/components/SideBarOption';

const AppContainer = styled.div`
    height: 100%;
    display: flex;
    padding: 16px;
`;

const Bar = styled(SideBarNavigation)`
    height: 100%;
    width: 92px;
    padding: 20px 0 80px 0;
    background: white;
    border-radius: 20px;
    color: #01b6f5;
`;

const StyledIcon = styled.div`
    display: block;
    text-align: center;
    margin-bottom: 30px;
`;

const Content = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`;

export const sideBarNavigation = () => {
    return (
        <RainbowFirebaseApp>
            <AppContainer>
                <Bar>
                    <StyledIcon>
                        <RainbowLogo />
                    </StyledIcon>
                    <SideBarOption
                        id="home"
                        icon={<HomeBorder />}
                        selectedIcon={<HomeFilled />}
                        name="Home"
                        label="Home"
                        path="/"
                        exact
                    />
                    <SideBarOption
                        id="export"
                        icon={<ExportBorder />}
                        selectedIcon={<ExportFilled />}
                        name="Export"
                        label="Export"
                        path="/export"
                    />
                    <SideBarOption
                        icon={<MoneyBorder />}
                        selectedIcon={<MoneyFilled />}
                        name="Billing"
                        label="Billing"
                        path="/billing"
                    />
                </Bar>
                <Switch>
                    <Route exact path="/">
                        <Content>Home page</Content>
                    </Route>
                    <Route path="/export">
                        <Content>Export page </Content>
                    </Route>
                    <Route path="/billing" exact>
                        <Content>Billing page</Content>
                    </Route>
                </Switch>
            </AppContainer>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|App/Stories',
};
