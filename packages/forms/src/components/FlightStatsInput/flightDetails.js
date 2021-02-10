import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-rainbow-components';
import EmptyMessage from './emptyMessage';
import Loading from './loading';
import getFormattedDateTime from './helpers/getFormattedDateTime';
import {
    Row,
    StatusContainer,
    FlightInfo,
    FlightTitle,
    FlightDate,
    StyledPlane,
    Output,
    Label,
    Value,
    Footer,
} from './styled';

const badgeStatusMap = {
    l: 'success',
    landed: 'success',
    a: 'brand',
    active: 'brand',
    c: 'error',
    canceled: 'error',
    d: 'warning',
    diverted: 'warning',
    delayed: 'warning',
    r: 'warning',
    redirected: 'warning',
    no: 'error',
    'not operational': 'error',
    s: 'brand',
    scheduled: 'brand',
    u: 'default',
    unknown: 'default',
};

const statusMap = {
    l: 'landed',
    a: 'active',
    c: 'canceled',
    d: 'diverted',
    no: 'not operational',
    r: 'redirected',
    s: 'scheduled',
    u: 'unknown',
};

export default function FlightDetails(props) {
    const { data, date, flightNumber, isLoading } = props;
    const {
        updatedAt,
        departureAirport,
        departureAirportTimezone,
        departureTime,
        arrivalAirport,
        arrivalAirportTimezone,
        arrivalTime,
        direction,
        status = '',
    } = data || {};
    const statusVariant = badgeStatusMap[status.toLowerCase()];
    const statusLabel = statusMap[status.toLowerCase()] || status;

    const isUndefined = data === undefined;
    const isNull = data === null;

    if (isLoading) {
        return (
            <StatusContainer>
                <Loading />
            </StatusContainer>
        );
    }
    if (isUndefined) {
        return null;
    }
    if (isNull) {
        return (
            <StatusContainer>
                <EmptyMessage date={date} />
            </StatusContainer>
        );
    }

    return (
        <StatusContainer>
            <Row>
                <FlightInfo>
                    <FlightTitle>{departureAirport}</FlightTitle>
                    <FlightDate>
                        {getFormattedDateTime({
                            date: departureTime,
                            timeZone: departureAirportTimezone,
                        })}
                    </FlightDate>
                    <Label>{departureAirportTimezone}</Label>
                </FlightInfo>
                <StyledPlane />
                <FlightInfo>
                    <FlightTitle>{arrivalAirport}</FlightTitle>
                    <FlightDate>
                        {getFormattedDateTime({
                            date: arrivalTime,
                            timeZone: arrivalAirportTimezone,
                        })}
                    </FlightDate>
                    <Label>{arrivalAirportTimezone}</Label>
                </FlightInfo>
            </Row>
            <Footer>
                <Output>
                    <Label>Flight</Label>
                    <Value>{flightNumber}</Value>
                </Output>
                <Output>
                    <Label>Updated At</Label>
                    <Value>{getFormattedDateTime({ date: updatedAt })}</Value>
                </Output>
                <Output>
                    <Label>{direction}</Label>
                    <Badge label={statusLabel} size="small" variant={statusVariant} />
                </Output>
            </Footer>
        </StatusContainer>
    );
}

FlightDetails.propTypes = {
    data: PropTypes.object,
    date: PropTypes.oneOfType([PropTypes.instanceOf(Date), PropTypes.string, PropTypes.number]),
    flightNumber: PropTypes.string,
    isLoading: PropTypes.bool,
};

FlightDetails.defaultProps = {
    data: undefined,
    date: undefined,
    flightNumber: undefined,
    isLoading: false,
};
