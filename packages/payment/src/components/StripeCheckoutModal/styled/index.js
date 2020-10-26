import styled from 'styled-components';
import { StripeCardInput, Button, Modal } from 'react-rainbow-components';

export const ModalContainer = styled(Modal)`
    width: 410px;
    height: 420px;
    min-height: 400px;
    max-height: 400px;
`;

export const StripeInput = styled(StripeCardInput)`
    margin-top: 32px;
    margin-bottom: 100px;
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

export const CancelButton = styled(Button)`
    margin-right: 24px;
`;

export const Overlay = styled.div`
    background-color: transparent;
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 5;
`;
