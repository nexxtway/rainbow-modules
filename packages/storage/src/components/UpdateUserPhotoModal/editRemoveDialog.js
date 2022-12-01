import React from 'react';
import PropTypes from 'prop-types';
import { Edit, Trash, Upload } from '@rainbow-modules/icons';
import { RenderIf } from 'react-rainbow-components';
import {
    Container,
    StyledAvatar,
    StyledButton,
    StyledButtons,
    StyledHeader,
    StyledIcon,
    StyledParagraph,
} from './styled';

const EditRemoveDialog = (props) => {
    const {
        imageSrc,
        handleOnClickEdit,
        handleOnClickRemove,
        handleImageSrc,
        avatarInitials,
    } = props;
    const hiddenFileInput = React.useRef(null);

    const handleEdit = () => {
        hiddenFileInput.current.click();
    };

    function readFile(file) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.addEventListener('load', () => resolve(reader.result), false);
            reader.readAsDataURL(file);
        });
    }

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        if (e.target.files && e.target.files.length > 0) {
            const imageDataUrl = await readFile(file);
            handleImageSrc(imageDataUrl);
        }
        handleOnClickEdit();
    };

    return (
        <Container>
            <StyledHeader>Change the profile picture</StyledHeader>
            <StyledParagraph>
                A picture helps people recognize you and lets you know when you&apos;re sign in to
                your account.
            </StyledParagraph>
            <StyledAvatar src={imageSrc} initials={avatarInitials} />
            <input
                type="file"
                ref={hiddenFileInput}
                onChange={onFileChange}
                style={{ display: 'none' }}
                accept="image/*"
            />
            <RenderIf isTrue={imageSrc}>
                <StyledButtons>
                    <StyledButton variant="outline-brand" onClick={handleEdit}>
                        <StyledIcon as={Edit} />
                        Edit
                    </StyledButton>
                    <StyledButton variant="outline-brand" onClick={handleOnClickRemove}>
                        <StyledIcon as={Trash} />
                        Remove
                    </StyledButton>
                </StyledButtons>
            </RenderIf>
            <RenderIf isTrue={!imageSrc}>
                <StyledButtons>
                    <StyledButton variant="outline-brand" onClick={handleEdit}>
                        <StyledIcon as={Upload} />
                        Upload Photo
                    </StyledButton>
                </StyledButtons>
            </RenderIf>
        </Container>
    );
};

EditRemoveDialog.propTypes = {
    imageSrc: PropTypes.string,
    handleOnClickEdit: PropTypes.func,
    handleOnClickRemove: PropTypes.func,
    handleImageSrc: PropTypes.func,
    avatarInitials: PropTypes.string,
};

EditRemoveDialog.defaultProps = {
    imageSrc: undefined,
    handleOnClickEdit: () => {},
    handleOnClickRemove: () => {},
    handleImageSrc: () => {},
    avatarInitials: '',
};

export default EditRemoveDialog;
