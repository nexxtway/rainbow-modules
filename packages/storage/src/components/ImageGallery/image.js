import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { Spinner, ButtonIcon } from 'react-rainbow-components';
import { Trash, Check } from '@rainbow-modules/icons';
import { confirmModal } from '@rainbow-modules/app';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import TruncatedText from 'react-rainbow-components/components/Structural/truncatedText';
import {
    StyledFileContainer,
    StyledContainerImage,
    StyledContainerSpinner,
    StyledImage,
    StyledDeleteButton,
    StyledCheckContainer,
    TrashIcon,
} from './styled';

export default function Image(props) {
    const { imageRef, onSelect, onError, allowDelete, handleDeleteClick } = props;
    const [src, setSrc] = useState();
    const [loading, setLoading] = useState(true);
    const deleteBtn = useRef(null);

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

    const handleClick = (e) => {
        const isClickDeleteBtn = deleteBtn.current.htmlElementRef.current.contains(e.target);
        if (isClickDeleteBtn) {
            return null;
        }
        return onSelect(imageRef);
    };

    const openModalDelete = async () => {
        const result = await confirmModal({
            icon: <TrashIcon />,
            variant: 'destructive',
            header: 'Are you sure you want to delete this item?',
            question: "This item will be deleted immediately. You can't undo this action.",
            okButtonLabel: 'Delete',
        });

        if (result) {
            handleDeleteClick(imageRef);
        }
    };

    return (
        <StyledFileContainer>
            <StyledContainerImage type="button" onClick={handleClick}>
                <RenderIf isTrue={!!src}>
                    <StyledImage
                        src={src}
                        alt={imageRef.name}
                        onLoad={() => setLoading(false)}
                        $loading={loading}
                    />
                    <RenderIf isTrue={allowDelete}>
                        <StyledDeleteButton>
                            <ButtonIcon
                                variant="inverse"
                                size="medium"
                                icon={<Trash />}
                                onClick={openModalDelete}
                                ref={deleteBtn}
                            />
                        </StyledDeleteButton>
                    </RenderIf>
                    <StyledCheckContainer>
                        <Check />
                    </StyledCheckContainer>
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
    handleDeleteClick: PropTypes.func,
    allowDelete: PropTypes.bool,
};

Image.defaultProps = {
    onSelect: () => {},
    onError: () => {},
    handleDeleteClick: () => {},
    allowDelete: false,
};
