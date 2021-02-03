import React from 'react';
import PropTypes from 'prop-types';
import { Option, Badge } from 'react-rainbow-components';
import {
    StyledContainer,
    Row,
    StyledPicklist,
    StyledInput,
    StatusContainer,
    FlightInfo,
    FlightTitle,
    FlightDate,
    StyledPlane,
    Output,
    Label,
    Value,
    Footer,
    StyledButton,
    StyledUpdate,
} from './styled';

export default function UniversalPicker(props) {
    const { style, className } = props;

    return (
        <StyledContainer className={className} style={style}>
            <Row>
                <StyledPicklist
                    placeholder="Select Airline"
                    label="Select Airline"
                    required
                    labelAlignment="left"
                >
                    <Option name="header" label="Airlines" variant="header" />
                    <Option name="option 1" label="Experimental Building" />
                    <Option name="option 2" label="Empire State" />
                    <Option name="option 3" label="Central Park" />
                </StyledPicklist>
                <StyledInput
                    label="Flight Number"
                    required
                    labelAlignment="left"
                    placeholder="Flight Number"
                />
            </Row>
            <StatusContainer>
                <Row>
                    <FlightInfo>
                        <FlightTitle>NYC</FlightTitle>
                        <FlightDate>Apr 24, 09:22 PM</FlightDate>
                    </FlightInfo>
                    <StyledPlane />
                    <FlightInfo>
                        <FlightTitle>GDL</FlightTitle>
                        <FlightDate>Apr 24, 09:22 PM</FlightDate>
                    </FlightInfo>
                </Row>
                <Footer>
                    <Output>
                        <Label>Flight</Label>
                        <Value>123456</Value>
                    </Output>
                    <Output>
                        <Label>Updated At</Label>
                        <Value>Apr 24, 09:22 PM</Value>
                    </Output>
                    <Output>
                        <Label>Departed</Label>
                        <Badge label="On Time" size="small" variant="success" />
                    </Output>
                </Footer>
            </StatusContainer>
            <StyledButton variant="base">
                <StyledUpdate />
                Update Flight Status
            </StyledButton>
        </StyledContainer>
    );
}

UniversalPicker.propTypes = {
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
};

UniversalPicker.defaultProps = {
    className: undefined,
    style: undefined,
};
