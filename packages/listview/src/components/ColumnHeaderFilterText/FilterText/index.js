import React from 'react';
import PropTypes from 'prop-types';
import { RenderIf, ButtonIcon } from 'react-rainbow-components';
import { TrashFilled } from '@rainbow-modules/icons';
import {
    StyledContentField,
    StyledOr,
    StyledInput,
    StyledButton,
    StyledIconPlus,
    StyledContent,
} from './styled';

function FilterText(props) {
    const { onChange, filters, headerText } = props;

    const push = (value) => {
        onChange([...filters, value]);
    };

    const remove = (index) => {
        onChange([...filters].filter((s, sidx) => index !== sidx));
    };

    const handleChange = (event, index) => {
        const newFilters = [...filters];
        newFilters[index] = event.target.value;
        onChange(newFilters);
    };

    return (
        <StyledContent>
            {filters.map((value, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <div key={index}>
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
                </div>
            ))}
            <StyledButton variant="base" onClick={() => push('')}>
                <StyledIconPlus />
                Add Value
            </StyledButton>
        </StyledContent>
    );
}

FilterText.propTypes = {
    onChange: PropTypes.func,
    filters: PropTypes.arrayOf(PropTypes.string),
    headerText: PropTypes.string,
};

FilterText.defaultProps = {
    onChange: () => {},
    filters: [''],
    headerText: undefined,
};

export default FilterText;
