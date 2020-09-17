import React, { useState } from 'react';
import styled from 'styled-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import app from '../../../../firebase';
import DatePickerCarousel from '../../src/components/DatePickerCarousel';
import CarouselCalendar from '../../src/components/DatePickerCarousel/carouselCalendar';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2rem;
`;

const PickDate = () => {
    const [date, setDate] = useState(new Date());
    return (
        <CarouselCalendar
            value={date}
            onChange={(date) => setDate(date)}
            minDate={new Date('2020/09/01')}
            maxDate={new Date('2020/10/31')}
        />
    );
    // return <DatePickerCarousel value={date} onChange={(date) => setDate(date)} />;
};

export const datePickerCarousel = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Container>
                <PickDate />
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|Datetime/Stories',
    component: DatePickerCarousel,
};
