import styled from 'styled-components';

const StyledLabel = styled.label<{ isSelected?: boolean }>`
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
    transform: scale(1.15);
    `}

    > svg {
        width: 100%;
        height: 100%;
    }
`;

export default StyledLabel;
