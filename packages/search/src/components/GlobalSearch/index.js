import React, { useState, useRef } from 'react';
import { Input } from 'react-rainbow-components';
import { useOutsideClick } from '@rainbow-modules/hooks';
import SearchContainer from './searchContainer';

const GlobalSearch = () => {
    const [isOpen, setOpen] = useState(false);
    const [query, setQuery] = useState('');
    const containerRef = useRef();
    useOutsideClick(
        containerRef,
        () => {
            setOpen(false);
        },
        isOpen,
    );
    return (
        <div ref={containerRef}>
            <Input
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onFocus={() => setOpen(true)}
                autoComplete="off"
            />
            <SearchContainer isOpen={isOpen} />
        </div>
    );
};

export default GlobalSearch;
