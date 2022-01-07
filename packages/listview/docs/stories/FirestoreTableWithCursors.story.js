import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Column, Select } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import app from '../../../../firebase';
import FirestoreTableWithCursors from '../../src/components/FirestoreTableWithCursors';

export const basicFirestoreTableWithPageSize = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <FirestoreTableWithCursors collection="books" pageSize={1}>
                <Column field="id" header="Id" />
                <Column field="name" header="Name" />
            </FirestoreTableWithCursors>
        </RainbowFirebaseApp>
    );
};

export const basicFirestoreTableWithQuery = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <FirestoreTableWithCursors
                collection="books"
                query={(ref) => ref.where('name', '==', `You don't know JS`)}
            >
                <Column field="id" header="Id" />
                <Column field="name" header="Name" />
            </FirestoreTableWithCursors>
        </RainbowFirebaseApp>
    );
};

export const firestoreTablePassingDownProps = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <FirestoreTableWithCursors collection="books" showRowNumberColumn variant="listview">
                <Column field="id" header="Id" headerAlignment="left" cellAlignment="left" />
                <Column field="name" header="Name" />
            </FirestoreTableWithCursors>
        </RainbowFirebaseApp>
    );
};

const StyledSelect = styled(Select)`
    width: 200px;
`;

export const firestoreTableUsingRefresh = () => {
    const table = useRef();
    const [author, setAuthor] = useState('Reinier Guerra');

    const options = [
        { value: 'Reinier Guerra', label: 'Reinier Guerra' },
        { value: 'Leandro Torres', label: 'Leandro Torres' },
        { value: 'Kyle Simpson', label: 'Kyle Simpson' },
    ];
    useEffect(() => {
        if (table.current && author) {
            table.current.refresh();
        }
    }, [author]);
    return (
        <div>
            <StyledSelect
                label="Filter by Author"
                labelAlignment="left"
                options={options}
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
            />
            <RainbowFirebaseApp app={app}>
                <FirestoreTableWithCursors
                    pageSize={1}
                    variant="listview"
                    ref={table}
                    collection="books"
                    showRowNumberColumn
                    query={(ref) => ref.where('author', '==', author)}
                >
                    <Column field="id" header="Id" />
                    <Column field="name" header="Name" />
                    <Column field="author" header="Author" />
                </FirestoreTableWithCursors>
            </RainbowFirebaseApp>
        </div>
    );
};

export default {
    title: 'Modules/Listview/Stories/FirestoreTableWithCursors',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
