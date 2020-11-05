import React, { useRef, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import { Input, RenderIf } from 'react-rainbow-components';

const Container = styled.div`
    position: fixed;
    top: 0;
    margin: 0 auto;
    width: 80%;
    background-color: white;
    border: 1px solid #eee;
    border-radius: 4px;
`;

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
            <Container>
                <RenderIf isTrue={searchMode === 'picklist'}>
                    <Input type="search" ref={inputRef} onKeyDown={handleKeyDown} />
                    <h1>picklist</h1>
                </RenderIf>
                <RenderIf isTrue={searchMode === 'results'}>
                    <h1>search results</h1>
                </RenderIf>
            </Container>,
            document.body,
        );
    }
    return null;
};

export default SearchContainer;
