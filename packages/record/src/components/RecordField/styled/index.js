import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    box-sizing: border-box;

    ${(props) =>
        props.privateVariant === 'border-vertical' &&
        `
            padding-right: 24px;
            border-right: 1px solid ${props.theme.rainbow.palette.border.disabled};
            margin-right: 24px;

            :last-of-type {
                border-right: none;
                margin-right: 0;
            }
    `};

    ${(props) =>
        props.privateVariant === 'horizontal' &&
        `
            flex-direction: row;
            align-items: center;
            padding: 4px 0;
            line-height: 20px;
    `};
`;

export const Label = styled.span`
    font-size: 12px;
    color: ${(props) => props.theme.rainbow.palette.text.header};
    line-height: 1.5;

    ${(props) =>
        props.privateVariant === 'horizontal' &&
        `
            flex: 0 0 20%;
            min-width: 200px;
            max-width: 260px;
            padding-right: 4px;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            font-size: 14px;
    `};
`;

export const Value = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    line-height: 1.5;

    ${(props) =>
        props.privateVariant === 'horizontal' &&
        `
            padding-right: 4px;
            padding-left: 4px;
            line-height: 20px;
    `};
`;
