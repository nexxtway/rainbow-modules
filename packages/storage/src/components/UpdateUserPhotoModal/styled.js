import styled from 'styled-components';
import { Modal, Button, Avatar, ButtonIcon } from 'react-rainbow-components';
import { Cropper } from 'react-cropper';
import { Trash } from '@rainbow-modules/icons';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    border: 0;
`;

export const TrashIcon = styled(Trash)`
    width: 60px;
    height: 60px;
    margin: 0 12px 0 0;
    color: ${(props) => props.theme.rainbow.palette.error.main};
`;

export const StyledImg = styled.img`
    border-radius: 50%;
    width: 200px;
    height: 200px;
`;

export const StyledIcon = styled.span`
    color: ${(props) => props.theme.rainbow.palette.brand.main};
    margin-right: 10px;
`;

export const StyledAvatar = styled(Avatar)`
    width: 200px;
    height: 200px;
    font-size: 60px;
`;

export const StyledInput = styled.input`
    display: none;
`;

export const StyledUserIcon = styled.span`
    width: 70px;
    height: 70px;
`;

export const StyledPreviousButton = styled(ButtonIcon)`
    position: absolute;
    top: 0.5rem;
    left: 0.5rem;
    z-index: 1;
    width: 40px;
    height: 40px;
    color: ${(props) => props.theme.rainbow.palette.text.header};
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
    color: ${(props) => props.theme.rainbow.palette.text.header};
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
    color: ${(props) => props.theme.rainbow.palette.brand.main};
    border-color: ${(props) => props.theme.rainbow.palette.brand.main};
    width: 170px;
    height: 40px;
`;

export const StyledModalFooter = styled.div`
    max-height: 38px;
`;

export const StyledButtonFocus = styled(Button)`
    &:focus {
        box-shadow: none;
    }
`;

export const StyledModal = styled(Modal)`
    padding: 0;
    max-width: 440px;
    max-height: 500px;
`;

export const StyledModalEdit = styled(Modal)`
    width: none;
    padding: 0;
    max-width: 700px;
    max-height: 500px;
`;

export const StyledCropper = styled(Cropper)`
    width: 700px;
    max-width: 700px;
    min-width: 700px;
    height: 400px;
    max-height: 400px;
    min-height: 400px;
`;

export const StyledSpinnerContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 2rem;
    border: 0;
`;

export const Loading = styled.h1`
    font-weight: 700;
    line-height: 20px;
    font-size: 16px;
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    margin-top: 3rem;
`;

/* stylelint-disable property-no-vendor-prefix */
export const StyledCropperContainer = styled.div`
    .cropper-container {
        direction: ltr;
        font-size: 0;
        line-height: 0;
        position: relative;
        -ms-touch-action: none;
        touch-action: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    .cropper-container img {
        display: block;
        height: 100%;
        image-orientation: 0deg;
        max-height: none !important;
        max-width: none !important;
        min-height: 0 !important;
        min-width: 0 !important;
        width: 100%;
    }

    .cropper-wrap-box,
    .cropper-canvas,
    .cropper-drag-box,
    .cropper-crop-box,
    .cropper-modal {
        bottom: 0;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
    }

    .cropper-wrap-box,
    .cropper-canvas {
        overflow: hidden;
    }

    .cropper-drag-box {
        background-color: #fff;
        opacity: 0;
    }

    .cropper-modal {
        background-color: #000;
        opacity: 0.5;
    }

    .cropper-view-box {
        box-shadow: 0 0 0 1px #0000;
        outline: 0;
        display: block;
        height: 100%;
        outline-color: rgba(51, 153, 255, 0.75);
        overflow: hidden;
        width: 100%;
    }

    .cropper-dashed {
        border: 0 dashed #eee;
        display: block;
        opacity: 0.5;
        position: absolute;
    }

    .cropper-dashed.dashed-h {
        border-bottom-width: 1px;
        border-top-width: 1px;
        height: calc(100% / 3);
        left: 0;
        top: calc(100% / 3);
        width: 100%;
    }

    .cropper-dashed.dashed-v {
        border-left-width: 1px;
        border-right-width: 1px;
        height: 100%;
        left: calc(100% / 3);
        top: 0;
        width: calc(100% / 3);
    }

    .cropper-center {
        display: block;
        height: 0;
        left: 50%;
        opacity: 0.75;
        position: absolute;
        top: 50%;
        width: 0;
    }

    .cropper-center::before,
    .cropper-center::after {
        background-color: #eee;
        content: ' ';
        display: block;
        position: absolute;
    }

    .cropper-center::before {
        height: 1px;
        left: -3px;
        top: 0;
        width: 7px;
    }

    .cropper-center::after {
        height: 7px;
        left: 0;
        top: -3px;
        width: 1px;
    }

    .cropper-face,
    .cropper-line,
    .cropper-point {
        display: block;
        height: 100%;
        opacity: 0.1;
        position: absolute;
        width: 100%;
    }

    .cropper-face {
        background-color: inherit;
        left: 0;
        top: 0;
    }

    .cropper-line {
        background-color: #39f;
        background-color: #fff;
        border-color: #fff;
    }

    .cropper-line.line-e {
        cursor: ew-resize;
        right: -3px;
        top: 0;
        width: 5px;
    }

    .cropper-line.line-n {
        cursor: ns-resize;
        height: 5px;
        left: 0;
        top: -3px;
    }

    .cropper-line.line-w {
        cursor: ew-resize;
        left: -3px;
        top: 0;
        width: 5px;
    }

    .cropper-line.line-s {
        bottom: -3px;
        cursor: ns-resize;
        height: 5px;
        left: 0;
    }

    .cropper-point {
        background-color: #fff;
        height: 5px;
        opacity: 0.75;
        width: 5px;
    }

    .cropper-point.point-e {
        cursor: ew-resize;
        margin-top: -3px;
        right: -3px;
        top: 50%;
    }

    .cropper-point.point-n {
        cursor: ns-resize;
        left: 50%;
        margin-left: -3px;
        top: -3px;
    }

    .cropper-point.point-w {
        cursor: ew-resize;
        left: -3px;
        margin-top: -3px;
        top: 50%;
    }

    .cropper-point.point-s {
        bottom: -3px;
        cursor: s-resize;
        left: 50%;
        margin-left: -3px;
    }

    .cropper-point.point-ne {
        box-shadow: 2px -2px 0 #fff, 2px -2px 0 #fff;
        cursor: nesw-resize;
        right: -3px;
        top: -3px;
    }

    .cropper-point.point-nw {
        box-shadow: -2px -2px 0 #fff, -2px -2px 0 #fff;
        cursor: nwse-resize;
        left: -3px;
        top: -3px;
    }

    .cropper-point.point-sw {
        box-shadow: -2px 2px 0 #fff, -2px 2px 0 #fff;
        bottom: -3px;
        cursor: nesw-resize;
        left: -3px;
    }

    .cropper-point.point-se {
        box-shadow: 2px 2px 0 #fff, 2px 2px 0 #fff;
        bottom: -3px;
        cursor: nwse-resize;
        height: 20px;
        opacity: 1;
        right: -3px;
        width: 20px;
    }

    @media (min-width: 768px) {
        .cropper-point.point-se {
            height: 15px;
            width: 15px;
        }
    }

    @media (min-width: 992px) {
        .cropper-point.point-se {
            height: 10px;
            width: 10px;
        }
    }

    @media (min-width: 1200px) {
        .cropper-point.point-se {
            height: 5px;
            opacity: 0.75;
            width: 5px;
        }
    }

    .cropper-point.point-se::before {
        background-color: #39f;
        bottom: -50%;
        content: ' ';
        display: block;
        height: 200%;
        opacity: 0;
        position: absolute;
        right: -50%;
        width: 200%;
    }

    .cropper-invisible {
        opacity: 0;
    }

    .cropper-bg {
        background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAQMAAAAlPW0iAAAAA3NCSVQICAjb4U/gAAAABlBMVEXMzMz////TjRV2AAAACXBIWXMAAArrAAAK6wGCiw1aAAAAHHRFWHRTb2Z0d2FyZQBBZG9iZSBGaXJld29ya3MgQ1M26LyyjAAAABFJREFUCJlj+M/AgBVhF/0PAH6/D/HkDxOGAAAAAElFTkSuQmCC');
    }

    .cropper-hide {
        display: block;
        height: 0;
        position: absolute;
        width: 0;
    }

    .cropper-hidden {
        display: none !important;
    }

    .cropper-move {
        cursor: move;
    }

    .cropper-crop {
        cursor: crosshair;
    }

    .cropper-disabled .cropper-drag-box,
    .cropper-disabled .cropper-face,
    .cropper-disabled .cropper-line,
    .cropper-disabled .cropper-point {
        cursor: not-allowed;
    }

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

    .cropper-point.point-sw,
    .cropper-point.point-nw,
    .cropper-point.point-se,
    .cropper-point.point-ne {
        background: transparent;
        height: 18px;
        width: 18px;
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
`;
