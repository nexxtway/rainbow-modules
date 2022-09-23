import React from 'react';
import { Timestamp } from 'firebase/firestore';
import { StyledCellText } from './styled';

interface FirestoreDateProps {
    // eslint-disable-next-line react/require-default-props
    value?: Timestamp;
}

const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
};

const FirestoreDate = ({ value }: FirestoreDateProps): JSX.Element => {
    return <StyledCellText>{value?.toDate().toLocaleString(undefined, options)}</StyledCellText>;
};

export default FirestoreDate;
