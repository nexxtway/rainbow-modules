import React from 'react';
import {
    EmptyMassageContainer,
    WorldImage,
    EmptyTitle,
    EmptyDescription,
    DescriptionHighlight,
} from './styled';

export default function EmptyMessage() {
    return (
        <EmptyMassageContainer>
            <WorldImage />
            <EmptyTitle>Lost in the skies?</EmptyTitle>
            <EmptyDescription>We have not found any flight for</EmptyDescription>
            <DescriptionHighlight>July 16, 2020, 12:30 AM</DescriptionHighlight>
        </EmptyMassageContainer>
    );
}
