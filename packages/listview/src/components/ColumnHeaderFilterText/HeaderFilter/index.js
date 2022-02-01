import React from 'react';
import PropTypes from 'prop-types';
import { Filter } from '@rainbow-modules/icons';
import { RenderIf } from 'react-rainbow-components';
import SortArrowIcon from '../SortArrowIcon';
import { StyledContainer, StyledButtonIcon, StyledContent, StyledHeaderContainer } from './styled';
import { getHeaderText } from '../helpers';

function HeaderFilter(props) {
    const {
        buttonRef,
        onOpen,
        hasFilter,
        header,
        onSort,
        sortDirection,
        sortable,
        headerAlignment,
        icon,
    } = props;

    const title = getHeaderText(header);

    const handleSort = (event) => {
        if (sortable) {
            onSort(event, sortDirection);
        }
    };

    return (
        <StyledContainer className="rainbow-table_header-container">
            <StyledHeaderContainer
                role="presentation"
                headerAlignment={headerAlignment}
                onClick={handleSort}
            >
                <StyledContent title={title}>{header}</StyledContent>
                <RenderIf isTrue={sortable}>
                    <SortArrowIcon direction={sortDirection} headerAlignment={headerAlignment} />
                </RenderIf>
            </StyledHeaderContainer>
            <div>
                <StyledButtonIcon
                    ref={buttonRef}
                    icon={icon}
                    onClick={onOpen}
                    hasFilter={hasFilter}
                />
            </div>
        </StyledContainer>
    );
}

HeaderFilter.propTypes = {
    buttonRef: PropTypes.oneOfType([
        PropTypes.func,
        PropTypes.shape({ current: PropTypes.instanceOf(HTMLElement).isRequired }),
    ]),
    onOpen: PropTypes.func,
    hasFilter: PropTypes.bool,
    onSort: PropTypes.func,
    sortDirection: PropTypes.string,
    sortable: PropTypes.bool,
    header: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    headerAlignment: PropTypes.oneOf(['left', 'center', 'right']),
    icon: PropTypes.node,
};

HeaderFilter.defaultProps = {
    buttonRef: undefined,
    onOpen: () => {},
    hasFilter: false,
    onSort: () => {},
    sortDirection: undefined,
    sortable: false,
    header: undefined,
    headerAlignment: undefined,
    icon: <Filter />,
};

export default HeaderFilter;
