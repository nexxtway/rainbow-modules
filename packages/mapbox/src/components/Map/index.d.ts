import { CSSProperties } from 'react';

export interface MapProps {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied for the outer element. */
    style?: CSSProperties;
    /** Identifier that is used as authentication for the use of the services provided by mapbox */
    accessToken: string;
    /** A mapbox url where styles are defined */
    mapStyle?: string;
    /** A number that defines the zoom with which the map will be rendered */
    zoom?: number;
    /** An array with the coordinates where the map will be centered when rendered */
    center?: Array<number>;
    /** It disable the animation when the center prop changes values */
    disableAnimation?: boolean;
}

export default function (props: MapProps): JSX.Element | null;
