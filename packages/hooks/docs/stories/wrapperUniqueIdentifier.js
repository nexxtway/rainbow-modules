import React from 'react';
import { useUniqueIdentifier } from '../../src';

export default function WrapperUniqueIdentifier() {
    const uniqueId = useUniqueIdentifier('rainbow');
    return (
        <p id={uniqueId}>
            <span>My unique identifier is: </span>
            {uniqueId}
        </p>
    );
}
