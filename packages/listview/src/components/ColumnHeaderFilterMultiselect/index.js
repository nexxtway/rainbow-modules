import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import HeaderFilter from '../ColumnHeaderFilterText/HeaderFilter';
import FilterOverlay from '../ColumnHeaderFilterText/FilterOverlay';
import FilterMultiselect from './FilterMultiselect';
import { getHeaderText } from '../ColumnHeaderFilterText/helpers';
import serializeFilters from './helpers/serializeFilters';

function ColumnHeaderFilterMultiselect(props) {
    const {
        options,
        defaultFilters,
        onFilter,
        header,
        onSort,
        sortDirection,
        sortable,
        headerAlignment,
    } = props;
    const triggerRef = useRef();
    const [isOpen, setIsOpen] = useState(false);
    const [filters, setFilters] = useState(defaultFilters);
    const [hasFilter, setHasFilter] = useState(defaultFilters.length > 0);
    const headerText = getHeaderText(header);

    const handleFilter = (newFilters) => {
        setFilters(newFilters);
        const serializedFilters = serializeFilters(newFilters);
        setHasFilter(serializedFilters.length > 0);
        onFilter(serializedFilters);
        setIsOpen(false);
    };

    return (
        <>
            <HeaderFilter
                buttonRef={triggerRef}
                isOpen={isOpen}
                onOpen={() => setIsOpen(!isOpen)}
                hasFilter={hasFilter}
                header={header}
                onSort={onSort}
                sortDirection={sortDirection}
                sortable={sortable}
                headerAlignment={headerAlignment}
            />
            <FilterOverlay
                triggerElementRef={() => triggerRef.current.buttonRef}
                isOpen={isOpen}
                onRequestClose={() => setIsOpen(false)}
                headerText={headerText}
            >
                <FilterMultiselect
                    options={options}
                    onFilter={handleFilter}
                    defaultFilters={filters}
                    headerText={headerText}
                    onRequestClose={() => setIsOpen(false)}
                />
            </FilterOverlay>
        </>
    );
}

ColumnHeaderFilterMultiselect.propTypes = {
    /**
     * The options to choose in the multiselect
     */
    options: PropTypes.arrayOf(PropTypes.object),
    /**
     * A filter to initialize the component
     */
    defaultFilters: PropTypes.arrayOf(PropTypes.object),
    /**
     * Action triggered when a column is filtered. Receive a string array with the words to filter.
     */
    onFilter: PropTypes.func,
    /**
     * Action triggered when a column is sorted. Receives the event object and sortDirection.
     */
    onSort: PropTypes.func,
    /**
     * Specifies the sorting direction.
     */
    sortDirection: PropTypes.string,
    /**
     * Specifies whether it can be sorted.
     */
    sortable: PropTypes.bool,
    /**
     * The header of the column. It could be just a `String` with text or a component with a desired content.
     */
    header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    /**
     * The alignment of the text of the column header
     */
    headerAlignment: PropTypes.oneOf(['left', 'center', 'right']),
};

ColumnHeaderFilterMultiselect.defaultProps = {
    options: [],
    defaultFilters: [],
    onFilter: () => {},
    onSort: () => {},
    sortDirection: undefined,
    sortable: false,
    header: undefined,
    headerAlignment: undefined,
};

export default ColumnHeaderFilterMultiselect;
