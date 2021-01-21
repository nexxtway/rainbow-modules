/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import Item from './resultItem';
import Message from './message';
import { StyledCubeFilled, Bold } from './styled';

const ResultItems = (props) => {
    const { hits, onSelect, query, icon, component } = props;
    const iconToShow = icon || <StyledCubeFilled />;

    if (Array.isArray(hits) && hits.length > 0) {
        return hits.map((item, index) => {
            const key = `item-${index}`;
            return (
                <Item
                    {...item}
                    key={key}
                    icon={iconToShow}
                    onClick={() => onSelect(item)}
                    component={component}
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
    component: PropTypes.func,
};

ResultItems.defaultProps = {
    query: '',
    icon: undefined,
    component: undefined,
};

export default ResultItems;
