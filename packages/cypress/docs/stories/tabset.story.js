import React, { useState } from 'react';
import styled from 'styled-components';
import { Tabset, Tab } from 'react-rainbow-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

export const BasicTabset = () => {
    const [tab, setTab] = useState();

    const handleSelect = (event, name) => {
        setTab(name);
    };

    return (
        <Container>
            <Tabset
                id="tabset-1"
                onSelect={handleSelect}
                activeTabName={tab}
                className="rainbow-p-horizontal_x-large"
            >
                <Tab label="PRIMARY" name="primary" id="primary" ariaControls="primaryTab" />
                <Tab label="RECENTS" name="recents" id="recents" ariaControls="recentsTab" />
                <Tab label="SHARED" name="shared" id="shared" ariaControls="sharedTab" />
                <Tab label="LOCKED" name="locked" id="locked" ariaControls="lockedTab" />
                <Tab label="FORUMS" name="forums" id="forums" ariaControls="forumsTab" />
            </Tabset>
        </Container>
    );
};

export default {
    title: 'Modules/Cypress/Stories/Tabset',
};
