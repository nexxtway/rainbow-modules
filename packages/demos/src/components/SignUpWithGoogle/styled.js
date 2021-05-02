import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import { Google } from '@rainbow-modules/icons';
import background from './images/background.svg';

export const Container = styled.div`
    color: ${(props) => props.theme.rainbow.palette.background.secondary};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100%;
    background-image: url(${background});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
`;

export const HeaderContainer = styled.div`
    margin-bottom: 36px;
`;

export const Title = styled.h1`
    font-size: 36px;
    font-weight: bold;
    line-height: 1;
    letter-spacing: 1.13px;
    text-align: center;
    color: ${(props) => props.theme.rainbow.palette.text.title};
`;

export const StyledButton = styled(Button)`
    height: 56px;
    line-height: 56px;
    padding: 0 32px 0 40px;
    font-size: 18px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    width: 300px;
    position: relative;
    font-family: 'Roboto', sans-serif;

    :hover {
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        background: white;
    }
`;

export const GoogleIcon = styled(Google)`
    width: 24px;
    height: 24px;
    margin-right: 12px;
    position: absolute;
    left: 16px;
`;
