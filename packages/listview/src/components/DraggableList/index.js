/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Container } from './styled';
import Items from './items';

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const DraggableList = (props) => {
    const { className, style, onDragEnd, data, keyField, ...rest } = props;

    const handleDragEnd = (result) => {
        if (!result.destination) {
            return;
        }
        if (result.destination.index === result.source.index) {
            return;
        }
        const newData = reorder(data, result.source.index, result.destination.index);
        onDragEnd(newData);
    };

    if (keyField && typeof keyField === 'string') {
        return (
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId="draggable-list-droppable-container">
                    {(provided) => {
                        return (
                            <Container
                                className={className}
                                style={style}
                                ref={provided.innerRef}
                                {...provided.droppableProps}
                            >
                                <Items data={data} keyField={keyField} {...rest} />
                                {provided.placeholder}
                            </Container>
                        );
                    }}
                </Droppable>
            </DragDropContext>
        );
    }
    // eslint-disable-next-line no-console
    console.error('The "keyField" is a required prop of the DraggableList component.');
    return null;
};

DraggableList.propTypes = {
    /** It is required to associate each item with a unique ID. Must be one of the data key.
     * If it is not passed the component will not render.
     */
    keyField: PropTypes.string.isRequired,
    /** An array containing the objects(items) to be displayed. */
    data: PropTypes.arrayOf(PropTypes.object),
    /**
     * The field value is used to compute/map the value is going to be render
     * for each item. It's the key of a property in the data objects.
     *
     * e.g `data = [{ name: 'Max', ... }, {...}]`;
     * field could be 'name' for represent names on a collection of people.
     */
    field: PropTypes.string,
    /** Event triggered when the drag event ends. It send the new data ordered. */
    onDragEnd: PropTypes.func,
    /**
     * The component class or function that is going to be use to render
     * the content of each item. By default the item is
     * going to render the computed value(`data[field]`) for each item.
     */
    component: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
};

DraggableList.defaultProps = {
    className: undefined,
    style: undefined,
    data: [],
    field: undefined,
    onDragEnd: () => {},
    component: undefined,
};

export default DraggableList;
