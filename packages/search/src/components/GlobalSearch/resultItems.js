import React from 'react';
import PropTypes from 'prop-types';
import Item from './resultItem';
import { StyledCubeFilled } from './styled';

const ResultItems = (props) => {
    const { results, activeTab, onSelect } = props;
    if (activeTab) {
        return results[activeTab].items.map((item, index) => {
            const { title, description } = item;
            const key = `item-${index}`;
            return (
                <Item
                    key={key}
                    label={title}
                    description={description}
                    icon={<StyledCubeFilled />}
                    onClick={() => onSelect(item)}
                />
            );
        });
    }
    return null;
};

ResultItems.propTypes = {
    results: PropTypes.object.isRequired,
    onSelect: PropTypes.func.isRequired,
    activeTab: PropTypes.string,
};

ResultItems.defaultProps = {
    activeTab: undefined,
};

export default ResultItems;
