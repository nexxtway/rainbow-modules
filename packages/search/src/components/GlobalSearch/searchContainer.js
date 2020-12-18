import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RenderIf, Input } from 'react-rainbow-components';
import { Search } from '@rainbow-modules/icons';
import { createPortal } from 'react-dom';
import Options from './options';
import Initial from './initial';
import Results from './results';
import { Backdrop, Container, OptionsContainer, StyledHeader } from './styled';

const UP_KEY = 38;
const DOWN_KEY = 40;
const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

function scrollTo(ref, offset) {
    ref.current.scrollTo(0, offset);
}

function isOptionVisible(elem, container) {
    const { top: elTop, bottom: elBottom } = elem.getBoundingClientRect();
    const { top: containerTop, bottom: containerBottom } = container.getBoundingClientRect();

    return (
        Math.floor(elTop) >= Math.floor(containerTop) &&
        Math.ceil(elBottom) <= Math.ceil(containerBottom)
    );
}

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
    const menuRef = useRef();
    const [searchMode, setSearchMode] = useState('empty');
    const isEmptyMode = searchMode === 'empty';
    const isPicklistMode = searchMode === 'picklist';
    const isResultsMode = searchMode === 'results';

    useEffect(() => {
        if (query.length > 0) {
            setSearchMode('picklist');
        }
    }, [query]);

    useEffect(() => {
        if (isOpen) {
            setSearchMode(query.length === 0 ? 'empty' : 'results');
            setTimeout(() => {
                inputRef.current.focus();
            }, 0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    const showResults = () => {
        setSearchMode('results');
        onSearchWithPagination({ query, page: 1 });
    };

    const [activeOptionIndex, setActiveOptionIndex] = useState(0);
    const options = Object.keys(results).map((entityName) => results[entityName].hits);
    const flattenedOptions = [{ title: query }].concat(...options);
    const { childNodes } = menuRef.current || {};

    const scrollBy = (offset) => {
        menuRef.current.scrollBy(0, offset);
    };

    const scrollToOption = (nextFocusedIndex) => {
        const currentFocusedOptionRef = childNodes[activeOptionIndex];
        const nextFocusedOptionRef = childNodes[nextFocusedIndex];
        if (!isOptionVisible(nextFocusedOptionRef, menuRef.current)) {
            const amount = nextFocusedOptionRef.offsetTop - currentFocusedOptionRef.offsetTop;
            scrollBy(amount);
        }
    };

    const handleKeyUpPressed = () => {
        if (isPicklistMode) {
            const nextActiveIndex =
                (flattenedOptions.length + activeOptionIndex - 1) % flattenedOptions.length;

            if (nextActiveIndex < activeOptionIndex) {
                if (nextActiveIndex === 0) {
                    scrollTo(menuRef, 0);
                } else {
                    scrollToOption(nextActiveIndex);
                }
                setActiveOptionIndex(nextActiveIndex);
            }
        }
    };

    const handleKeyDownPressed = () => {
        if (isPicklistMode) {
            const nextActiveIndex = (activeOptionIndex + 1) % flattenedOptions.length;
            if (nextActiveIndex > 0) {
                scrollToOption(nextActiveIndex);
                setActiveOptionIndex(nextActiveIndex);
            }
        }
    };

    const handleKeyEnterPressed = () => {
        if (activeOptionIndex === 0) {
            showResults();
        } else {
            onSelect(flattenedOptions[activeOptionIndex]);
        }
    };

    const handleKeyEscPressed = () => {
        onRequestClose();
    };

    const keyHandlerMap = {
        [UP_KEY]: handleKeyUpPressed,
        [DOWN_KEY]: handleKeyDownPressed,
        [ENTER_KEY]: handleKeyEnterPressed,
        [ESCAPE_KEY]: handleKeyEscPressed,
    };

    const handleKeyPressed = (event) => {
        if (keyHandlerMap[event.keyCode]) {
            keyHandlerMap[event.keyCode](event);
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

    const handleResultsSelect = (item) => {
        setSearchMode('empty');
        onSelect(item);
    };

    if (isOpen) {
        return createPortal(
            <Backdrop ref={backdropRef} onClick={handleBackdropClick}>
                <Container onKeyDown={handleKeyPressed}>
                    <StyledHeader>
                        <Input
                            type="search"
                            ref={inputRef}
                            value={query}
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
                        <OptionsContainer role="presentation" ref={menuRef}>
                            <Options
                                hits={flattenedOptions}
                                onSelect={onSelect}
                                activeOptionIndex={activeOptionIndex}
                                onHover={setActiveOptionIndex}
                                onClickFirstOption={showResults}
                            />
                        </OptionsContainer>
                    </RenderIf>
                    <RenderIf isTrue={isResultsMode}>
                        <Results
                            query={query}
                            results={results}
                            isLoading={isLoading}
                            onSearchWithPagination={onSearchWithPagination}
                            onSelect={handleResultsSelect}
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
    onSelect: PropTypes.func.isRequired,
    results: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
};

export default SearchContainer;
