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
} from './styled';
import RotateLeftIcon from './rotateLeftIcon';

export default function UpdateUserPhotoModal(props) {
    const { path, photo, bucket, isOpen, onRequestClose, avatarInitials, handlePhotoUrl } = props;

    const app = useFirebaseApp();
    const { user, reload } = useCurrentUserState() || {};

    const pathProp = path || `users/${user ? user.uid : ''}/profilePhoto`;
    const bucketProp = bucket || `${app.options.storageBucket}`;

    const [photoURL, setPhotoURL] = useState(photo);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const cropperRef = useRef(null);
    const [loading, setLoading] = useState(false);

    const handleOnClickEdit = () => {
        onRequestClose();
        setIsOpenEdit(true);
    };

    const onCrop = async () => {
        const imageElement = cropperRef ? cropperRef.current : null;
        const cropper = imageElement ? imageElement.cropper : null;
        const storage = getStorage(app, bucketProp);
        const photoRef = ref(storage, `${pathProp}/${nanoid()}`);
        const blob = await fetch(cropper.getCroppedCanvas().toDataURL()).then((r) => r.blob());

        const uploadTask = uploadBytesResumable(photoRef, blob);
        uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                if (progress !== 100) {
                    setLoading(true);
                }
            },
            (error) => {
                console.log(error);
            },
            async () => {
                setIsOpenEdit(false);
                setLoading(false);
                const photoURL = await getDownloadURL(photoRef);
                setPhotoURL(photoURL);
                await updateProfile(user, {
                    photoURL,
                });
                await reload();
                handlePhotoUrl(photoURL);
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
        await deleteObject(photoRef)
            .then(() => {
                updateProfile(user, {
                    photoURL: '',
                }).then(() => {
                    setPhotoURL('');
                    setIsOpenEdit(false);
                    onRequestClose();
                    reload().then(() => {
                        handlePhotoUrl('');
                    });
                });
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <StyledModal isOpen={isOpen} onRequestClose={onRequestClose}>
                <EditRemoveDialog
                    imageSrc={photo}
                    avatarInitials={avatarInitials}
                    handleOnClickEdit={handleOnClickEdit}
                    handleImageSrc={setPhotoURL}
                    handleOnClickRemove={handleOnClickRemove}
                />
            </StyledModal>
            <RenderIf isTrue={loading}>
                <StyledModalEdit
                    isOpen={loading}
                    onRequestClose={() => setLoading(false)}
                    title="Crop & Rotate"
                >
                    <div className="rainbow-p-vertical_xx-large">
                        <Spinner size="large" type="arc" variant="brand" />
                        <Loading>Loading your photo</Loading>
                    </div>
                </StyledModalEdit>
            </RenderIf>
            <RenderIf isTrue={!loading && isOpenEdit}>
                <StyledModalEdit
                    title="Crop & Rotate"
                    isOpen={isOpenEdit}
                    onRequestClose={() => setIsOpenEdit(false)}
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
    handlePhotoUrl: PropTypes.func,
};

UpdateUserPhotoModal.defaultProps = {
    path: undefined,
    photo: undefined,
    bucket: undefined,
    isOpen: false,
    onRequestClose: () => {},
    avatarInitials: undefined,
    handlePhotoUrl: () => {},
};
