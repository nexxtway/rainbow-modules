import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import HeaderFilter from './HeaderFilter';
import FilterOverlay from './FilterOverlay';
import FilterText from './FilterText';
import { clearFilters, getHeaderText, formatFilters } from './helpers';
import Footer from './Footer';

function ColumnHeaderFilterText(props) {
    const {
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
    const [filters, setFilters] = useState(formatFilters(defaultFilters));
    const serializedFilters = clearFilters(filters);
    const hasFilter = serializedFilters.length > 0;
    const headerText = getHeaderText(header);

    const handleSubmit = () => {
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
                <form onSubmit={handleSubmit}>
                    <FilterText onChange={setFilters} filters={filters} headerText={headerText} />
                    <Footer onRequestClose={() => setIsOpen(false)} />
                </form>
            </FilterOverlay>
        </>
    );
}

ColumnHeaderFilterText.propTypes = {
    /**
     * A filter to initialize the component
     */
    defaultFilters: PropTypes.arrayOf(PropTypes.string),
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
ColumnHeaderFilterText.defaultProps = {
    defaultFilters: [],
    onFilter: () => {},
    onSort: () => {},
    sortDirection: undefined,
    sortable: false,
    header: undefined,
    headerAlignment: undefined,
};

export default ColumnHeaderFilterText;
