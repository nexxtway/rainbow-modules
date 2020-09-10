import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-rainbow-components';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import TruncatedText from 'react-rainbow-components/components/Structural/truncatedText';
import { StyledFileContainer, StyledContainerImage, StyledContainerSpinner } from './styled';

export default function Image(props) {
    const { imageRef, onSelect, onError } = props;
    const [src, setSrc] = useState();

    useEffect(() => {
        let isSubscribed = true;
        const resultPromise = imageRef.getDownloadURL();

        resultPromise
            .then((url) => {
                if (isSubscribed) {
                    setSrc(url);
                }
            })
            .catch((error) => {
                onError(error);
            });

        return () => {
            isSubscribed = false;
        };
    }, [imageRef, onError]);

    return (
        <StyledFileContainer>
            <StyledContainerImage type="button" onClick={() => onSelect(imageRef)}>
                <RenderIf isTrue={!!src}>
                    <img src={src} alt={imageRef.name} />
                </RenderIf>
                <RenderIf isTrue={!src}>
                    <StyledContainerSpinner>
                        <Spinner type="arc" variant="brand" />
                    </StyledContainerSpinner>
                </RenderIf>
            </StyledContainerImage>
            <TruncatedText>{imageRef.name}</TruncatedText>
        </StyledFileContainer>
    );
}

Image.propTypes = {
    imageRef: PropTypes.object.isRequired,
    onSelect: PropTypes.func,
    onError: PropTypes.func,
};

Image.defaultProps = {
    onSelect: () => {},
    onError: () => {},
};
