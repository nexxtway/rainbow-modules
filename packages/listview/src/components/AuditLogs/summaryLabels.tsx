import React from 'react';
import PropTypes from 'prop-types';
import { Badge } from 'react-rainbow-components';

type LabelsProps = { labels?: Record<string, string> };

const SummaryLabels = ({ labels }: LabelsProps): JSX.Element | null => {
    if (!labels) return null;
    return (
        <>
            {Object.keys(labels).map((name, index) => (
                <Badge key={`label-${name}-${index}`} label={labels[name]} size="small" />
            ))}
        </>
    );
};

SummaryLabels.propTypes = {
    labels: PropTypes.object,
};

SummaryLabels.defaultProps = {
    labels: undefined,
};

export default SummaryLabels;
