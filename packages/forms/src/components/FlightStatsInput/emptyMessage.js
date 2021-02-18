import React from 'react';
import getFormattedDateTime from './helpers/getFormattedDateTime';
import {
    EmptyMassageContainer,
    WorldImage,
    EmptyTitle,
    EmptyDescription,
    DescriptionHighlight,
} from './styled';

// eslint-disable-next-line react/prop-types
export default function EmptyMessage({ date }) {
    return (
        <EmptyMassageContainer>
            <WorldImage />
            <EmptyTitle>Lost in the skies?</EmptyTitle>
            <EmptyDescription>We have not found any flight for</EmptyDescription>
            <DescriptionHighlight>{getFormattedDateTime({ date })}</DescriptionHighlight>
        </EmptyMassageContainer>
    );
}
