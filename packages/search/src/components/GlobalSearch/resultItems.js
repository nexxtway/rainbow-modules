import React from 'react';
import Item from './resultItem';
import { StyledCubeFilled } from './styled';

const ResultItems = (props) => {
    const { results, activeTab } = props;
    if (activeTab) {
        return results[activeTab].items.map((item) => {
            return (
                <Item
                    label={item.title}
                    description={item.description}
                    icon={<StyledCubeFilled />}
                />
            );
        });
    }
    return null;
};

export default ResultItems;
