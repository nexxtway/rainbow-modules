/* eslint-disable react/prop-types */
import React from 'react';
import { ClockFilled } from '@rainbow-modules/icons';
import Option from './option';
import { OptionHeader } from './styled';

const Options = ({ items, onSelect, activeOptionIndex, onHover }) => {
    return items.map((item, index) => {
        const key = `recent-option-${index}`;
        const isActive = activeOptionIndex === index;

        return (
            <Option
                key={key}
                label={item}
                icon={<ClockFilled />}
                onClick={() => onSelect(item)}
                isActive={isActive}
                onHover={() => onHover(index)}
            />
        );
    });
};

const Recents = ({ items, onSelect, activeOptionIndex, onHover }) => {
    return (
        <>
            <OptionHeader>Recent searches</OptionHeader>
            <Options
                items={items}
                onSelect={onSelect}
                activeOptionIndex={activeOptionIndex}
                onHover={onHover}
            />
        </>
    );
};

export default Recents;
