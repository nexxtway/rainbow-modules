import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import { Picture } from '@rainbow-modules/icons';
import ImagesUpload from './imagesUpload';
import Images from './images';
import { useImageRefs } from './hooks';
import { StyledContainer, StyledFileSeletor, StyledFileContainer } from './styled';

export default function ImageGallery(props) {
    const { path, allowUpload, allowDelete, onSelect, onError, filter, maxResults } = props;
    const [imagesUpload, setImagesUpload] = useState([]);
    const [imageRefs, setImageRefs] = useImageRefs({
        path,
        filter,
        maxResults,
        onError,
    });

    const handleFileSeletorChange = (images) => {
        setImagesUpload((list) => list.concat(Array.from(images)));
    };

    const handleUploaded = useCallback(
        ({ uploadedImage, imageRef }) => {
            setImageRefs((list) => [imageRef, ...list]);
            setImagesUpload((list) => list.filter((imageUpload) => imageUpload !== uploadedImage));
        },
        [setImageRefs],
    );

    const handleDeleteClick = async (imageRef) => {
        try {
            await imageRef.delete();
            setImageRefs(imageRefs.filter((item) => item.fullPath !== imageRef.fullPath));
        } catch (error) {
            console.log('Uh-oh, an error occurred!', error);
        }
    };

    return (
        <StyledContainer>
            <RenderIf isTrue={allowUpload}>
                <StyledFileContainer>
                    <StyledFileSeletor
                        value={null}
                        onChange={handleFileSeletorChange}
                        multiple
                        uploadIcon={<Picture />}
                        variant="multiline"
                        accept="image/*"
                        bottomHelpText="You can upload images up to 5MB "
                    />
                </StyledFileContainer>
            </RenderIf>
            <ImagesUpload
                path={path}
                list={imagesUpload}
                onUploaded={handleUploaded}
                onError={onError}
            />
            <Images
                allowDelete={allowDelete}
                list={imageRefs}
                onSelect={onSelect}
                onError={onError}
                onDelete={handleDeleteClick}
            />
        </StyledContainer>
    );
}

ImageGallery.propTypes = {
    /** The path of the Storage e.g. `/users/u123/gallery` */
    path: PropTypes.string.isRequired,
    /** Allow upload new image. */
    allowUpload: PropTypes.bool,
    /** Allow delete new image. */
    allowDelete: PropTypes.bool,
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
    allowUpload: false,
    allowDelete: false,
    onSelect: () => {},
    onError: () => {},
    filter: undefined,
    maxResults: 1000,
};
