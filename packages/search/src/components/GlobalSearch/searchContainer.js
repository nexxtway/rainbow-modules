import React, { useRef, useEffect, useState } from 'react';
import { RenderIf, Tabset, Input } from 'react-rainbow-components';
import { Search } from '@rainbow-modules/icons';
import { createPortal } from 'react-dom';
import Option from './option';
import Options from './options';
import ResultItems from './resultItems';
import EmptyMode from './emptyMode';
import Tabs from './tabs';
import {
    Backdrop,
    Container,
    OptionsContainer,
    BrandMagnifyingGlass,
    ResultsContainer,
    ResultsContent,
    Content,
    StyledHeader,
} from './styled';

const SearchContainer = (props) => {
    const { isOpen, onSearch, results, onRequestClose } = props;
    const inputRef = useRef();
    const backdropRef = useRef();
    const [searchMode, setSearchMode] = useState('empty');
    const [query, setQuery] = useState('');
    const [activeResultTab, setActiveResultTab] = useState();

    useEffect(() => {
        if (isOpen) {
            setSearchMode(query.length === 0 ? 'empty' : 'picklist');
            setTimeout(() => {
                inputRef.current.focus();
            }, 0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isOpen, query.length === 0]);

    useEffect(() => {
        const entities = Object.keys(results);
        if (searchMode === 'results' && entities.length > 0) {
            setActiveResultTab(entities[0]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchMode === 'results']);

    const handleKeyDown = (event) => {
        switch (event.keyCode) {
            case 27:
                onRequestClose();
                break;
            case 13:
                setSearchMode('results');
                break;
            default:
        }
    };

    const search = (event) => {
        const query = event.target.value;
        setQuery(query);
        onSearch({ query });
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
                    <RenderIf isTrue={searchMode === 'empty'}>
                        <EmptyMode />
                    </RenderIf>
                    <RenderIf isTrue={searchMode === 'picklist'}>
                        <OptionsContainer role="presentation">
                            <Option label={query} icon={<BrandMagnifyingGlass />} />
                            <Options results={results} />
                        </OptionsContainer>
                    </RenderIf>
                    <RenderIf isTrue={searchMode === 'results'}>
                        <ResultsContainer>
                            <Tabset
                                variant="line"
                                activeTabName={activeResultTab}
                                onSelect={(e, selected) => setActiveResultTab(selected)}
                            >
                                <Tabs results={results} />
                            </Tabset>
                            <Content>
                                <ResultsContent role="presentation">
                                    <ResultItems results={results} activeTab={activeResultTab} />
                                </ResultsContent>
                            </Content>
                        </ResultsContainer>
                    </RenderIf>
                </Container>
            </Backdrop>,
            document.body,
        );
    }
    return null;
};

export default SearchContainer;
