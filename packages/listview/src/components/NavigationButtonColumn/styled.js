import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const StyledButton = styled.button`
    width: 90%;
    height: 28px;
    border: none;
    border-radius: 8px;
    background-color: ${(props) => props.theme.rainbow.palette.border.disabled};
    border-color: ${(props) => props.theme.rainbow.palette.border.disabled};
    color: ${(props) => props.theme.rainbow.palette.text.main};
    line-height: 5px;
    text-align: center;
    text-decoration: none;

    :hover {
        box-shadow: 0 4px 6px -5px ${(props) => props.theme.rainbow.palette.text.main};
    }
`;
