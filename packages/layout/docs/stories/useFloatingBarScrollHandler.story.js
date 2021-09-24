import React from 'react';
import { Application } from 'react-rainbow-components';
import styled from 'styled-components';
import FloatingBar from '../../src/components/FloatingBar';
import useFloatingBarScrollHandler from '../../src/hooks/useFloatingBarScrollHandler';

const Container = styled.div`
    position: relative;
    overflow: hidden;
`;

const ScrollableContainer = styled.div`
    height: 200px;
    overflow: auto;
`;

const BigContent = styled.div`
    height: 500px;
`;

const StyledBarContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1em;
`;

export const UseFloatingBarScrollHandler = () => {
    const [showBar, handleScrollEvent] = useFloatingBarScrollHandler({
        scrollTop: 50,
    });
    return (
        <Application>
            <Container>
                <FloatingBar isVisible={showBar}>
                    <StyledBarContainer>Scroll up to hide.</StyledBarContainer>
                </FloatingBar>
                <ScrollableContainer onScroll={handleScrollEvent}>
                    Scroll this container to show the FloatingBar
                    <BigContent />
                </ScrollableContainer>
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules/Layout/Stories',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
