import React, { useState, useRef, Children } from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import { Search, Close } from '@rainbow-modules/icons';
import SearchContainer from './searchContainer';
import { StyledInput, StyledButtonIcon } from './styled';
import { StyledContainer } from './styled/search';

const getSearchResults = ({ children, results }) => {
    return Children.toArray(children).reduce((seed, child, index) => {
        // eslint-disable-next-line no-param-reassign
        seed[child.props.name] = {
            ...results[index],
            icon: child.props.icon,
            component: child.props.component,
        };
        return seed;
    }, {});
};

const resultsMatchCurrentQuery = (results, query) => {
    if (Array.isArray(results)) {
        return results.every((item) => {
            if (item && item.query) {
                return item.query === query;
            }
            return true;
        });
    }
    return true;
};

const GlobalSearch = (props) => {
    const {
        onSelect,
        variant,
        placeholder,
        children,
        className,
        style,
        recents,
        searchBy,
        onSearch: globalOnSearch,
    } = props;
    const [isOpen, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState({});
    const containerRef = useRef();
    const currentQuery = useRef('');
    const hasQuery = query && query.length > 0;

    const handleAutocomplete = async ({ query: searchQuery }) => {
        setLoading(true);
        setQuery(searchQuery);
        currentQuery.current = searchQuery;
        const results = await Promise.all(
            Children.map(children, (child) => {
                return child.props.onAutocomplete({ query: searchQuery });
            }),
        );
        setLoading(false);
        if (resultsMatchCurrentQuery(results, currentQuery.current)) {
            setSearchResults(getSearchResults({ children, results }));
        }
    };

    const handleSearch = async ({ query: searchQuery, page }) => {
        setQuery(searchQuery);
        const hasOnSearchEvent = Children.toArray(children).some((child) => {
            const { onSearch } = child.props;
            return typeof onSearch === 'function';
        });
        if (hasOnSearchEvent) {
            setLoading(true);
            const results = await Promise.all(
                Children.map(children, (child) => {
                    return child.props.onSearch({ query: searchQuery, page });
                }),
            );
            setLoading(false);
            setSearchResults(getSearchResults({ children, results }));
        }
    };

    const closeSearch = () => {
        setOpen(false);
    };

    const handleSelect = (item) => {
        closeSearch();
        setQuery('');
        onSelect(item);
    };

    const handleFocus = () => {
        setOpen(true);
        if (hasQuery) {
            handleSearch({ query, page: 1 });
        }
    };

    return (
        <div ref={containerRef} style={style} className={className}>
            <StyledContainer>
                <StyledInput
                    type="search"
                    value={query}
                    onFocus={handleFocus}
                    autoComplete="off"
                    icon={<Search />}
                    variant={variant}
                    placeholder={placeholder}
                />
                <RenderIf isTrue={hasQuery}>
                    <StyledButtonIcon size="small" icon={<Close />} onClick={() => setQuery('')} />
                </RenderIf>
            </StyledContainer>
            <SearchContainer
                isOpen={isOpen}
                onAutocomplete={handleAutocomplete}
                onSearch={handleSearch}
                query={query}
                results={searchResults}
                onRequestClose={closeSearch}
                onSelect={handleSelect}
                isLoading={isLoading}
                recents={recents}
                globalOnSearch={globalOnSearch}
                searchBy={searchBy}
            />
        </div>
    );
};

GlobalSearch.propTypes = {
    /** It is used to display content to the right of the footer.  */
    searchBy: PropTypes.node,
    /** Event triggerd when select a search (select the first search option). It can be used for store recent searches. */
    onSearch: PropTypes.func,
    /** Event triggered when select an option. */
    onSelect: PropTypes.func,
    /** An array with the recent searches. */
    recents: PropTypes.arrayOf(PropTypes.string),
    /** The variant changes the appearance of the GlobalSearch input. Accepted variants include default,
     * and shaded. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'shaded', 'bare']),
    /** The placeholder of the GlobalSearch input. */
    placeholder: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

GlobalSearch.defaultProps = {
    onSearch: () => {},
    onSelect: () => {},
    recents: [],
    variant: 'default',
    placeholder: undefined,
    className: undefined,
    style: undefined,
    children: undefined,
    searchBy: undefined,
};

export default GlobalSearch;
