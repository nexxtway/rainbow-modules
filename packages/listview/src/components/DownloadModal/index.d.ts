/* eslint-disable @typescript-eslint/ban-types */
import { CSSProperties } from 'react';

type Max = string | number;

export interface DownloadModalProps {
    /** The title at the top of the DownloadModal component. */
    title?: string;
    /** The description in the DownloadModal component. */
    description?: string;
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied to the outer element. */
    style?: CSSProperties;
    /** The name of the file to be downloaded. */
    fileName?: string;
    /** The maximum number of entries to be downloaded. */
    maxEntries?: string | number;
    /** Controls whether the Modal is opened or not. If true, the modal is open. */
    isOpen?: boolean;
    /** The action triggered when the component request to close
     *  (e.g click close button, press esc key or click outside the modal). */
    onRequestClose?: () => void;
    /** The action triggered when the component request to download.
     * This is asynchronous function that must return the data to download in an array of objects format.
     */
    onDownload?: (max: Max, format: string) => Array<object>;
}

export default function (props: DownloadModalProps): JSX.Element | null;
