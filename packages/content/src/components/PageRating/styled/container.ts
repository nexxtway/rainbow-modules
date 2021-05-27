import styled from 'styled-components';
import { LabelAlignments } from '../types';

const StyledContainer = styled.div<{ labelAlignment?: LabelAlignments }>`
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
        > span {
            margin-bottom: 0;
            margin-right: 14px;
        }
    `}
    ${(props) =>
        props.labelAlignment === 'inlineRight' &&
        `
        flex-direction: row-reverse;
        align-items: center;
        > span {
            margin-bottom: 0;
            margin-left: 14px;
        }
    `}
`;

export default StyledContainer;
