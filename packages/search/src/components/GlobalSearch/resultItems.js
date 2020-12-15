import React from 'react';
import PropTypes from 'prop-types';
import Item from './resultItem';
import { StyledCubeFilled } from './styled';

const ResultItems = (props) => {
    const { results, activeTab } = props;
    if (activeTab) {
        return results[activeTab].items.map((item) => {
            const { title, description } = item;
            const key = `${title}_${description}`;
            return (
                <Item
                    key={key}
                    label={title}
                    description={description}
                    icon={<StyledCubeFilled />}
                />
            );
        });
    }
    return null;
};

ResultItems.propTypes = {
    results: PropTypes.object.isRequired,
    activeTab: PropTypes.string,
};

ResultItems.defaultProps = {
    activeTab: undefined,
};

export default ResultItems;
