import React from 'react';
import styled from 'styled-components';
import { Application } from 'react-rainbow-components';
import CopyToClipboardButton from '../../src/components/CopyToClipboardButton';

const Container = styled.div`
    padding: 32px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const BasicCopyToClipboardButton = () => {
    return (
        <Application>
            <Container>
                <CopyToClipboardButton value="Text copied using the CopyToClipboardButton component" />
            </Container>
        </Application>
    );
};

export default {
    title: 'Modules|Record/Stories/',
};
