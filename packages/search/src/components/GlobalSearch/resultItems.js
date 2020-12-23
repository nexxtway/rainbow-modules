/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Item from './resultItem';
import Message from './message';
import { StyledCubeFilled, Bold } from './styled';

const ResultItems = (props) => {
    const { hits, onSelect, query, icon } = props;
    const iconToShow = icon || <StyledCubeFilled />;

    if (Array.isArray(hits) && hits.length > 0) {
        return hits.map((item, index) => {
            const { title, description } = item;
            const key = `item-${index}`;
            return (
                <Item
                    key={key}
                    label={title}
                    description={description}
                    icon={iconToShow}
                    onClick={() => onSelect(item)}
                />
            );
        });
    }

    const description = (
        <>
            Our robots did not find any match for <Bold>&quot;{query}&quot;</Bold>
        </>
    );

    return <Message title="No results" description={description} />;
};

ResultItems.propTypes = {
    hits: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    query: PropTypes.string,
    icon: PropTypes.node,
};

ResultItems.defaultProps = {
    query: '',
    icon: undefined,
};

export default ResultItems;
