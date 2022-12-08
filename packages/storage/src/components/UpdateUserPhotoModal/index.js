import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Button, RenderIf, Spinner } from 'react-rainbow-components';
import { useFirebaseApp, useCurrentUserState } from '@rainbow-modules/firebase-hooks';
import { nanoid } from 'nanoid';
import {
    getStorage,
    ref,
    getDownloadURL,
    uploadBytesResumable,
    deleteObject,
} from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { ArrowLeft } from '@rainbow-modules/icons';
import { confirmModal, showAppMessage } from '@rainbow-modules/app';
import EditRemoveDialog from './editRemoveDialog';
import {
    StyledModalEdit,
    StyledModalFooter,
    StyledButtonFocus,
    StyledCropperContainer,
    StyledCropper,
    StyledModal,
    Loading,
    StyledIcon,
    StyledPreviousButton,
    TrashIcon,
    StyledErrorContainer,
    StyledIconError,
} from './styled';
import RotateLeftIcon from './rotateLeftIcon';

const getInitials = (name) => {
    if (name) {
        const names = name.split(' ');
        const initials =
            names[0].substring(0, 1).toUpperCase() + names[1].substring(0, 1).toUpperCase();
        return initials;
    }
    return '';
};

export default function UpdateUserPhotoModal(props) {
    const { path, bucket, isOpen, onRequestClose, onPhotoUpdated } = props;

    const app = useFirebaseApp();
    const { user, reload } = useCurrentUserState() || {};

    const photoURL = user && user.photoURL ? user.photoURL : null;
    const initials = user && user.displayName ? getInitials(user.displayName) : null;

    const pathProp = path || `users/${user ? user.uid : ''}/profilePhoto`;
    const bucketProp = bucket || `${app.options.storageBucket}`;

    const cropperRef = useRef(null);
    const [uploadedImage, setUploadedImage] = useState();
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();

    const handleOnClickEdit = () => {
        setIsOpenEdit(true);
    };

    const onCrop = async () => {
        const imageElement = cropperRef ? cropperRef.current : null;
        const cropper = imageElement ? imageElement.cropper : null;
        const storage = getStorage(app, bucketProp);
        const photoRef = ref(storage, `${pathProp}/${nanoid()}`);
        const blob = await (await fetch(cropper.getCroppedCanvas().toDataURL())).blob();

        const uploadTask = uploadBytesResumable(photoRef, blob);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (progress !== 100) {
                    setIsLoading(true);
                }
            },
            (error) => {
                setIsLoading(false);
                setError(error.message);
            },
            async () => {
                const photoURL = await getDownloadURL(photoRef);
                await updateProfile(user, {
                    photoURL,
                });
                await reload();
                setError(null);
                setIsOpenEdit(false);
                setIsLoading(false);
                onPhotoUpdated(photoURL);
                onRequestClose();
            },
        );
    };

    const onClickRotate = () => {
        const imageElement = cropperRef ? cropperRef.current : null;
        const cropper = imageElement ? imageElement.cropper : null;
        cropper.rotate(90);
    };

    const handleOnClickRemove = async () => {
        const result = await confirmModal({
            icon: <TrashIcon />,
            variant: 'destructive',
            header: 'Delete Content',
            question: "This item will be deleted immediately. You can't undo this action.",
            okButtonLabel: 'Delete',
        });
        if (result) {
            const storage = getStorage(app);
            const photoRef = ref(storage, photoURL);
            try {
                await deleteObject(photoRef);
                await updateProfile(user, {
                    photoURL: '',
                });
                setIsOpenEdit(false);
                await reload();
                onPhotoUpdated(null);
            } catch (error) {
                showAppMessage({
                    message: error.message,
                    variant: 'error',
                });
            }
        }
    };

    return (
        <>
            <StyledModal isOpen={isOpen} onRequestClose={onRequestClose}>
                <EditRemoveDialog
                    imageSrc={photoURL}
                    avatarInitials={initials}
                    onClickEdit={handleOnClickEdit}
                    onChangeImageSrc={setUploadedImage}
                    onClickRemove={handleOnClickRemove}
                />
            </StyledModal>
            <RenderIf isTrue={isLoading}>
                <StyledModalEdit
                    isOpen={isLoading}
                    onRequestClose={() => setIsLoading(false)}
                    title="Crop & Rotate"
                >
                    <div className="rainbow-p-vertical_xx-large">
                        <Spinner size="large" type="arc" variant="brand" />
                        <Loading>Loading your photo</Loading>
                    </div>
                </StyledModalEdit>
            </RenderIf>
            <RenderIf isTrue={!isLoading && isOpenEdit}>
                <StyledModalEdit
                    title="Crop & Rotate"
                    isOpen={isOpenEdit}
                    onRequestClose={() => {
                        setError(null);
                        setIsOpenEdit(false);
                        onRequestClose();
                    }}
                    footer={
                        <StyledModalFooter className="rainbow-flex rainbow-justify_spread">
                            <StyledButtonFocus
                                variant="base"
                                className="rainbow-m-around_medium"
                                onClick={onClickRotate}
                            >
                                <StyledIcon as={RotateLeftIcon} />
                                Rotate
                            </StyledButtonFocus>
                            <Button
                                label="Save as profile Picture"
                                variant="brand"
                                onClick={onCrop}
                            >
                                Save as profile picture
                            </Button>
                        </StyledModalFooter>
                    }
                >
                    <StyledPreviousButton
                        onClick={() => setIsOpenEdit(false)}
                        variant="base"
                        icon={<ArrowLeft />}
                    />
                    <RenderIf isTrue={error}>
                        <StyledErrorContainer>
                            <StyledIconError />
                            {error}
                        </StyledErrorContainer>
                    </RenderIf>
                    <StyledCropperContainer>
                        <StyledCropper
                            src={uploadedImage}
                            initialAspectRatio={1}
                            guides={false}
                            ref={cropperRef}
                            viewMode={1}
                            minCropBoxHeight={30}
                            minCropBoxWidth={30}
                            background={false}
                            autoCropArea={0.8}
                            aspectRatio={1}
                            checkOrientation={false}
                            center={false}
                        />
                    </StyledCropperContainer>
                </StyledModalEdit>
            </RenderIf>
        </>
    );
}

UpdateUserPhotoModal.propTypes = {
    path: PropTypes.string,
    bucket: PropTypes.string,
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    onPhotoUpdated: PropTypes.func,
};

UpdateUserPhotoModal.defaultProps = {
    path: undefined,
    bucket: undefined,
    isOpen: false,
    onRequestClose: () => {},
    onPhotoUpdated: () => {},
};
