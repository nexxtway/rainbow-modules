import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spinner } from 'react-rainbow-components';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import TruncatedText from 'react-rainbow-components/components/Structural/truncatedText';
import {
    StyledFileContainer,
    StyledContainerImage,
    StyledContainerSpinner,
    StyledImage,
} from './styled';

export default function Image(props) {
    const { imageRef, onSelect, onError } = props;
    const [src, setSrc] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            await imageRef
                .getDownloadURL()
                .then((url) => {
                    setSrc(url);
                })
                .catch((error) => {
                    onError(error);
                });
        })();
    }, [imageRef, onError]);

    return (
        <StyledFileContainer>
            <StyledContainerImage type="button" onClick={() => onSelect(imageRef)}>
                <RenderIf isTrue={!!src}>
                    <StyledImage
                        src={src}
                        alt={imageRef.name}
                        onLoad={() => setLoading(false)}
                        $loading={loading}
                    />
                </RenderIf>
                <RenderIf isTrue={loading}>
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
