/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import { Lookup, Input, Button } from 'react-rainbow-components';
import { PlaneFilled, Update } from '@rainbow-modules/icons';
import World from './images/world';
import PlanePath from './images/planePath';

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

export const StyledLookup = styled(Lookup)`
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
    margin-top: 8px;
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

export const EmptyMassageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 8px;
`;

export const WorldImage = styled(World)`
    width: 64px;
    height: 64px;
    color: ${(props) => props.theme.rainbow.palette.border.divider};
    margin-bottom: 16px;
`;

export const EmptyTitle = styled.span`
    font-size: 16px;
    margin-bottom: 12px;
    color: ${(props) => props.theme.rainbow.palette.text.header};
`;

export const EmptyDescription = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.rainbow.palette.text.label};
    text-align: center;
    margin-bottom: 4px;
`;

export const DescriptionHighlight = styled.span`
    font-size: 14px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    font-family: Lato Bold, Helvetica, sans-serif;
    margin: 0 4px;
`;

export const InfoLoadingContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
`;

export const FlightTitleLoading = styled.div`
    height: 36px;
    margin-bottom: 16px;
    width: 50px;
    min-width: 30px;

    > div > div {
        min-width: 30px;
    }
`;

export const FlightDateLoading = styled.div`
    height: 16px;
    width: 100px;
    min-width: 60px;

    > div > div {
        min-width: 60px;
    }
`;

export const StyledPlanePath = styled(PlanePath)`
    color: ${(props) => props.theme.rainbow.palette.border.divider};
    margin: 12px 0 0 0;
`;

export const LoadingFooter = styled(Footer)`
    margin-top: 43px;
`;

export const OutputLoading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
`;

export const OutputLabelLoading = styled.div`
    height: 14px;
    margin-bottom: 8px;
    width: 30%;
    min-width: 20px;

    > div > div {
        min-width: 20px;
    }
`;

export const OutputLabelLoadingLarge = styled.div`
    height: 14px;
    margin-bottom: 8px;
    width: 60%;
    min-width: 40px;

    > div > div {
        min-width: 40px;
    }
`;

export const OutputValueLoading = styled.div`
    height: 16px;
    width: 50%;
    min-width: 20px;

    > div > div {
        min-width: 20px;
    }
`;

export const OutputValueLoadingLarge = styled.div`
    height: 16px;
    width: 90%;
    min-width: 40px;

    > div > div {
        min-width: 40px;
    }
`;

export const Error = styled.span`
    font-size: 0.875rem;
    margin-top: 0.5rem;
    align-self: center;
    color: ${(props) => props.theme.rainbow.palette.error.main};
`;
