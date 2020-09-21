import React, { useState } from 'react';
import styled from 'styled-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import app from '../../../../firebase';
import DatePickerCarousel from '../../src/components/DatePickerCarousel';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

// eslint-disable-next-line react/prop-types
const PickDate = (props) => {
    const [date, setDate] = useState(new Date());
    return <DatePickerCarousel {...props} value={date} onChange={(date) => setDate(date)} />;
};

export const basicUsage = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Container>
                <PickDate />
            </Container>
        </RainbowFirebaseApp>
    );
};

export const usageWithCustomLocale = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Container>
                <PickDate locale="es-ES" />
            </Container>
        </RainbowFirebaseApp>
    );
};

export const withDoubleCalendar = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Container>
                <PickDate variant="double" />
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|Datetime/Stories/DatePickerCarousel',
    component: DatePickerCarousel,
};
