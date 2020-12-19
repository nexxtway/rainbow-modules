import React from 'react';
import Option from './option';
import { StyledCubeFilled, BrandMagnifyingGlass } from './styled';

const Options = (props) => {
    const { hits, onSelect, activeOptionIndex, onHover, onClickFirstOption } = props;
    return hits.map((item, index) => {
        const { title, description } = item;
        const key = `option-${index}`;
        const isFirstItem = index === 0;
        const isActive = activeOptionIndex === index;
        const icon = isFirstItem ? <BrandMagnifyingGlass /> : <StyledCubeFilled />;

        const handleSelect = () => {
            if (isFirstItem) {
                onClickFirstOption();
            } else {
                onSelect(item);
            }
        };

        return (
            <Option
                key={key}
                label={title}
                description={description}
                icon={icon}
                onClick={handleSelect}
                isActive={isActive}
                onHover={() => onHover(index)}
            />
        );
    });
};

export default Options;
