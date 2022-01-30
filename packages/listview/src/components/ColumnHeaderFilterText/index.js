import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import HeaderFilter from './HeaderFilter';
import FilterOverlay from './FilterOverlay';
import FilterText from './FilterText';
import { getNodeText } from './helpers';

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
    const [filters, setFilters] = useState(defaultFilters);
    const [hasFilter, setHasFilter] = useState(defaultFilters.length > 0);
    const headerText = getNodeText(header);

    const handleFilter = (newFilters) => {
        setFilters(newFilters);
        const filtered = newFilters.filter((value) => !!value && value.trim() !== '');
        setHasFilter(filtered.length > 0);
        onFilter(filtered);
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
                <FilterText
                    onFilter={handleFilter}
                    defaultFilters={filters}
                    headerText={headerText}
                    onRequestClose={() => setIsOpen(false)}
                />
            </FilterOverlay>
        </>
    );
}

ColumnHeaderFilterText.propTypes = {
    defaultFilters: PropTypes.arrayOf(PropTypes.string),
    onFilter: PropTypes.func,
    onSort: PropTypes.func,
    sortDirection: PropTypes.string,
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
