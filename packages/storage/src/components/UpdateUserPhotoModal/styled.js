import styled from 'styled-components';
import { Modal, Button } from 'react-rainbow-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    border: 0;
`;

export const StyledImg = styled.img`
    border-radius: 50%;
    width: 200px;
    height: 200px;
`;

export const StyledHeader = styled.h1`
    font-weight: 600;
    font-size: 22px;
    line-height: 26px;
    margin-bottom: 11px;
    margin-top: -25px;

    @media (min-width: 600px) {
        padding-right: 90px;
    }
`;

export const StyledParagraph = styled.p`
    font-weight: 600;
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 35px;
    color: #4f5657e5;
`;

export const StyledButtons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    border: 0;
    margin-top: 30px;
    margin-bottom: -20px;
`;

export const StyledButton = styled(Button)`
    margin: 0 10px;
    color: #1894ab;
    border-color: #1894ab;
    width: 170px;
    height: 40px;
`;

export const StyledModalFooter = styled.div`
    max-height: 38px;
`;

export const StyledButtonFocus = styled(Button)`
    color: #1894ab;

    &:focus {
        box-shadow: none;
    }
`;

export const StyledModal = styled(Modal)`
    padding: 0;
    max-width: 440px;
    max-height: 500px;
`;

export const StyledModalExample = styled(Modal)`
    width: none;
    padding: 0;

    [data-id*='modal-content'] {
        padding: 0;
    }

    .byCVyc {
        padding: 0;
    }
`;

export const StyledCropper = styled.div`
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    flex-direction: row;

    .cropper-crop-box,
    .cropper-view-box {
        border-radius: 50%;
    }

    .cropper-line {
        background-color: #fff;
        border-color: #fff;
    }

    .cropper-point {
        background-color: #fff;
    }

    .cropper-point.point-sw,
    .cropper-point.point-nw,
    .cropper-point.point-se,
    .cropper-point.point-ne {
        background: transparent;
        height: 18px;
        width: 18px;
    }
    
    .cropper-point.point-sw {
        box-shadow: -2px 2px 0 #fff, -2px 2px 0 #fff;
    }

    .cropper-point.point-nw {
        box-shadow: -2px -2px 0 #fff, -2px -2px 0 #fff;
    }

    .cropper-point.point-ne {
        box-shadow: 2px -2px 0 #fff, 2px -2px 0 #fff;
    }

    .cropper-point.point-se {
        box-shadow: 2px 2px 0 #fff, 2px 2px 0 #fff;
    }

    .cropper-point.point-n,
    .cropper-point.point-s {
        border-right-color: #fff;
        width: 12px;
        height: 3px;
    }

    .cropper-point.point-w,
    .cropper-point.point-e {
        border-right-color: #fff;
        width: 3px;
        height: 12px;
    }

    .cropper-face {
        background-color: inherit;
    }

    .cropper-view-box {
        box-shadow: 0 0 0 1px #0000;
        outline: 0;
    }
`;
