export interface ImageGalleryProps {
    /** The path of the Storage e.g. `/users/u123/gallery` */
    path: string;
    /** Allow upload new image. */
    allowUpload?: boolean;
    /** Allow delete new image. */
    allowDelete?: boolean;
    /** The action triggered when an image is selected */
    onSelect?: (imageRef: any) => any;
    /** The action triggered when some firebase storage error is return */
    onError?: (error: any) => void;
    /** This filter is applied to the images returned by firebase storage. */
    filter?: Array<string> | ((ref: any) => boolean);
    /** Is the maximum number of images to be displayed.. */
    maxResults?: number;
}

export default function (props: ImageGalleryProps): JSX.Element | null;
