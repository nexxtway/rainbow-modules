import styled from 'styled-components';
import { AutoSizer } from 'react-virtualized';

export const Container = styled(AutoSizer)`
    /* Collection default theme */

    .ReactVirtualized__Collection {
    }

    .ReactVirtualized__Collection__innerScrollContainer {
    }

    /* Grid default theme */

    .ReactVirtualized__Grid {
    }

    .ReactVirtualized__Grid__innerScrollContainer {
    }

    /* Table default theme */

    .ReactVirtualized__Table {
    }

    .ReactVirtualized__Table__Grid {
    }

    .ReactVirtualized__Table__headerRow {
        font-weight: 700;
        text-transform: uppercase;
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
    }
    .ReactVirtualized__Table__row {
        display: -webkit-box;
        display: flex;
        -webkit-box-orient: horizontal;
        -webkit-box-direction: normal;
        flex-direction: row;
        -webkit-box-align: center;
        align-items: center;
    }

    .ReactVirtualized__Table__headerTruncatedText {
        display: inline-block;
        max-width: 100%;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
    }

    .ReactVirtualized__Table__headerColumn,
    .ReactVirtualized__Table__rowColumn {
        margin-right: 10px;
        min-width: 0px;
    }
    .ReactVirtualized__Table__rowColumn {
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    .ReactVirtualized__Table__headerColumn:first-of-type,
    .ReactVirtualized__Table__rowColumn:first-of-type {
        margin-left: 10px;
    }
    .ReactVirtualized__Table__sortableHeaderColumn {
        cursor: pointer;
    }

    .ReactVirtualized__Table__sortableHeaderIconContainer {
        display: -webkit-box;
        display: flex;
        -webkit-box-align: center;
        align-items: center;
    }
    .ReactVirtualized__Table__sortableHeaderIcon {
        -webkit-box-flex: 0;
        flex: 0 0 24px;
        height: 1em;
        width: 1em;
        fill: currentColor;
    }

    /* List default theme */

    .ReactVirtualized__List {
    }

    /*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNvdXJjZS9zdHlsZXMuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZCQUE2Qjs7QUFFN0I7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHVCQUF1Qjs7QUFFdkI7QUFDQTs7QUFFQTtBQUNBOztBQUVBLHdCQUF3Qjs7QUFFeEI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYiw4QkFBbUI7RUFBbkIsNkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtBQUNsQjs7QUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsY0FBYztBQUNoQjtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCO0FBQ0E7RUFDRSxtQkFBYztVQUFkLGNBQWM7RUFDZCxXQUFXO0VBQ1gsVUFBVTtFQUNWLGtCQUFrQjtBQUNwQjs7QUFFQSx1QkFBdUI7O0FBRXZCO0FBQ0EiLCJmaWxlIjoic3R5bGVzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENvbGxlY3Rpb24gZGVmYXVsdCB0aGVtZSAqL1xuXG4uUmVhY3RWaXJ0dWFsaXplZF9fQ29sbGVjdGlvbiB7XG59XG5cbi5SZWFjdFZpcnR1YWxpemVkX19Db2xsZWN0aW9uX19pbm5lclNjcm9sbENvbnRhaW5lciB7XG59XG5cbi8qIEdyaWQgZGVmYXVsdCB0aGVtZSAqL1xuXG4uUmVhY3RWaXJ0dWFsaXplZF9fR3JpZCB7XG59XG5cbi5SZWFjdFZpcnR1YWxpemVkX19HcmlkX19pbm5lclNjcm9sbENvbnRhaW5lciB7XG59XG5cbi8qIFRhYmxlIGRlZmF1bHQgdGhlbWUgKi9cblxuLlJlYWN0VmlydHVhbGl6ZWRfX1RhYmxlIHtcbn1cblxuLlJlYWN0VmlydHVhbGl6ZWRfX1RhYmxlX19HcmlkIHtcbn1cblxuLlJlYWN0VmlydHVhbGl6ZWRfX1RhYmxlX19oZWFkZXJSb3cge1xuICBmb250LXdlaWdodDogNzAwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLlJlYWN0VmlydHVhbGl6ZWRfX1RhYmxlX19yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uUmVhY3RWaXJ0dWFsaXplZF9fVGFibGVfX2hlYWRlclRydW5jYXRlZFRleHQge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5SZWFjdFZpcnR1YWxpemVkX19UYWJsZV9faGVhZGVyQ29sdW1uLFxuLlJlYWN0VmlydHVhbGl6ZWRfX1RhYmxlX19yb3dDb2x1bW4ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIG1pbi13aWR0aDogMHB4O1xufVxuLlJlYWN0VmlydHVhbGl6ZWRfX1RhYmxlX19yb3dDb2x1bW4ge1xuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cblxuLlJlYWN0VmlydHVhbGl6ZWRfX1RhYmxlX19oZWFkZXJDb2x1bW46Zmlyc3Qtb2YtdHlwZSxcbi5SZWFjdFZpcnR1YWxpemVkX19UYWJsZV9fcm93Q29sdW1uOmZpcnN0LW9mLXR5cGUge1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cbi5SZWFjdFZpcnR1YWxpemVkX19UYWJsZV9fc29ydGFibGVIZWFkZXJDb2x1bW4ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5SZWFjdFZpcnR1YWxpemVkX19UYWJsZV9fc29ydGFibGVIZWFkZXJJY29uQ29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5SZWFjdFZpcnR1YWxpemVkX19UYWJsZV9fc29ydGFibGVIZWFkZXJJY29uIHtcbiAgZmxleDogMCAwIDI0cHg7XG4gIGhlaWdodDogMWVtO1xuICB3aWR0aDogMWVtO1xuICBmaWxsOiBjdXJyZW50Q29sb3I7XG59XG5cbi8qIExpc3QgZGVmYXVsdCB0aGVtZSAqL1xuXG4uUmVhY3RWaXJ0dWFsaXplZF9fTGlzdCB7XG59XG4iXX0= */
`;

export const StyledRow = styled.div`
    box-sizing: border-box;
    box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_8};
    transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

    &:hover {
        background-color: ${(props) => props.theme.rainbow.palette.action.hover};
        box-shadow: ${(props) => props.theme.rainbow.shadows.shadow_9},
            ${(props) => props.theme.rainbow.shadows.shadow_3};
        z-index: 1;
    }
`;

export const StyledEmptyBody = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;

export const StyledEmptyContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    margin: 32px auto;
    box-sizing: border-box;
`;

export const StyledEmptyIcon = styled.span`
    margin-bottom: 1rem;
    color: ${(props) => props.theme.rainbow.palette.border.divider};
`;

export const StyledEmptyTitle = styled.h1`
    font-size: 1.25rem;
    font-weight: 900;
    text-align: center;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    margin: 0;
    padding: 0;
`;

export const StyledEmptyDescription = styled.h2`
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme.rainbow.palette.text.label};
    margin: 0;
    margin-top: 0.5rem;
    padding: 0;
    font-weight: inherit;
`;

export const StyledHeader = styled.div`
    text-transform: uppercase;
    font-size: 0.875rem;
    font-weight: 900;
    color: ${(props) => props.theme.rainbow.palette.text.title};
    line-height: normal;
    white-space: nowrap;
    padding: 0;
    border-top: 0;
    box-sizing: border-box;
    background-color: ${(props) => props.theme.rainbow.palette.background.highlight};

    &:first-of-type .rainbow-table_header-container {
        padding-left: 18px;
    }

    :focus {
        outline: none;

        .rainbow-table_header-container {
            background-color: ${(props) => props.theme.rainbow.palette.background.main};
            border-color: ${(props) => props.theme.rainbow.palette.brand.main};
            color: ${(props) => props.theme.rainbow.palette.brand.main};
        }

        .rainbow-table_header-arrow {
            visibility: visible;
        }

        .rainbow-table_header-resize-bar,
        &:hover .rainbow-table_header-resize-bar {
            background-color: ${(props) => props.theme.rainbow.palette.brand.main};
        }

        &:hover .rainbow-table_header-container {
            border-color: ${(props) => props.theme.rainbow.palette.brand.main};
        }
    }
`;

export const StyledRowHeader = styled.div`
    background-color: ${(props) => props.theme.rainbow.palette.background.highlight};
`;

export const StyledHeaderContainer = styled.div`
    border: 1px transparent solid;
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 0.5rem;
`;

export const StyledCell = styled.div`
    padding: 0;
    text-align: left;
    box-sizing: border-box;

    :first-child > div {
        padding-left: 18px;
    }
`;

export const StyledCellContent = styled.div`
    border: 1px solid transparent;
    color: ${(props) => props.theme.rainbow.palette.text.label};
    font-size: 0.875rem;
    min-height: 42px;
    line-height: 40px;
    padding: 0 0.5rem;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 400;
    box-sizing: border-box;
    height: 100%;
    display: flex;
    align-items: center;
`;
