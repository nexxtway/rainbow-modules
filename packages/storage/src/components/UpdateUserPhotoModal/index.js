import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Avatar, Button } from 'react-rainbow-components';
import { Cropper } from 'react-cropper';
import { useFirebaseApp, useCurrentUserState } from '@rainbow-modules/firebase-hooks';
import { nanoid } from 'nanoid';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import 'cropperjs/dist/cropper.css';
import EditRemoveDialog from './editRemoveDialog';
import {
    StyledModalExample,
    StyledModalFooter,
    StyledButtonFocus,
    StyledCropper,
    StyledModal,
} from './styled';
import RotateLeftIcon from './rotateLeftIcon';

export default function UpdateUserPhotoModal(props) {
    const { path: pathProp, bucket } = props;
    const { user, reload } = useCurrentUserState() || {};
    const path = pathProp || `users/${user ? user.uid : ''}/profilePhoto`;
    const app = useFirebaseApp();

    const [isOpen, setIsOpen] = useState(false);
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [photoURL, setPhotoURL] = useState(path);
    const cropperRef = useRef(null);
    const [croppedImg, setCroppedImg] = useState(path);

    const handleOnClickEdit = () => {
        setIsOpenEdit(true);
        setIsOpen(false);
    };

    const handleOnClick = () => {
        setIsOpen(true);
    };

    const handleImageSrc = (imageDataUrl) => {
        setPhotoURL(imageDataUrl);
    };

    const onCrop = async () => {
        const imageElement = cropperRef ? cropperRef.current : null;
        const cropper = imageElement ? imageElement.cropper : null;
        const storage = getStorage(app);
        const photoRef = ref(storage, `${path}/${nanoid()}`);
        const metadata = {
            contentType: 'image/png',
        };
        await uploadBytes(photoRef, cropper.getCroppedCanvas().toDataURL(), metadata);

        const photoURL = await getDownloadURL(photoRef);
        await updateProfile(user, {
            photoURL,
        });
        await reload();

        // setCroppedImg(cropper.getCroppedCanvas().toDataURL());
        setIsOpenEdit(false);
    };

    const onClickRotate = () => {
        const imageElement = cropperRef ? cropperRef.current : null;
        const cropper = imageElement ? imageElement.cropper : null;
        cropper.rotate(90);
    };

    return (
        <>
            <div className="rainbow-p-vertical_large rainbow-p-left_medium rainbow-flex rainbow-align_center">
                <div className="rainbow-m-horizontal_medium">
                    <Avatar
                        src={croppedImg}
                        assistiveText="Jose Leandro"
                        title="Jose Leandro"
                        size="large"
                    />
                    <Button
                        id="button-1"
                        variant="neutral"
                        label="Change Profile Picture"
                        onClick={handleOnClick}
                    />
                </div>
            </div>
            <StyledModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
                <EditRemoveDialog
                    imageSrc={croppedImg}
                    handleOnClickEdit={handleOnClickEdit}
                    handleImageSrc={handleImageSrc}
                />
            </StyledModal>
            <StyledModalExample
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
                            <RotateLeftIcon style={{ marginRight: '10px' }} />
                            Rotate
                        </StyledButtonFocus>
                        <Button
                            label="Save as profile Picture"
                            variant="brand"
                            style={{ backgroundColor: '#1894AB', borderColor: '#1894AB' }}
                            onClick={onCrop}
                        >
                            Save as profile picture
                        </Button>
                    </StyledModalFooter>
                }
            >
                <StyledCropper>
                    <Cropper
                        src={photoURL}
                        style={{
                            MaxHeight: '400px',
                            MaxWidth: '700px',
                            height: '400px',
                            width: '700px',
                        }}
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
                </StyledCropper>
            </StyledModalExample>
        </>
    );
}

UpdateUserPhotoModal.propTypes = {
    path: PropTypes.string,
    bucket: PropTypes.string,
    onPhotoUpdated: PropTypes.func,
};

UpdateUserPhotoModal.defaultProps = {
    path: undefined,
    bucket: undefined,
    onPhotoUpdated: () => {},
};
