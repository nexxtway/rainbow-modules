import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { MultiSelect, Option } from 'react-rainbow-components';
import Footer from '../../ColumnHeaderFilterText/Footer';
import { StyledContent } from '../../ColumnHeaderFilterText/FilterText/styled';

function FilterMultiselect(props) {
    const { options, onFilter, defaultFilters, headerText, onRequestClose } = props;
    const [value, setValue] = useState(defaultFilters);

    return (
        <form onSubmit={() => onFilter(value)}>
            <StyledContent>
                <MultiSelect
                    placeholder={`Select the ${headerText}`}
                    value={value}
                    onChange={setValue}
                    showCheckbox
                >
                    {options.map((option) => (
                        <Option key={option.value} {...option} />
                    ))}
                </MultiSelect>
            </StyledContent>
            <Footer onRequestClose={onRequestClose} />
        </form>
    );
}

FilterMultiselect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    onFilter: PropTypes.func,
    defaultFilters: PropTypes.arrayOf(PropTypes.string),
    headerText: PropTypes.string,
    onRequestClose: PropTypes.func,
};

FilterMultiselect.defaultProps = {
    options: [],
    onFilter: () => {},
    defaultFilters: [''],
    headerText: undefined,
    onRequestClose: () => {},
};

export default FilterMultiselect;
