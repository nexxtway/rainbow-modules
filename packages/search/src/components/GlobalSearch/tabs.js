import React from 'react';
import { Tab } from 'react-rainbow-components';

const Tabs = (props) => {
    const { results } = props;
    return Object.keys(results).map((entityName) => {
        return <Tab label={entityName} name={entityName} id={entityName} />;
    });
};

export default Tabs;
