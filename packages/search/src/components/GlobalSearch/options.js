import React from 'react';
import Option from './option';
import { StyledCubeFilled } from './styled';

const Options = ({ results, onSelect }) => {
    return Object.keys(results).map((entityName) => {
        return results[entityName].items.map((item, index) => {
            const { title, description } = item;
            const key = `option-${index}`;

            return (
                <Option
                    key={key}
                    label={title}
                    description={description}
                    icon={<StyledCubeFilled />}
                    onClick={() => onSelect(item)}
                />
            );
        });
    });
};

export default Options;
