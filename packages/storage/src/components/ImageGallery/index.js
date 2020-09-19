import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import ImagesUpload from './imagesUpload';
import Images from './images';
import { useImageRefs } from './hooks';
import { StyledContainer, StyledFileSeletor, StyledFileContainer } from './styled';

export default function ImageGallery(props) {
    const { path, allowUpload, onSelect, onError, filter, maxResults } = props;
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
            setImagesUpload((list) => list.filter((imageUpload) => imageUpload !== uploadedImage));
            setImageRefs((list) => {
                list.push(imageRef);
                return list;
            });
        },
        [setImageRefs],
    );

    return (
        <StyledContainer>
            <RenderIf isTrue={allowUpload}>
                <StyledFileContainer>
                    <StyledFileSeletor
                        onChange={handleFileSeletorChange}
                        multiple
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
            <Images list={imageRefs} onSelect={onSelect} onError={onError} />
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
    maxResults: 1000,
};