import React, { useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import { useList, useImageRefList } from './hooks';
import Image from './image';
import UploadImage from './uploadImage';
import { StyledContainer, StyledFileSeletor, StyledFileContainer } from './styled';

export default function ImageGallery(props) {
    const { path, allowUpload, onSelect, onError, filter, maxResults } = props;
    const { imageRefList, removeImageRef, addImageRef } = useImageRefList({
        path,
        filter,
        maxResults,
        onError,
    });
    const { list: uploadList, set: setUplaodList, remove } = useList();

    const handleUploadChange = (fileList) => {
        setUplaodList((list) => list.concat(Array.from(fileList)));
    };

    const onUploaded = useCallback(
        ({ file, ref }) => {
            remove(file);
            addImageRef(ref);
        },
        [addImageRef, remove],
    );
    const uploadNodeList = useMemo(
        () =>
            uploadList.map((file) => (
                <UploadImage
                    key={file.name}
                    path={path}
                    file={file}
                    onUploaded={onUploaded}
                    onError={onError}
                />
            )),
        [onError, onUploaded, path, uploadList],
    );

    const imageNodeList = useMemo(
        () =>
            imageRefList.map((imageRef) => (
                <Image
                    key={imageRef.name}
                    imageRef={imageRef}
                    onSelect={onSelect}
                    onDeleted={removeImageRef}
                    onError={onError}
                />
            )),
        [imageRefList, onError, onSelect, removeImageRef],
    );

    return (
        <StyledContainer>
            <RenderIf isTrue={allowUpload}>
                <StyledFileContainer>
                    <StyledFileSeletor
                        onChange={handleUploadChange}
                        multiple
                        variant="multiline"
                        bottomHelpText="You can upload images up to 5MB "
                    />
                </StyledFileContainer>
            </RenderIf>
            {uploadNodeList}
            {imageNodeList}
        </StyledContainer>
    );
}

ImageGallery.propTypes = {
    /** The path of the Storage e.g. `/users/u123/gallery` */
    path: PropTypes.string.isRequired,
    /** Allow upload new image. */
    allowUpload: PropTypes.bool,
    /** The action triggered when an image is selected */
    onSelect: PropTypes.func,
    /** The action triggered when some firebase storage error is return */
    onError: PropTypes.func,
    /** This filter is applied to the images returned by firebase storage. */
    filter: PropTypes.oneOfType([PropTypes.array, PropTypes.func]),
    /** Is the maximum number of images to be displayed.. */
    maxResults: PropTypes.number,
};

ImageGallery.defaultProps = {
    allowUpload: true,
    onSelect: () => {},
    onError: () => {},
    filter: undefined,
    maxResults: undefined,
};
