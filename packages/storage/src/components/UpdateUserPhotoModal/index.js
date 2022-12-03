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
    StyledArrowLeftIcon,
} from './styled';
import RotateLeftIcon from './rotateLeftIcon';
import { ArrowLeft } from '@rainbow-modules/icons';

export default function UpdateUserPhotoModal(props) {
    const { path, photo, bucket, isOpen, onRequestClose, avatarInitials, onPhotoUpdated } = props;

    const app = useFirebaseApp();
    const { user, reload } = useCurrentUserState() || {};

    const pathProp = path || `users/${user ? user.uid : ''}/profilePhoto`;
    const bucketProp = bucket || `${app.options.storageBucket}`;

    const [photoURL, setPhotoURL] = useState(photo);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const cropperRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);

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
                console.log(error);
            },
            async () => {
                onRequestClose();
                setIsOpenEdit(false);
                setIsLoading(false);
                const photoURL = await getDownloadURL(photoRef);
                setPhotoURL(photoURL);
                await updateProfile(user, {
                    photoURL,
                });
                await reload();
                onPhotoUpdated(photoURL);
            },
        );
    };

    const onClickRotate = () => {
        const imageElement = cropperRef ? cropperRef.current : null;
        const cropper = imageElement ? imageElement.cropper : null;
        cropper.rotate(90);
    };

    const handleOnClickRemove = async () => {
        const storage = getStorage(app);
        const photoRef = ref(storage, photoURL);
        try {
            await deleteObject(photoRef);
            await updateProfile(user, {
                photoURL: '',
            });
            setPhotoURL('');
            setIsOpenEdit(false);
            onRequestClose();
            await reload();
            onPhotoUpdated('');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <StyledModal isOpen={isOpen} onRequestClose={onRequestClose}>
                <EditRemoveDialog
                    imageSrc={photo}
                    avatarInitials={avatarInitials}
                    onClickEdit={handleOnClickEdit}
                    onChangeImageSrc={setPhotoURL}
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
                        icon={<StyledArrowLeftIcon as={ArrowLeft} />}
                    />
                    <StyledCropperContainer>
                        <StyledCropper
                            src={photoURL}
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
    photo: PropTypes.string,
    bucket: PropTypes.string,
    isOpen: PropTypes.bool,
    onRequestClose: PropTypes.func,
    avatarInitials: PropTypes.string,
    onPhotoUpdated: PropTypes.func,
};

UpdateUserPhotoModal.defaultProps = {
    path: undefined,
    photo: undefined,
    bucket: undefined,
    isOpen: false,
    onRequestClose: () => {},
    avatarInitials: undefined,
    onPhotoUpdated: () => {},
};
