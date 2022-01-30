import React from 'react';
import PropTypes from 'prop-types';
import { Filter } from '@rainbow-modules/icons';
import { RenderIf } from 'react-rainbow-components';
import SortArrowIcon from '../SortArrowIcon';
import { StyledContainer, StyledButtonIcon, StyledContent, StyledHeaderContainer } from './styled';
import { getNodeText } from '../helpers';

function HeaderFilter(props) {
    const {
        buttonRef,
        isOpen,
        onOpen,
        hasFilter,
        header,
        onSort,
        sortDirection,
        sortable,
        headerAlignment,
        icon: Icon,
    } = props;

    const title = getNodeText(header);

    return (
        <StyledContainer className="rainbow-table_header-container">
            <StyledHeaderContainer
                role="presentation"
                headerAlignment={headerAlignment}
                onClick={onSort}
            >
                <StyledContent title={title}>{header}</StyledContent>
                <RenderIf isTrue={sortable}>
                    <SortArrowIcon direction={sortDirection} headerAlignment={headerAlignment} />
                </RenderIf>
            </StyledHeaderContainer>
            <div>
                <StyledButtonIcon
                    ref={buttonRef}
                    icon={<Icon />}
                    onClick={onOpen}
                    isOpen={isOpen}
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
    isOpen: PropTypes.bool,
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
    isOpen: false,
    onOpen: () => {},
    hasFilter: false,
    onSort: () => {},
    sortDirection: undefined,
    sortable: false,
    header: undefined,
    headerAlignment: undefined,
    icon: Filter,
};

export default HeaderFilter;
