import React from 'react';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Plus, Trash } from '@rainbow-modules/icons';
import { useMutationFlow } from '@rainbow-modules/hooks';
import { Table, Column, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import styled from 'styled-components';
import app from '../../../../firebase';
import useCollection from '../../src/firestore/useCollection';
import useBatch from '../../src/firestore/useBatch';

const TableContainer = styled.div`
    margin: 20px 50px;
`;

const ButtonsContainer = styled.div`
    display: flex;
`;

const baseURL = 'https://sampleapis.com/movies/api/action-adventure';

const fetchMovies = async () => {
    const result = await fetch(baseURL);
    return result.json();
};

const Movies = () => {
    const [data, isLoading] = useCollection({
        path: 'movies',
    });
    const { batchAdd, batchDelete } = useBatch({
        collection: 'movies',
    });

    const addBulk = async () => {
        const movies = await fetchMovies();
        return batchAdd(movies);
    };

    const { mutate: addMovies } = useMutationFlow({
        mutation: addBulk,
        successMessage: 'Movies were added sucessfully.',
        errorMessage: 'There was an error.Please try again.',
    });
    const { mutate: deleteMovies } = useMutationFlow({
        mutation: batchDelete,
        successMessage: 'Movies were deleted sucessfully.',
        errorMessage: 'There was an error.Please try again.',
    });

    return (
        <TableContainer>
            <ButtonsContainer>
                <ButtonGroup variant="shaded">
                    <ButtonIcon
                        icon={<Plus />}
                        tooltip="Add movies in bulk"
                        shaded
                        onClick={addMovies}
                    />
                    <ButtonIcon
                        icon={<Trash />}
                        tooltip="Delete movies in bulk"
                        shaded
                        onClick={() => deleteMovies(data)}
                    />
                </ButtonGroup>
            </ButtonsContainer>
            <Table keyField="id" data={data} isLoading={isLoading} variant="listview">
                <Column field="data.title" header="Name" />
                <Column field="data.imdbId" header="imdbId" />
            </Table>
        </TableContainer>
    );
};

export const batchOperations = () => {
    return (
        <RainbowFirebaseApp app={app}>
            <Movies />
        </RainbowFirebaseApp>
    );
};
