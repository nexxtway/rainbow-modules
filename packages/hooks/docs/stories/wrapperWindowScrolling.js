/* eslint-disable react/prop-types */
import React, { useState, useMemo } from 'react';
import { CheckboxToggle } from 'react-rainbow-components';
import { useWindowScrolling } from '../../src';

const EventInfo = ({ data }) => {
    const list = useMemo(
        () =>
            Object.keys(data).map((prop, index) => {
                const key = `attr-${index}`;
                return (
                    <li key={key}>
                        <strong>{`${prop} `}</strong>
                        <em>{data[prop]}</em>
                    </li>
                );
            }),
        [data],
    );

    return (
        <div>
            <h3>Event props</h3>
            <ul>{list}</ul>
        </div>
    );
};

export default function WrapperWindowScrolling() {
    const [eventData, setEventData] = useState({});
    const [isListening, setIsListening] = useState(true);
    useWindowScrolling((event) => {
        const { type } = event;
        setEventData({ type });
    }, isListening);
    return (
        <div>
            <CheckboxToggle
                label="Enable and disabled to listener the window scroll"
                value={isListening}
                onChange={(event) => setIsListening(event.target.checked)}
            />
            <EventInfo data={eventData} />
        </div>
    );
}
