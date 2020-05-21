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
} from '@rainbow-modules/icons';
import RainbowFirebaseApp from '../../src/components/App';
import SideBarNavigation from '../../src/components/SideBarNavigation';
import SideBarOption from '../../src/components/SideBarOption';
import RainbowLogo from './icons/rainbowLogo';

export default {
    title: 'App/Stories/SideBarNavigation',
    component: SideBarNavigation,
};

const AppContainer = styled.div`
    height: 100%;
    display: flex;
`;

const StyledIcon = styled.div`
    display: block;
    text-align: center;
    margin-bottom: 30px;
`;

export const sideBarNavigation = () => {
    return (
        <RainbowFirebaseApp>
            <AppContainer>
                <SideBarNavigation className="rainbow-p-top_small rainbow-p-bottom_medium">
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
                </SideBarNavigation>
                <Switch>
                    <Route exact path="/">
                        Home page
                    </Route>
                    <Route path="/export">Export page</Route>
                    <Route path="/billing" exact>
                        Billing page
                    </Route>
                </Switch>
            </AppContainer>
        </RainbowFirebaseApp>
    );
};
