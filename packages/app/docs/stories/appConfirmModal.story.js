import React from 'react';
import styled from 'styled-components';
import { Button } from 'react-rainbow-components';
import RainbowFirebaseApp from '../../src/components/App';
import ConfirmModal from '../../src/components/ConfirmModal';
import { confirmModal, showAppMessage } from '../../src/actions';

const Container = styled.div`
    display: flex;
    justify-content: center;
    padding: 2rem;
`;

const DeleteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
        <g fill="none" fillRule="evenodd">
            <path d="M0 0H100V100H0z" />
            <path
                fill="#FE4849"
                fillRule="nonzero"
                d="M64.23 23.205v-2.82c0-3.116-2.525-5.641-5.64-5.641H44.487c-3.1.038-5.603 2.541-5.64 5.64v2.821H24.743v2.82h2.82l2.849 53.692c.243 3.096 2.804 5.496 5.909 5.54h30.433c3.105-.044 5.666-2.444 5.91-5.54l2.848-53.691h2.82v-2.82H64.231zm-5.64-5.64c1.557 0 2.82 1.262 2.82 2.82v2.82H41.667v-2.82c0-1.558 1.262-2.82 2.82-2.82H58.59zM69.858 79.53c-.15 1.614-1.482 2.862-3.103 2.905H36.322c-1.621-.043-2.954-1.29-3.103-2.905l-2.834-53.505h42.307L69.858 79.53zm-16.91-2.736V31.667h-2.82v45.128h2.82zm-8.46 0l-2.821-45.128h-2.82l2.82 45.128h2.82zm19.729-45.128H61.34l-2.75 45.128h2.82l2.807-45.128z"
            />
        </g>
    </svg>
);

export const showConfirmModalBasicExample = () => {
    const handleClick = async () => {
        const result = await confirmModal({
            question: 'Click OK to if you are sure.',
        });
        // eslint-disable-next-line no-alert
        if (result)
            showAppMessage({
                message: 'You clicked OK.',
                variant: 'success',
            });
    };
    return (
        <RainbowFirebaseApp>
            <Container>
                <Button label="Show confirm modal" onClick={handleClick} />
            </Container>
        </RainbowFirebaseApp>
    );
};

export const showConfirmModalExample = () => {
    const handleClick = async () => {
        const result = await confirmModal({
            icon: <DeleteIcon />,
            variant: 'destructive',
            header: 'Are you sure you want delete this item?',
            question: "This item will be deleted immediately. You can't undo this action.",
            okButtonLabel: 'Delete',
        });
        // eslint-disable-next-line no-alert
        if (result)
            showAppMessage({
                message: 'Item deleted successfully.',
                variant: 'success',
            });
    };
    return (
        <RainbowFirebaseApp>
            <Container>
                <Button label="Show confirm modal" onClick={handleClick} />
            </Container>
        </RainbowFirebaseApp>
    );
};

export const showYesNoModalExample = () => {
    const handleClick = async () => {
        const result = await confirmModal({
            header: 'Do you want to continue?',
            question: 'Your will loose all your data.',
            okButtonLabel: 'Yes',
            cancelButtonLabel: 'No',
        });
        // eslint-disable-next-line no-alert
        if (result)
            showAppMessage({
                message: 'You clicked YES.',
                variant: 'success',
            });
    };
    return (
        <RainbowFirebaseApp>
            <Container>
                <Button label="Show confirm modal" onClick={handleClick} />
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'App/Stories/Modals',
    component: ConfirmModal,
};
