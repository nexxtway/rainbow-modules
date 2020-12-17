import React from 'react';
import { Tab } from 'react-rainbow-components';

const TabLabel = ({ totalHits, label }) => {
    if (typeof totalHits === 'number') {
        return <span>{`${label} ${totalHits}`}</span>;
    }
    return label;
};

const Tabs = (props) => {
    const { results } = props;
    return Object.keys(results).map((entityName) => {
        const { totalHits } = results[entityName];
        return (
            <Tab
                key={entityName}
                label={<TabLabel totalHits={totalHits} label={entityName} />}
                name={entityName}
                id={entityName}
            />
        );
    });
};

export default Tabs;
