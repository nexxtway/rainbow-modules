import React from 'react';
import { Tab } from 'react-rainbow-components';

const Tabs = (props) => {
    const { results } = props;
    return Object.keys(results).map((entityName) => {
        return <Tab key={entityName} label={entityName} name={entityName} id={entityName} />;
    });
};

export default Tabs;
