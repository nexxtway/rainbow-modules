import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RenderIf, ButtonIcon, Button } from 'react-rainbow-components';
import { TrashFilled } from '@rainbow-modules/icons';
import {
    StyledContentField,
    StyledOr,
    StyledInput,
    StyledButton,
    StyledFooter,
    StyledIconPlus,
    StyledContent,
} from './styled';
import formatFilters from './helpers/formatFilters';

function FilterText(props) {
    const { onFilter, defaultFilters, headerText, onRequestClose } = props;
    const [filters, setFilters] = useState(formatFilters(defaultFilters));

    const push = (value) => {
        setFilters([...filters, value]);
    };

    const remove = (index) => {
        setFilters([...filters].filter((s, idx) => index !== idx));
    };

    const handleChange = (event, index) => {
        const newFilters = [...filters];
        newFilters[index] = event.target.value;
        setFilters(newFilters);
    };

    return (
        <form onSubmit={() => onFilter(filters)}>
            <StyledContent>
                {filters.map((value, index) => (
                    <>
                        <RenderIf isTrue={index > 0}>
                            <StyledOr>Or</StyledOr>
                        </RenderIf>
                        <StyledContentField>
                            <StyledInput
                                placeholder={`Find ${headerText}`}
                                onChange={(event) => handleChange(event, index)}
                                value={value}
                            />
                            <RenderIf isTrue={filters.length > 1}>
                                <ButtonIcon icon={<TrashFilled />} onClick={() => remove(index)} />
                            </RenderIf>
                        </StyledContentField>
                    </>
                ))}
                <StyledButton variant="base" onClick={() => push('')}>
                    <StyledIconPlus />
                    Add Value
                </StyledButton>
            </StyledContent>
            <StyledFooter>
                <Button
                    className="rainbow-m-right_small"
                    label="Cancel"
                    size="small"
                    variant="neutral"
                    onClick={onRequestClose}
                >
                    Cancel
                </Button>
                <Button label="Save" size="small" variant="brand" type="submit">
                    Save
                </Button>
            </StyledFooter>
        </form>
    );
}

FilterText.propTypes = {
    onFilter: PropTypes.func,
    defaultFilters: PropTypes.arrayOf(PropTypes.string),
    headerText: PropTypes.string,
    onRequestClose: PropTypes.func,
};

FilterText.defaultProps = {
    onFilter: () => {},
    defaultFilters: [''],
    headerText: undefined,
    onRequestClose: () => {},
};

export default FilterText;
