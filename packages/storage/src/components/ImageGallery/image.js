import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Spinner, RenderIf } from 'react-rainbow-components';
import { Trash } from '@rainbow-modules/icons';
import { confirmModal } from '@rainbow-modules/app';
import {
    StyledFileContainer,
    StyledContainerImage,
    StyledContainerSpinner,
    StyledImage,
    StyledDeleteButton,
    StyledCheckMark,
    TrashIcon,
    TruncatedText,
    StyledRelative,
} from './styled';
import { getDownloadURL } from './helpers';

export default function Image(props) {
    const { imageRef, onSelect, onError, allowDelete, onDelete } = props;
    const [src, setSrc] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const url = await getDownloadURL(imageRef);
                setSrc(url);
            } catch (err) {
                onError(err);
            }
        })();
    }, [imageRef, onError]);

    const openModalDelete = async () => {
        const result = await confirmModal({
            icon: <TrashIcon />,
            variant: 'destructive',
            header: 'Are you sure you want to delete this item?',
            question: "This item will be deleted immediately. You can't undo this action.",
            okButtonLabel: 'Delete',
        });

        if (result) {
            onDelete(imageRef);
        }
    };

    return (
        <StyledFileContainer>
            <StyledRelative>
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
                <RenderIf isTrue={src}>
                    <RenderIf isTrue={allowDelete}>
                        <StyledDeleteButton
                            variant="inverse"
                            size="medium"
                            icon={<Trash />}
                            onClick={openModalDelete}
                        />
                        <StyledCheckMark />
                    </RenderIf>
                </RenderIf>
            </StyledRelative>
            <TruncatedText>{imageRef.name}</TruncatedText>
        </StyledFileContainer>
    );
}

Image.propTypes = {
    imageRef: PropTypes.object.isRequired,
    onSelect: PropTypes.func,
    onError: PropTypes.func,
    onDelete: PropTypes.func,
    allowDelete: PropTypes.bool,
};

Image.defaultProps = {
    onSelect: () => {},
    onError: () => {},
    onDelete: () => {},
    allowDelete: false,
};
