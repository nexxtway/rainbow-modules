export interface UpdateUserPhotoModalProps {
    /** The path of the Storage e.g. `/users/u123/profile` */
    path: string;
    /** The current user photo url */
    photo: string;
    /** The bucket where the images are going to be stored */
    bucket: string;
    /** Controls whether the Modal is opened or not. If true, the modal is open. */
    isOpen: boolean;
    /** The action triggered when the component request to close
     *  (e.g click close button, press esc key or click outside the modal). */
    onRequestClose: () => void;
    /** If the record name contains two words, like first and last name,
     * use the first capitalized letter of each. For records that only have a single word name,
     * use the first two letters of that word using one capital and one lower case letter. */
    avatarInitials: string;
    /** The action triggered when the user click the save button */
    onPhotoUpdated: (photo: string) => void;
}

export default function (props: ImageGalleryProps): JSX.Element | null;
