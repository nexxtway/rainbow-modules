import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RenderIf, Input } from 'react-rainbow-components';
import { Search } from '@rainbow-modules/icons';
import { createPortal } from 'react-dom';
import Option from './option';
import Options from './options';
import Initial from './initial';
import Results from './results';
import {
    Backdrop,
    Container,
    OptionsContainer,
    BrandMagnifyingGlass,
    StyledHeader,
} from './styled';

const SearchContainer = (props) => {
    const {
        isOpen,
        onSearch,
        onSearchWithPagination,
        results,
        onRequestClose,
        query,
        onSelect,
        isLoading,
    } = props;
    const inputRef = useRef();
    const backdropRef = useRef();
    const [searchMode, setSearchMode] = useState('empty');

    const isEmptyMode = searchMode === 'empty';
    const isPicklistMode = searchMode === 'picklist';
    const isResultsMode = searchMode === 'results';

    useEffect(() => {
        if (isOpen) {
            setSearchMode(query.length === 0 ? 'empty' : 'picklist');
            setTimeout(() => {
                inputRef.current.focus();
            }, 0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, query.length === 0]);

    const showResults = () => {
        setSearchMode('results');
        onSearchWithPagination({ query, page: 1 });
    };

    const handleKeyDown = (event) => {
        switch (event.keyCode) {
            case 27:
                onRequestClose();
                break;
            case 13:
                showResults();
                break;
            default:
        }
    };

    const search = (event) => {
        const { value } = event.target;
        onSearch({ query: value });
    };

    const handleBackdropClick = (event) => {
        if (event.target === backdropRef.current) {
            onRequestClose();
        }
    };

    if (isOpen) {
        return createPortal(
            <Backdrop ref={backdropRef} onClick={handleBackdropClick}>
                <Container>
                    <StyledHeader>
                        <Input
                            type="search"
                            ref={inputRef}
                            value={query}
                            onKeyDown={handleKeyDown}
                            isBare
                            icon={<Search />}
                            autoComplete="off"
                            onChange={search}
                        />
                    </StyledHeader>
                    <RenderIf isTrue={isEmptyMode}>
                        <Initial />
                    </RenderIf>
                    <RenderIf isTrue={isPicklistMode}>
                        <OptionsContainer role="presentation">
                            <Option
                                label={query}
                                icon={<BrandMagnifyingGlass />}
                                onClick={showResults}
                            />
                            <Options results={results} onSelect={onSelect} />
                        </OptionsContainer>
                    </RenderIf>
                    <RenderIf isTrue={isResultsMode}>
                        <Results
                            query={query}
                            results={results}
                            isLoading={isLoading}
                            onSearchWithPagination={onSearchWithPagination}
                            onSelect={onSelect}
                        />
                    </RenderIf>
                </Container>
            </Backdrop>,
            document.body,
        );
    }
    return null;
};

SearchContainer.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onSearch: PropTypes.func.isRequired,
    onSearchWithPagination: PropTypes.func.isRequired,
    results: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default SearchContainer;
