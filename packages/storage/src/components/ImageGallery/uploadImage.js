import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { ProgressCircular } from 'react-rainbow-components';
// eslint-disable-next-line import/no-unresolved
import { useStorageRef } from '@rainbow-modules/firebase-hooks';
import { StyledContainerUploadImage, StyledFileContainer } from './styled';

export default function UploadImage(props) {
    const { path, file, onUploaded, onError } = props;
    const storageRef = useStorageRef();
    const [percent, setPercent] = useState(0);

    useEffect(() => {
        const uploadTask = storageRef.child(`${path}/${file.name}`).put(file);

        const unsubscribe = uploadTask.on(
            'state_changed',
            (snapshot) => {
                const progress = Math.round(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100,
                );
                setPercent((p) => (progress > p ? progress : p));
            },
            (error) => {
                onError(error);
            },
            () => {
                onUploaded({ file, ref: uploadTask.snapshot.ref });
            },
        );
        return () => {
            unsubscribe();
        };
    }, [file, onError, onUploaded, path, storageRef]);

    return (
        <StyledFileContainer>
            <StyledContainerUploadImage>
                <ProgressCircular value={percent} />
            </StyledContainerUploadImage>
        </StyledFileContainer>
    );
}

UploadImage.propTypes = {
    path: PropTypes.string.isRequired,
    file: PropTypes.object.isRequired,
    onUploaded: PropTypes.func,
    onError: PropTypes.func,
};

UploadImage.defaultProps = {
    onUploaded: () => {},
    onError: () => {},
};
