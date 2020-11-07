import React, { useRef, useEffect, useState } from 'react';
import { RenderIf, Tabset, Tab, Input } from 'react-rainbow-components';
import { Search } from '@rainbow-modules/icons';
import { createPortal } from 'react-dom';
import Option from './option';
import Options from './options';
import ResultItem from './resultItem';
import EmptyMode from './emptyMode';
import {
    Backdrop,
    Container,
    OptionsContainer,
    BrandMagnifyingGlass,
    ResultsContainer,
    ResultsContent,
    Content,
    StyledCubeFilled,
    StyledHeader,
} from './styled';

const SearchContainer = (props) => {
    const { isOpen, onSearch, results } = props;
    const inputRef = useRef();
    const [searchMode, setSearchMode] = useState('empty');
    const [query, setQuery] = useState('');

    useEffect(() => {
        if (isOpen) {
            setSearchMode(query.length === 0 ? 'empty' : 'picklist');
            setTimeout(() => {
                inputRef.current.focus();
            }, 0);
        }
    }, [isOpen, query.length === 0]);

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            setSearchMode('results');
        }
    };

    const search = (event) => {
        const query = event.target.value;
        setQuery(query);
        onSearch({ query });
    };

    if (isOpen) {
        return createPortal(
            <Backdrop>
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
                            <Tabset variant="line">
                                <Tab label="Components" name="components" id="components" />
                                <Tab label="Examples" name="examples" id="examples" />
                            </Tabset>
                            <Content>
                                <ResultsContent role="presentation">
                                    <ResultItem
                                        label="text"
                                        description="Description"
                                        icon={<StyledCubeFilled />}
                                    />
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
