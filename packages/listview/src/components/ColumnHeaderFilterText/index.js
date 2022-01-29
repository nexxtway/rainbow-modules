/* eslint-disable react/jsx-curly-newline */
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { ButtonIcon, RenderIf } from 'react-rainbow-components';
import { TrashFilled } from '@rainbow-modules/icons';
import { useUniqueIdentifier } from '@rainbow-modules/hooks';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import HeaderFilter from './headerFilter';
import FilterOverlay from './FilterOverlay';
import { StyledContentField, StyledOr, StyledIconPlus, StyledButton, StyledInput } from './styled';
import { formatFilters, getNodeText, reverseFilters } from './helpers';

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
    const formId = useUniqueIdentifier('headear-filter-form');
    const [values, setValues] = useState(formatFilters(defaultFilters));
    const [isOpen, setIsOpen] = useState(false);
    const [hasFilter, setHasFilter] = useState(defaultFilters.length > 0);
    const headerText = getNodeText(header);

    const handelSubmit = (newValue) => {
        const newFilter = reverseFilters(newValue);
        setValues(newValue);
        onFilter(newFilter);
        setIsOpen(false);
        setHasFilter(newFilter.length > 0);
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
                header={header}
                formId={formId}
            >
                <Form
                    onSubmit={handelSubmit}
                    mutators={{ ...arrayMutators }}
                    initialValues={values}
                    render={({
                        handleSubmit,
                        form: {
                            mutators: { push },
                        },
                    }) => {
                        return (
                            <form id={formId} onSubmit={handleSubmit}>
                                <FieldArray name="texts">
                                    {({ fields }) =>
                                        fields.map((name, index) => (
                                            <>
                                                <RenderIf isTrue={index > 0}>
                                                    <StyledOr>Or</StyledOr>
                                                </RenderIf>
                                                <StyledContentField key={name}>
                                                    <Field
                                                        name={`${name}.value`}
                                                        component={StyledInput}
                                                        placeholder={`Find ${headerText}`}
                                                    />
                                                    <RenderIf isTrue={fields.length > 1}>
                                                        <ButtonIcon
                                                            icon={<TrashFilled />}
                                                            onClick={() => fields.remove(index)}
                                                        />
                                                    </RenderIf>
                                                </StyledContentField>
                                            </>
                                        ))
                                    }
                                </FieldArray>
                                <StyledButton
                                    variant="base"
                                    onClick={() => push('texts', undefined)}
                                >
                                    <StyledIconPlus />
                                    Add Value
                                </StyledButton>
                            </form>
                        );
                    }}
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
