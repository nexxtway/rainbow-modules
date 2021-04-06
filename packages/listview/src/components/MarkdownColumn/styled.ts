/* eslint-disable import/prefer-default-export */
import { MarkdownOutput } from 'react-rainbow-components';
import styled from 'styled-components';

export const Container = styled.div`
    text-align: left;
    padding: 0 1rem;
    white-space: normal;
`;

export const StyledMarkdownOutput = styled(MarkdownOutput)`
    font-size: 0.875rem;
    color: ${(props) => props.theme.rainbow.palette.text.label};
`;
