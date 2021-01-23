import { ComponentType, CSSProperties } from 'react';

export interface DraggableListProps {
    /** It is required to associate each item with a unique ID. Must be one of the data key.
     * If it is not passed the component will not render.
     */
    keyField: string;
    /** An array containing the objects(items) to be displayed. */
    data?: Array<Record<string, unknown>>;
    /**
     * The field value is used to compute/map the value is going to be render
     * for each item. It's the key of a property in the data objects.
     *
     * e.g `data = [{ name: 'Max', ... }, {...}]`;
     * field could be 'name' for represent names on a collection of people.
     */
    field?: string;
    /** Event triggered when the drag event ends. It send the new data ordered. */
    onDragEnd?: (newData: Array<any>) => void;
    /**
     * The component class or function that is going to be use to render
     * the content of each item. By default the item is
     * going to render the computed value(`data[field]`) for each item.
     */
    component?: ComponentType;
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className?: string;
    /** An object with custom style applied for the outer element. */
    style?: CSSProperties;
}

export default function (props: DraggableListProps): JSX.Element | null;
