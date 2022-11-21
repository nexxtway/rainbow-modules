import React from 'react';
import PropTypes from 'prop-types';
import { Edit, Trash } from '@rainbow-modules/icons';
import {
    Container,
    StyledButton,
    StyledButtons,
    StyledHeader,
    StyledImg,
    StyledParagraph,
} from './styled';

const EditRemoveDialog = (props) => {
    const { imageSrc, handleOnClickEdit, handleOnClickRemove, handleImageSrc } = props;
    const hiddenFileInput = React.useRef(null);

    const iconStyles = {
        color: '#1894AB',
        marginRight: '10px',
    };

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
            <StyledImg src={imageSrc} alt="user avatar" />
            <StyledButtons>
                <StyledButton variant="outline-brand" onClick={handleEdit}>
                    <Edit style={iconStyles} />
                    Edit
                </StyledButton>
                <input
                    type="file"
                    ref={hiddenFileInput}
                    onChange={onFileChange}
                    style={{ display: 'none' }}
                    accept="image/*"
                />
                <StyledButton variant="outline-brand" onClick={handleOnClickRemove}>
                    <Trash style={iconStyles} />
                    Remove
                </StyledButton>
            </StyledButtons>
        </Container>
    );
};

EditRemoveDialog.propTypes = {
    imageSrc: PropTypes.string,
    handleOnClickEdit: PropTypes.func,
    handleOnClickRemove: PropTypes.func,
    handleImageSrc: PropTypes.func,
};

EditRemoveDialog.defaultProps = {
    imageSrc: '',
    handleOnClickEdit: () => {},
    handleOnClickRemove: () => {},
    handleImageSrc: () => {},
};

export default EditRemoveDialog;
