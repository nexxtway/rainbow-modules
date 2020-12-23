import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RenderIf } from 'react-rainbow-components';
import { createPortal } from 'react-dom';
import InputSearch from './search';
import Options from './options';
import Recents from './recents';
import Message from './message';
import Results from './results';
import { Backdrop, Container, OptionsContainer, StyledHeader } from './styled';

const UP_KEY = 38;
const DOWN_KEY = 40;
const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

const scrollTo = (ref, offset) => {
    ref.current.scrollTo(0, offset);
};

const isOptionVisible = (elem, container) => {
    const { top: elTop, bottom: elBottom } = elem.getBoundingClientRect();
    const { top: containerTop, bottom: containerBottom } = container.getBoundingClientRect();

    return (
        Math.floor(elTop) >= Math.floor(containerTop) &&
        Math.ceil(elBottom) <= Math.ceil(containerBottom)
    );
};

const getOptions = ({ query, options, isPicklistMode, recents }) => {
    if (isPicklistMode) {
        return [{ title: query }].concat(...options);
    }
    return recents;
};

const SearchContainer = (props) => {
    const {
        isOpen,
        onAutocomplete,
        onSearch,
        results,
        onRequestClose,
        query,
        onSelect,
        isLoading,
        recents,
        globalOnSearch,
    } = props;
    const backdropRef = useRef();
    const menuRef = useRef();
    const [activeOptionIndex, setActiveOptionIndex] = useState(0);
    const [searchMode, setSearchMode] = useState('empty');
    const isEmptyMode = searchMode === 'empty';
    const isPicklistMode = searchMode === 'picklist';
    const isResultsMode = searchMode === 'results';
    const hasRecents = recents && recents.length > 0;
    const showRecents = isEmptyMode && hasRecents;
    const showInitMessage = isEmptyMode && !hasRecents;
    const [childNodes, setChildNodes] = useState();

    useEffect(() => {
        if (query.length > 0) {
            setSearchMode('picklist');
        } else {
            setSearchMode('empty');
        }
    }, [query]);

    useEffect(() => {
        if (isOpen) {
            setSearchMode(query.length === 0 ? 'empty' : 'results');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen]);

    useEffect(() => {
        setActiveOptionIndex(0);
        if (isOpen && menuRef && menuRef.current) {
            setChildNodes(menuRef.current.childNodes);
        }
    }, [isOpen, searchMode]);

    const showResults = () => {
        setSearchMode('results');
        onSearch({ query, page: 1 });
        globalOnSearch({ query });
    };

    const selectRecent = (recentItem) => {
        setTimeout(() => {
            setSearchMode('results');
        }, 0);
        onSearch({ query: recentItem, page: 1 });
        onAutocomplete({ query: recentItem });
    };

    const options = Object.keys(results).map((entityName) => results[entityName].hits);
    const flattenedOptions = getOptions({ query, options, isPicklistMode, recents });

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
        if (!isResultsMode) {
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
        if (!isResultsMode) {
            const nextActiveIndex = (activeOptionIndex + 1) % flattenedOptions.length;
            if (nextActiveIndex > 0) {
                scrollToOption(nextActiveIndex);
                setActiveOptionIndex(nextActiveIndex);
            }
        }
    };

    const handleKeyEnterPressed = () => {
        const currentOption = flattenedOptions[activeOptionIndex];
        if (showRecents) {
            return selectRecent(currentOption);
        }
        if (activeOptionIndex === 0) {
            return showResults();
        }
        return onSelect(currentOption);
    };

    const keyHandlerMap = {
        [UP_KEY]: handleKeyUpPressed,
        [DOWN_KEY]: handleKeyDownPressed,
        [ENTER_KEY]: handleKeyEnterPressed,
        [ESCAPE_KEY]: onRequestClose,
    };

    const handleKeyPressed = (event) => {
        if (keyHandlerMap[event.keyCode]) {
            keyHandlerMap[event.keyCode](event);
        }
    };

    const handleChange = (value) => {
        onAutocomplete({ query: value });
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
                        <InputSearch
                            onChange={handleChange}
                            value={query}
                            onRequestClose={onRequestClose}
                        />
                    </StyledHeader>
                    <RenderIf isTrue={!isResultsMode}>
                        <OptionsContainer role="presentation" ref={menuRef}>
                            <RenderIf isTrue={isPicklistMode}>
                                <Options
                                    hits={flattenedOptions}
                                    onSelect={onSelect}
                                    activeOptionIndex={activeOptionIndex}
                                    onHover={setActiveOptionIndex}
                                    onClickFirstOption={showResults}
                                />
                            </RenderIf>
                            <RenderIf isTrue={showRecents}>
                                <Recents
                                    items={recents}
                                    onSelect={selectRecent}
                                    activeOptionIndex={activeOptionIndex}
                                    onHover={setActiveOptionIndex}
                                />
                            </RenderIf>
                            <RenderIf isTrue={showInitMessage}>
                                <Message title="Type something to search" />
                            </RenderIf>
                        </OptionsContainer>
                    </RenderIf>
                    <RenderIf isTrue={isResultsMode}>
                        <Results
                            query={query}
                            results={results}
                            isLoading={isLoading}
                            onSearch={onSearch}
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
    onAutocomplete: PropTypes.func.isRequired,
    onSearch: PropTypes.func.isRequired,
    onSelect: PropTypes.func.isRequired,
    results: PropTypes.object.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    query: PropTypes.string.isRequired,
    isLoading: PropTypes.bool.isRequired,
    recents: PropTypes.array.isRequired,
    globalOnSearch: PropTypes.func.isRequired,
};

export default SearchContainer;
