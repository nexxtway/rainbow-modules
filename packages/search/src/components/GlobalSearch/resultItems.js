import React from 'react';
import PropTypes from 'prop-types';
import Item from './resultItem';
import { StyledCubeFilled } from './styled';

const ResultItems = (props) => {
    const { hits, onSelect } = props;
    if (Array.isArray(hits)) {
        return hits.map((item, index) => {
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
    hits: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default ResultItems;
