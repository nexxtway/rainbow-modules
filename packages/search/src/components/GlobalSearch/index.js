import React, { useState, useRef, Children } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-rainbow-components';
import { Search } from '@rainbow-modules/icons';
import SearchContainer from './searchContainer';

const getSearchResults = ({ children, results }) => {
    return Children.toArray(children).reduce((seed, child, index) => {
        // eslint-disable-next-line no-param-reassign
        seed[child.props.name] = results[index];
        return seed;
    }, {});
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
        onSearch: globalOnSearch,
    } = props;
    const [isOpen, setOpen] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState({});
    const containerRef = useRef();

    const handleAutocomplete = async ({ query }) => {
        setLoading(true);
        setQuery(query);
        const results = await Promise.all(
            Children.map(children, (child) => {
                return child.props.onAutocomplete({ query });
            }),
        );
        setLoading(false);
        setSearchResults(getSearchResults({ children, results }));
    };

    const handleSearch = async ({ query, page }) => {
        const hasOnSearchEvent = Children.toArray(children).some((child) => {
            const { onSearch } = child.props;
            return typeof onSearch === 'function';
        });
        if (hasOnSearchEvent) {
            setLoading(true);
            setQuery(query);
            const results = await Promise.all(
                Children.map(children, (child) => {
                    return child.props.onSearch({ query, page });
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

    return (
        <div ref={containerRef} style={style} className={className}>
            <Input
                type="search"
                value={query}
                onFocus={() => setOpen(true)}
                autoComplete="off"
                icon={<Search />}
                variant={variant}
                placeholder={placeholder}
            />
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
            />
        </div>
    );
};

GlobalSearch.propTypes = {
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
};

export default GlobalSearch;
