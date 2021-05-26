import styled from 'styled-components';
import { LabelAlignments } from './types';

export const StyledContainer = styled.fieldset<{ labelAlignment?: LabelAlignments }>`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    border: none;

    ${(props) => props.labelAlignment === 'left' && `align-items: flex-start;`}
    ${(props) => props.labelAlignment === 'right' && `align-items: flex-end;`}
    ${(props) =>
        props.labelAlignment === 'inlineLeft' &&
        `
        flex-direction: row;
        align-items: center;
        > h3 {
            margin-bottom: 0;
            margin-right: 14px;
        }
    `}
    ${(props) =>
        props.labelAlignment === 'inlineRight' &&
        `
        flex-direction: row-reverse;
        align-items: center;
        > h3 {
            margin-bottom: 0;
            margin-left: 14px;
        }
    `}
`;

export const StyledLegend = styled.legend`
    text-transform: uppercase;
    font-family: Lato;
    font-size: 0.875rem;
    font-weight: bold;
    color: ${(props) => props.theme.rainbow.palette.text.header};
    margin-bottom: 8px;
`;

export const StyledOptionsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 24px;
`;

export const StyledInput = styled.input`
    display: none;
`;

export const StyledLabel = styled.label<{ isSelected?: boolean }>`
    position: relative;
    display: inline-flex;
    margin: 0 4px;
    cursor: pointer;
    transition-property: transform;
    transition-duration: 300ms;
    transform-origin: center;
    color: #d3dadf;
    width: 32px;
    height: 32px;

    :hover {
        transform: scale(1.15);
    }

    :first-child {
        margin-left: 0;
    }

    :last-child {
        margin-right: 0;
    }

    ${(props) =>
        props.isSelected &&
        `
    color: #ffca28;
    transform: scale(1.15);
    `}

    > svg {
        width: 100%;
        height: 100%;
    }
`;
