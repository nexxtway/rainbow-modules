import styled from 'styled-components';
import { LoadingShape, Spinner } from 'react-rainbow-components';
import { CloseCircleFilled } from '@rainbow-modules/icons';
import { NotificationProps, StatusBadgeProps } from '../types';

export const StyledSpinner = styled(Spinner)`
    position: relative;
    z-index: 1;
    top: unset;
    left: unset;
    transform: unset;
`;

export const NotificationMenuContainer = styled.div`
    position: relative;
    display: block;
`;

export const DropdownContainer = styled.div.attrs((props) => props.theme.rainbow)`
    background-color: ${(props) => props.palette.background.main};
    color: ${(props) => props.palette.text.main};
    box-shadow: ${(props) => props.shadows.shadow_2};
    width: 450px;
    border-radius: 0.875rem;
`;

export const Header = styled.header.attrs((props) => props.theme.rainbow)`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.85rem 1rem;
    border-bottom: solid 1px ${(props) => props.palette.border.disabled};
    font-size: 18px;
    font-weight: bold;
`;

export const Footer = styled.footer.attrs((props) => props.theme.rainbow)`
    padding: 0.5rem;
    border-top: solid 1px ${(props) => props.palette.border.disabled};
`;

export const Notifications = styled.ul`
    padding: 0;
`;

export const NotificationContainer = styled.li.attrs((props) => props.theme.rainbow)`
    position: relative;
    display: flex;
    padding: 20px 12px 14px 16px;
    background-color: ${(props) => props.palette.background.secondary};
    cursor: pointer;

    :hover {
        background-color: ${(props) => props.palette.action.hover};
    }

    ${(props) => props.isLoading && `background-color: transparent`}

    :not(:last-of-type) {
        border-bottom: solid 1px ${(props) => props.palette.border.disabled};
        ${(props) => props.isLoading && `border-bottom: none;`}
    }

    ::before {
        ${(props) =>
            props.unread &&
            !props.hasIcon &&
            `
            position: absolute;
            top: 1.75rem;
            left: 7px;
            content: '';
            display: block;
            width: 8px;
            height: 8px;
            box-shadow: 0 0 0 1px ${props.palette.border.disabled};
            border-radius: 50%;
            background-color: ${props.palette.brand.main};
            `}
    }
`;

export const Content = styled.div.attrs((props) => props.theme.rainbow)`
    position: relative;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-left: 6px;
`;

export const TitleContainer = styled.div<{ isLoading?: boolean }>`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    ${(props) => props.isLoading && `margin-bottom: 0.6rem;`}
`;

export const Title = styled.div.attrs((props) => props.theme.rainbow)<NotificationProps>`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: ${(props) => props.palette.text.main};
    font-size: 16px;
    margin-bottom: 4px;

    ${(props) => props.unread && `font-family: Lato Bold, Helvetica, sans-serif;`}
`;

export const CreatedAt = styled.div.attrs((props) => props.theme.rainbow)<NotificationProps>`
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 35%;
    color: ${(props) => props.palette.text.label};
    font-size: 14px;
    opacity: 0.9;

    ${(props) =>
        props.unread &&
        `
        font-family: Lato Bold, Helvetica, sans-serif;
        color: ${props.palette.text.main};
        opacity: 1;
        `}
`;

export const Description = styled.div.attrs((props) => props.theme.rainbow)<NotificationProps>`
    color: ${(props) => props.palette.text.label};
    font-size: 14px;
    margin-bottom: 4px;
    opacity: 0.9;
    line-height: 1.5;

    ${(props) =>
        props.unread &&
        `
        font-family: Lato Bold, Helvetica, sans-serif;
        color: ${props.palette.text.main};
        opacity: 1;
        `}
`;

export const StatusBadge = styled.span.attrs((props) => props.theme.rainbow)<StatusBadgeProps>`
    display: flex;
    align-items: center;
    text-transform: uppercase;
    color: ${(props) => props.palette.success.dark};
    background-color: transparent;
    padding: 0;
    margin-top: 4px;
    font-size: 14px;

    ${(props) => props.status === 'error' && `color: ${props.palette.error.main}`}
    ${(props) => props.status === 'warning' && `color: ${props.palette.warning.main}`}
    ${(props) => props.status === 'inProgress' && `color: ${props.palette.brand.main}`}
    ${(props) => props.status === 'info' && `color: ${props.palette.brand.main}`}
`;

export const StatusIcon = styled(CloseCircleFilled).attrs((props) => props.theme.rainbow)`
    width: 16px;
    height: 16px;
    margin-right: 0.4rem;

    ${(props) =>
        props.status === 'success' &&
        `
        color: ${props.palette.success.dark};
    `}
    ${(props) =>
        props.status === 'warning' &&
        `
        color: ${props.palette.warning.main};
    `}
    ${(props) =>
        props.status === 'error' &&
        `
        color: ${props.palette.error.main};
    `}
    ${(props) =>
        props.status === 'info' &&
        `
        color: ${props.palette.brand.main};
    `}
`;

export const EmptyMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px;
`;

export const EmptyMessageTitle = styled.span`
    font-size: 1.25rem;
    margin-bottom: 8px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
`;

export const EmptyMessageDescription = styled.span`
    font-size: 0.875rem;
    color: ${(props) => props.theme.rainbow.palette.text.label};
    text-align: center;
    margin-bottom: 4px;
`;

export const StyledIconLoading = styled(LoadingShape)`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;

    div {
        min-width: 40px;
    }
`;

export const StyledTitleLoading = styled(LoadingShape)`
    width: 50%;
`;

export const StyledCreatedAtLoading = styled(LoadingShape)`
    width: 25%;

    div {
        min-width: 40px;
    }
`;

export const StyledDescriptionLoading = styled(LoadingShape)`
    width: 75%;
    margin-top: 4px;
`;

export const StyledUnreadsText = styled.span`
    color: ${(props) => props.theme.rainbow.palette.text.header};
    font-size: 0.75rem;
    font-weight: normal;
`;
