import React, { useState, useEffect } from 'react';
import { Application } from 'react-rainbow-components';
import useStorageState from '../../../hooks/src/useStorageState';
import FlightStatsInput from '../../src/components/FlightStatsInput';
import { flightStatus, airlines as airlinesData } from './data';

const fetchAirlines = async () => {
    return new Promise((resolve) => {
        setTimeout(() => resolve(airlinesData), 500);
    });
};

const fetchFlightStatus = async () => {
    if (Math.random() < 0.5) {
        return new Promise((resolve) => {
            setTimeout(() => resolve(flightStatus), 1000);
        });
    }
    return {
        flightStatuses: [],
    };
};

const useAirlines = () => {
    const [airlines, setAirlines] = useStorageState({ key: 'airlines' });
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        if (!airlines) {
            (async () => {
                const result = await fetchAirlines();
                setAirlines(result);
                setLoading(false);
            })();
        } else {
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [airlines, isLoading];
};

export const Basic = () => {
    const [value, setValue] = useState();
    const [isLoading, setLoading] = useState(false);
    const [airlines = []] = useAirlines();

    const fetchStatus = async (newValue) => {
        const date = new Date();
        const { airline, flightNumber } = newValue;

        setLoading(true);
        const result = await fetchFlightStatus({
            carrier: airline.iata || airline.icao,
            direction: 'arrival',
            flight: flightNumber,
            year: date.getFullYear(),
            month: date.getMonth() + 1,
            day: date.getDate(),
        });
        setLoading(false);
        if (result && Array.isArray(result.flightStatuses) && result.flightStatuses.length > 0) {
            const {
                departureAirport,
                departureDate,
                arrivalAirport,
                arrivalDate,
                status,
            } = result.flightStatuses[0];
            setValue({
                ...newValue,
                flightDetails: {
                    updatedAt: date,
                    departureAirport: departureAirport.fs,
                    departureAirportTimezone: departureAirport.timeZoneRegionName,
                    departureTime: departureDate.dateUtc,
                    arrivalAirport: arrivalAirport.fs,
                    arrivalAirportTimezone: arrivalAirport.timeZoneRegionName,
                    arrivalTime: arrivalDate.dateUtc,
                    direction: 'arrival',
                    status,
                },
                date,
            });
        } else {
            setValue({
                ...newValue,
                flightDetails: null,
                date,
            });
        }
    };

    const handleChangeDebounced = (newValue) => {
        if (newValue && newValue.airline && newValue.flightNumber) {
            fetchStatus(newValue);
        } else {
            setValue(newValue);
        }
    };

    return (
        <Application>
            <FlightStatsInput
                isLoading={isLoading}
                airlines={airlines}
                value={value}
                onChange={setValue}
                onChangeDebounced={handleChangeDebounced}
                required
            />
        </Application>
    );
};

export default {
    title: 'Modules/Forms/Stories/FlightStatsInput',
};
