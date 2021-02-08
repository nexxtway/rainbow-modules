/* eslint-disable react/no-unused-prop-types */
import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import useReduxForm from 'react-rainbow-components/libs/hooks/useReduxForm';
import debounce from 'react-rainbow-components/libs/debounce';
import AirlinesLookup from './airlinesLookup';
import FlightDetails from './flightDetails';
import { StyledContainer, Row, StyledInput, StyledButton, StyledUpdate, Error } from './styled';

export default function FlightStatsInput(props) {
    const {
        style,
        className,
        isLoading,
        airlines,
        onChange,
        onChangeDebounced,
        value = {},
        required,
        error,
    } = useReduxForm(props);
    const { airline, flightNumber = '', flightDetails, date } = value || {};
    const hasInputsFilled = airline && flightNumber;

    const onChangeWithDebounce = useCallback(debounce(onChangeDebounced, 500), []);

    const fireChange = (newValue) => {
        onChange(newValue);
        onChangeWithDebounce({
            airline: newValue.airline,
            flightNumber: newValue.flightNumber,
        });
    };

    const handleChangeAirlne = (airlineToSelect) => {
        const newAirline = airlineToSelect && airlineToSelect.airline;
        fireChange({
            ...value,
            airline: newAirline,
        });
    };

    const handleChangeFlightNumber = (event) => {
        const newFlightNumber = event.target.value;
        fireChange({
            ...value,
            flightNumber: newFlightNumber,
        });
    };

    const updateFlightStatus = () => {
        onChange(value);
        onChangeDebounced({
            airline: value.airline,
            flightNumber: value.flightNumber,
        });
    };

    return (
        <StyledContainer className={className} style={style}>
            <Row>
                <AirlinesLookup
                    airlines={airlines}
                    onChange={handleChangeAirlne}
                    value={airline}
                    required={required}
                />
                <StyledInput
                    label="Flight Number"
                    required={required}
                    labelAlignment="left"
                    placeholder="Flight Number"
                    onChange={handleChangeFlightNumber}
                    value={flightNumber}
                />
            </Row>
            <FlightDetails
                data={flightDetails}
                date={date}
                flightNumber={flightNumber}
                isLoading={isLoading}
            />
            <RenderIf isTrue={hasInputsFilled && !isLoading}>
                <StyledButton variant="base" onClick={updateFlightStatus}>
                    <StyledUpdate />
                    Update Flight Status
                </StyledButton>
            </RenderIf>
            <RenderIf isTrue={error}>
                <Error>{error}</Error>
            </RenderIf>
        </StyledContainer>
    );
}

const DateType = PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.string,
    PropTypes.number,
]);

FlightStatsInput.propTypes = {
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** Loading state to indicate data is fetching. */
    isLoading: PropTypes.bool,
    /** List with airlines to select. */
    airlines: PropTypes.arrayOf(
        PropTypes.shape({
            iata: PropTypes.string,
            icao: PropTypes.string,
            name: PropTypes.string,
        }),
    ),
    /** The action trigged when some input value change. */
    onChange: PropTypes.func,
    /** The action trigged with debounce when some input value change. */
    onChangeDebounced: PropTypes.func,
    /** Specifies the value of the component. */
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.shape({
            airline: PropTypes.shape({
                iata: PropTypes.string,
                icao: PropTypes.string,
                name: PropTypes.string,
            }),
            flightNumber: PropTypes.string,
            flightDetails: PropTypes.shape({
                updatedAt: DateType,
                departureAirport: PropTypes.string,
                departureAirportTimezone: PropTypes.string,
                departureTime: DateType,
                arrivalAirport: PropTypes.string,
                arrivalAirportTimezone: PropTypes.string,
                arrivalTime: DateType,
                direction: PropTypes.string,
                status: PropTypes.string,
            }),
            date: DateType,
        }),
    ]),
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    required: PropTypes.bool,
    /** Specifies that an input field must be filled out before submitting the form. */
    error: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

FlightStatsInput.defaultProps = {
    className: undefined,
    style: undefined,
    isLoading: false,
    airlines: [],
    onChange: () => {},
    onChangeDebounced: () => {},
    value: undefined,
    required: false,
    error: undefined,
};
