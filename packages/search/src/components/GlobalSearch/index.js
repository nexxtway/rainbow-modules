import React, { useState, useRef, useEffect, Children } from 'react';
import PropTypes from 'prop-types';
import { Input } from 'react-rainbow-components';
import { Search } from '@rainbow-modules/icons';
import { useOutsideClick } from '@rainbow-modules/hooks';
import SearchContainer from './searchContainer';

const GlobalSearch = (props) => {
    const { variant, placeholder, className, style } = props;
    const [isOpen, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState({});
    const containerRef = useRef();

    const search = async ({ query }) => {
        const results = await Promise.all(
            Children.map(props.children, (child) => {
                return child.props.onSearch({ query });
            }),
        );
        setSearchResults(
            Children.toArray(props.children).reduce((seed, child, index) => {
                seed[child.props.name] = results[index];
                return seed;
            }, {}),
        );
    };

    const onRequestClose = () => {
        setOpen(false);
    };

    return (
        <div ref={containerRef} style={style} className={className}>
            <Input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onFocus={() => setOpen(true)}
                autoComplete="off"
                icon={<Search />}
                variant={variant}
                placeholder={placeholder}
            />
            <SearchContainer
                isOpen={isOpen}
                onSearch={search}
                results={searchResults}
                onRequestClose={onRequestClose}
            />
        </div>
    );
};

GlobalSearch.propTypes = {
    /** The variant changes the appearance of the GlobalSearch input. Accepted variants include default,
     * and shaded. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'shaded', 'bare']),
    /** The placeholder of the GlobalSearch input. */
    placeholder: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

GlobalSearch.defaultProps = {
    variant: 'default',
    placeholder: undefined,
    className: undefined,
    style: undefined,
};

export default GlobalSearch;
