import { CSSProperties, ReactNode } from 'react';

type Max = string | number;

export interface DownloadModalProps {
    /** An id for the outer element. */
    id?: string;
    /** The title at the top of the DownloadModal component. */
    title?: ReactNode;
    /** The description in the DownloadModal component. */
    description?: ReactNode;
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    /** The name of the file to be downloaded. */
    fileName?: string;
    /** The maximum number of entries to be downloaded. */
    maxEntries?: Max;
    /** Controls whether the Modal is opened or not. If true, the modal is open. */
    isOpen?: boolean;
    /** The action triggered when the component request to close
     *  (e.g click close button, press esc key or click outside the modal). */
    onRequestClose?: () => void;
    /** The action triggered when the component request to download.
     * This is asynchronous function that must return the data to download in an array of objects format.
     */
    onDownload?: (max: Max, format: string) => Promise<Array<Record<string, unknown>>>;
}

export default function (props: DownloadModalProps): JSX.Element | null;
