import React from 'react';
import { Field } from 'react-final-form';
import { Input, Button, Column, MenuItem } from 'react-rainbow-components';
import { FirestoreTable } from '@rainbow-modules/listview';
import { useAddDoc, useRemoveDoc, useUpdateDoc } from '@rainbow-modules/firebase-hooks';
import {
    RainbowFirebaseApp,
    showAppSpinner,
    hideAppSpinner,
    showAppNotification,
} from '@rainbow-modules/app';
import { useConnectModal, useOpenModal } from '@rainbow-modules/hooks';

import app from '../../../../firebase';
import UniversalFormModal from '../../src/components/UniversalFormModal';
import isRequired from '../../src/validators/isRequired';

// eslint-disable-next-line react/prop-types
const Books = () => {
    const { mutate: removeBook } = useRemoveDoc();
    const { mutate: updateDoc } = useUpdateDoc();
    const [openModal, closeModal] = useOpenModal('add-edit-book');
    const onRemove = (_, { id }) => removeBook(`/books/${id}`);

    const onUpdate = async (values, id) => {
        showAppSpinner();
        try {
            await updateDoc({ path: `/books/${id}`, data: values });
            closeModal();
            hideAppSpinner();
            showAppNotification({
                description: `Book '${id}' was update.`,
                title: 'Success!',
                icon: 'success',
            });
        } catch (err) {
            hideAppSpinner();
            showAppNotification({
                description: `There was and error adding book ${id}`,
                title: 'Error!',
                icon: 'error',
            });
        }
    };
    const onEdit = (_, book) => {
        openModal({
            title: 'Edit Book',
            initialValues: book,
            onSubmit: (values) => onUpdate(values, book.id),
        });
    };
    return (
        <FirestoreTable collection="books" variant="listview">
            <Column field="name" header="Name" />
            <Column field="author" header="Author" />
            <Column type="action">
                <MenuItem label="Edit" onClick={onEdit} />
                <MenuItem label="Remove" onClick={onRemove} />
            </Column>
        </FirestoreTable>
    );
};

const Fields = () => (
    <div>
        <Field name="name" component={Input} label="Name" validate={isRequired()} />
        <Field name="author" component={Input} label="Auhtor" validate={isRequired()} />
    </div>
);

const App = () => {
    const connectedModalProps = useConnectModal('add-edit-book');
    const [openModal, closeModal] = useOpenModal('add-edit-book');
    const { mutate: addBook } = useAddDoc('books');
    const onSubmit = async (values) => {
        showAppSpinner();
        try {
            await addBook(values);
            closeModal();
            hideAppSpinner();
            showAppNotification({
                description: `Book '${values.name}' was added.`,
                title: 'Success!',
                icon: 'success',
            });
        } catch (err) {
            hideAppSpinner();
            showAppNotification({
                description: `There was and error adding book ${values.name}`,
                title: 'Error!',
                icon: 'error',
            });
        }
    };
    const openCreateBook = () =>
        openModal({
            title: 'Add Book',
            onSubmit,
        });

    return (
        <div>
            <Button label="Add Book" onClick={openCreateBook} />
            <Books />
            <UniversalFormModal fields={Fields} {...connectedModalProps} />
        </div>
    );
};

export const Basic = () => (
    <RainbowFirebaseApp app={app}>
        <App />
    </RainbowFirebaseApp>
);

export default {
    title: 'Modules|Forms/Stories/UniversalFromModal',
};
