import React, { useRef, useEffect, useState } from 'react';
import { RenderIf, Tabset, Tab, Input } from 'react-rainbow-components';
import { Search } from '@rainbow-modules/icons';
import { createPortal } from 'react-dom';
import Option from './option';
import ResultItem from './resultItem';
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
    const { isOpen } = props;
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
                            onChange={(event) => setQuery(event.target.value)}
                        />
                    </StyledHeader>
                    <RenderIf isTrue={searchMode === 'empty'}>
                        <h1>empty</h1>
                    </RenderIf>
                    <RenderIf isTrue={searchMode === 'picklist'}>
                        <OptionsContainer role="presentation">
                            <Option label="First Option Label" icon={<BrandMagnifyingGlass />} />
                            <Option
                                label="Label"
                                description="Description"
                                icon={<StyledCubeFilled />}
                            />
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
