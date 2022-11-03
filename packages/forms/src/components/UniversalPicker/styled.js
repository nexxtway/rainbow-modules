import styled from 'styled-components';
import attachThemeAttrs from 'react-rainbow-components/styles/helpers/attachThemeAttrs';

const labelAlignmentMap = {
    left: 'left',
    center: 'center',
    right: 'right',
};

export const StyledContainer = styled.fieldset`
    margin: 0;
    padding: 0;
    border: 0;
    position: relative;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
`;

export const StyledLabel = attachThemeAttrs(styled.legend)`
    border: 0;
    padding: 0 1rem;
    color: ${(props) => props.palette.text.label};
    line-height: 1.5;
    display: inline-block;
    margin-bottom: 0.25rem;
    text-align: ${(props) => labelAlignmentMap[props.labelAlignment] || labelAlignmentMap.center};
`;

export const StyledOptionsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    position: relative;

    ${(props) =>
        props.direction === 'vertical' &&
        `
        flex-direction: column;
    `};
`;

function getAlignSelf(props) {
    return props.alignSelf || 'center';
}

export const StyledError = attachThemeAttrs(styled.div)`
    font-size: 0.875rem;
    margin-top: 0.5rem;
    align-self: ${getAlignSelf};
    color: ${(props) => props.palette.error.main};
`;
