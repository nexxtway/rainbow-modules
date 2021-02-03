/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Picklist, Input, Button } from 'react-rainbow-components';
import { PlaneFilled, Update } from '@rainbow-modules/icons';

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const Row = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const StyledPicklist = styled(Picklist)`
    flex-grow: 1;
    margin-right: 12px;
`;

export const StyledInput = styled(Input)`
    width: 150px;
`;

export const StatusContainer = styled.div`
    background: ${(props) => props.theme.rainbow.palette.background.main};
    padding: 22px 16px;
    border-radius: 16px;
    margin-top: 16px;
    border: 1px solid ${(props) => props.theme.rainbow.palette.border.main};
`;

export const FlightInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
`;

export const FlightTitle = styled.h1`
    font-size: 38px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    margin-bottom: 16px;
    line-height: 1;
    font-family: Lato Light, sans-serif;
`;

export const FlightDate = styled.h2`
    font-size: 14px;
    color: ${(props) => props.theme.rainbow.palette.text.label};
    line-height: 1;
`;

export const StyledPlane = styled(PlaneFilled)`
    color: ${(props) => props.theme.rainbow.palette.border.divider};
    margin-top: 10px;
    height: 24px;
    width: 24px;
`;

export const Output = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
`;

export const Label = styled.span`
    display: inline-block;
    font-size: 14px;
    color: ${(props) => props.theme.rainbow.palette.text.header};
`;

export const Value = styled.span`
    display: inline-block;
    text-align: center;
    font-size: 16px;
    color: ${(props) => props.theme.rainbow.palette.text.label};
`;

export const Footer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 36px;
`;

export const StyledButton = styled(Button)`
    align-self: flex-end;
    margin-top: 8px;
`;

export const StyledUpdate = styled(Update)`
    margin-right: 6px;
    width: 16px;
    height: 16px;
`;
