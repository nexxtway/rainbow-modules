import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ProgressCircular } from 'react-rainbow-components';
import { useStorageRef } from './hooks';
import { StyledContainerImageUpload, StyledFileContainer } from './styled';
import { ref, uploadBytesResumable } from './helpers';

export default function ImageUpload(props) {
    const { path, image, onUploaded, onError } = props;
    const storageRef = useStorageRef();
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const imageRef = ref(storageRef, `${path}/${image.name}`);
        const uploadTask = uploadBytesResumable(imageRef, image);

        const unsubscribe = uploadTask.on(
            'state_changed',
            (snapshot) => {
                const percent = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress((previousPercent) =>
                    percent > previousPercent ? percent : previousPercent,
                );
            },
            (error) => {
                onError(error);
            },
            () => {
                onUploaded({ uploadedImage: image, imageRef: uploadTask.snapshot.ref });
            },
        );

        return () => {
            unsubscribe();
        };
    }, [image, onError, onUploaded, path, storageRef]);

    return (
        <StyledFileContainer>
            <StyledContainerImageUpload>
                <ProgressCircular value={progress} />
            </StyledContainerImageUpload>
        </StyledFileContainer>
    );
}

ImageUpload.propTypes = {
    path: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    onUploaded: PropTypes.func,
    onError: PropTypes.func,
};

ImageUpload.defaultProps = {
    onUploaded: () => {},
    onError: () => {},
};
