export interface UpdateUserPhotoModalProps {
    /** The path of the Storage e.g. `/users/u123/profile` */
    path?: string;
    /** The bucket where the images are going to be stored */
    bucket?: string;
    /** Controls whether the Modal is opened or not. If true, the modal is open. */
    isOpen?: boolean;
    /** The action triggered when the component request to close
     *  (e.g click close button, press esc key or click outside the modal). */
    onRequestClose?: () => void;
    /** The action triggered when the user click the save button */
    onPhotoUpdated?: (photo: string) => void;
}

export default function (props: ImageGalleryProps): JSX.Element | null;
