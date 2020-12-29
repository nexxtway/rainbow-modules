import React, { useState } from 'react';
import { Field } from 'react-final-form';
import styled from 'styled-components';
import {
    Input,
    ButtonIcon,
    Column,
    MenuItem,
    Textarea,
    MultiSelect,
    Option,
    Badge,
} from 'react-rainbow-components';
import { FirestoreTable } from '@rainbow-modules/listview';
import { Plus } from '@rainbow-modules/icons';
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

const StyledBadge = styled(Badge)`
    margin: 0 5px;
`;

const TableContainer = styled.div`
    margin: 20px 50px;
`;

const StyledLeftText = styled.div`
    text-align: left;
    margin-left: 12px;
    margin-right: 6px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;

const CategoriesContent = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-top: 8px;
`;

const TitleContainer = styled.div`
    margin: 20px 50px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 30px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    font-family: Lato Bold, Helvetica, sans-serif;
`;

const convertCategoriesToString = (values) => {
    return {
        ...values,
        categories: values.categories.map((cat) => cat.label).join(),
    };
};

const convertCategoriesToArray = (values) => {
    return {
        ...values,
        categories: values.categories.split(',').map((cat) => ({ label: cat, name: cat })),
    };
};

const CategoriesBadge = ({ value }) => {
    const categories = value.split(',');
    return categories.map((category, index) => {
        // eslint-disable-next-line react/no-array-index-key
        return <StyledBadge key={`${category}-${index}`} label={category} />;
    });
};

// eslint-disable-next-line react/prop-types
const LeftText = ({ value }) => <StyledLeftText>{value}</StyledLeftText>;

// eslint-disable-next-line react/prop-types
const Categories = ({ value }) => (
    <CategoriesContent>
        <CategoriesBadge value={value} />
    </CategoriesContent>
);

// eslint-disable-next-line react/prop-types
const Books = () => {
    const { mutate: removeBook } = useRemoveDoc();
    const { mutate: updateDoc } = useUpdateDoc();
    const [openModal, closeModal] = useOpenModal('add-edit-book');
    const onRemove = (_, { id }) => removeBook(`/books/${id}`);

    const onUpdate = async (values, id) => {
        showAppSpinner();
        try {
            const newValues = convertCategoriesToString(values);
            await updateDoc({ path: `/books/${id}`, data: newValues });
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
                description: `There was an error adding book ${id}`,
                title: 'Error!',
                icon: 'error',
            });
        }
    };
    const onEdit = (_, book) => {
        const newBook = convertCategoriesToArray(book);
        openModal({
            title: 'Edit Book',
            initialValues: newBook,
            onSubmit: (values) => onUpdate(values, book.id),
        });
    };
    return (
        <TableContainer>
            <FirestoreTable collection="books" variant="listview">
                <Column field="name" header="Name" component={LeftText} />
                <Column field="author" header="Author" component={LeftText} />
                <Column field="description" header="Description" component={LeftText} />
                <Column field="categories" header="Categories" component={Categories} />
                <Column type="action">
                    <MenuItem label="Edit" onClick={onEdit} />
                    <MenuItem label="Remove" onClick={onRemove} />
                </Column>
            </FirestoreTable>
        </TableContainer>
    );
};

const Fields = () => {
    const [value, setValue] = useState([]);

    return (
        <div>
            <Field
                name="name"
                component={Input}
                label="Name"
                validate={isRequired()}
                required
                placeholder="Enter the book name"
                className="rainbow-m-bottom_large"
            />
            <Field
                name="author"
                component={Input}
                label="Auhtor"
                validate={isRequired()}
                required
                placeholder="Enter the book author"
                className="rainbow-m-bottom_large"
            />
            <Field
                name="categories"
                component={MultiSelect}
                label="Select categories"
                placeholder="Select categories"
                value={value}
                onChange={setValue}
                bottomHelpText="You can select several options"
                variant="chip"
                className="rainbow-m-bottom_large"
            >
                <Option name="Fantasy" label="Fantasy" />
                <Option name="Adventure" label="Adventure" />
                <Option name="Classics" label="Classics" />
                <Option name="Academic" label="Academic" />
                <Option name="Novel" label="Novel" />
            </Field>
            <Field
                name="description"
                component={Textarea}
                label="Description"
                rows={4}
                placeholder="Enter the book description"
                className="rainbow-m-bottom_large"
            />
        </div>
    );
};

const App = () => {
    const connectedModalProps = useConnectModal('add-edit-book');
    const [openModal, closeModal] = useOpenModal('add-edit-book');
    const { mutate: addBook } = useAddDoc('books');
    const onSubmit = async (values) => {
        showAppSpinner();
        try {
            const newValues = convertCategoriesToString(values);
            await addBook(newValues);
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
                description: `There was an error adding book ${values.name}`,
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
            <TitleContainer>
                <Title>Books</Title>
                <ButtonIcon
                    icon={<Plus />}
                    variant="border-filled"
                    shaded
                    onClick={openCreateBook}
                />
            </TitleContainer>
            <Books />
            <UniversalFormModal
                fields={Fields}
                {...connectedModalProps}
                submitButtonLabel="Create"
            />
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
