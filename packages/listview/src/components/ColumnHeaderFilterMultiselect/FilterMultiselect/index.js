import React from 'react';
import PropTypes from 'prop-types';
import { MultiSelect, Option } from 'react-rainbow-components';
import { StyledContent } from '../../ColumnHeaderFilterText/FilterText/styled';

function FilterMultiselect(props) {
    const { options, filters, onChange, headerText } = props;

    return (
        <StyledContent>
            <MultiSelect
                placeholder={`Select the ${headerText}`}
                value={filters}
                onChange={onChange}
                showCheckbox
            >
                {options.map((option) => (
                    <Option key={option.value} {...option} />
                ))}
            </MultiSelect>
        </StyledContent>
    );
}

FilterMultiselect.propTypes = {
    options: PropTypes.arrayOf(PropTypes.object),
    onChange: PropTypes.func,
    filters: PropTypes.arrayOf(PropTypes.string),
    headerText: PropTypes.string,
    onRequestClose: PropTypes.func,
};

FilterMultiselect.defaultProps = {
    options: [],
    onChange: () => {},
    filters: [''],
    headerText: undefined,
    onRequestClose: () => {},
};

export default FilterMultiselect;
