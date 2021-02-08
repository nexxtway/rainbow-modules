import { CSSProperties, ReactNode } from 'react';

interface Airline {
    iata?: string;
    icao?: string;
    name?: string;
}

type DateType = Date | string | number;

interface FlightDetails {
    updatedAt?: DateType;
    departureAirport?: string;
    departureAirportTimezone?: string;
    departureTime?: DateType;
    arrivalAirport?: string;
    arrivalAirportTimezone?: string;
    arrivalTime?: DateType;
    direction?: string;
    status?: string;
}

interface Value {
    airline?: Airline;
    flightNumber?: string;
    flightDetails?: FlightDetails;
    date?: DateType;
}

export interface Props {
    /** The class name of the root element. */
    className?: string;
    /** It is an object with custom style applied to the root element. */
    style?: CSSProperties;
    /** Loading state to indicate data is fetching. */
    isLoading?: boolean;
    /** List with airlines to select. */
    airlines?: Array<Airline>;
    /** The action trigged when some input value change. */
    onChange?: (value: Value) => void;
    /** The action trigged with debounce when some input value change. */
    onChangeDebounced?: (value: Value) => void;
    /** Specifies the value of the component. */
    value?: Value;
    /** Specifies that an input field must be filled out before submitting the form.
     * This value defaults to false. */
    required?: boolean;
    /** Specifies that an input field must be filled out before submitting the form. */
    error?: ReactNode;
}

export default function (props: Props): JSX.Element | null;
