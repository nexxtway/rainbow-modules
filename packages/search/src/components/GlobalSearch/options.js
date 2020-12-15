import React from 'react';
import Option from './option';
import { StyledCubeFilled } from './styled';

const Options = ({ results }) => {
    return Object.keys(results).map((entityName) => {
        return results[entityName].items.map((item) => {
            const { title, description } = item;
            const key = `${title}_${description}`;

            return (
                <Option
                    key={key}
                    label={title}
                    description={description}
                    icon={<StyledCubeFilled />}
                />
            );
        });
    });
};

export default Options;
