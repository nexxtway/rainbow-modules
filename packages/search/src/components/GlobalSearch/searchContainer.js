import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { RenderIf, Tabset, Tab } from 'react-rainbow-components';
import Header from './searchHeader';
import Option from './option';
import ResultItem from './resultItem';
import {
    Backdrop,
    Container,
    OptionsContainer,
    StyledMagnifyingGlass,
    BrandMagnifyingGlass,
    ResultsContainer,
    ResultsContent,
} from './styled';

const SearchContainer = (props) => {
    const { isOpen } = props;
    const inputRef = useRef();
    const [searchMode, setSearchMode] = useState('picklist');

    useEffect(() => {
        if (isOpen) {
            setSearchMode('picklist');
            setTimeout(() => {
                inputRef.current.focus();
            }, 0);
        }
    }, [isOpen]);

    const handleKeyDown = (event) => {
        if (event.keyCode === 13) {
            setSearchMode('results');
        }
    };

    if (isOpen) {
        return createPortal(
            <Backdrop>
                <Container>
                    <RenderIf isTrue={searchMode === 'picklist'}>
                        <Header inputRef={inputRef} handleKeyDown={handleKeyDown} />
                        <OptionsContainer role="presentation">
                            <Option label="First Option Label" icon={<BrandMagnifyingGlass />} />
                            <Option
                                label="Label"
                                description="Description"
                                icon={<StyledMagnifyingGlass />}
                            />
                        </OptionsContainer>
                    </RenderIf>
                    <RenderIf isTrue={searchMode === 'results'}>
                        <Header />
                        <ResultsContainer>
                            <Tabset variant="line">
                                <Tab label="Components" name="components" id="components" />
                                <Tab label="Examples" name="examples" id="examples" />
                            </Tabset>
                            <ResultsContent>
                                <ResultItem
                                    label="text"
                                    description="Description"
                                    icon={<StyledMagnifyingGlass />}
                                />
                            </ResultsContent>
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
