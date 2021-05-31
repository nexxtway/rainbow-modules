import React, { useState } from 'react';
import { Application, Button } from 'react-rainbow-components';
import styled from 'styled-components';
import FloatingBar from '../../src/components/FloatingBar';

const StyledTopBarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
`;

export const SimpleFloatingBar = () => {
    const [isVisible, setIsVisible] = useState();
    return (
        <Application>
            <FloatingBar isVisible={isVisible}>
                <StyledTopBarContainer>
                    <h1>Hello from Rainbow Modules</h1>
                    <Button
                        id="hide-bar-button"
                        label="Hide FloatingBar"
                        variant="brand"
                        onClick={() => setIsVisible(false)}
                    />
                </StyledTopBarContainer>
            </FloatingBar>
            <Button
                id="show-bar-button"
                label="Show FloatingBar"
                variant="brand"
                onClick={() => setIsVisible(true)}
            />
        </Application>
    );
};

export default {
    title: 'Modules/Layout/Stories/FloatingBar',
};
