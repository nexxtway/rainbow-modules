import React from 'react';
import Option from './option';
import { StyledCubeFilled } from './styled';

const Options = (props) => {
    const { results } = props;
    return Object.keys(results).map((entityName) => {
        return results[entityName].items.map((item) => {
            return (
                <Option
                    label={item.title}
                    description={item.description}
                    icon={<StyledCubeFilled />}
                />
            );
        });
    });
};

export default Options;
