import React from 'react';
import { LoadingShape } from 'react-rainbow-components';
import styled from 'styled-components';

const Container = styled.div`
    margin-bottom: 80px;
`;

const LoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LoadingLabel = styled(LoadingShape)`
    max-width: 170px;
    height: 14px;
    margin-bottom: 12px;
`;

const LoadingInput = styled(LoadingShape)`
    max-width: 365px;
    height: 40px;
    margin-bottom: 32px;
`;

export default function Loading() {
    return (
        <Container>
            <LoadingContainer>
                <LoadingLabel />
                <LoadingInput />
            </LoadingContainer>
            <LoadingContainer>
                <LoadingLabel />
                <LoadingInput />
            </LoadingContainer>
        </Container>
    );
}
