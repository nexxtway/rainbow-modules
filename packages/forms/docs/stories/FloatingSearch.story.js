import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ButtonIcon } from 'react-rainbow-components';
import { FilterFilled } from '@rainbow-modules/icons';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import FloatingSearch from '../../src/components/FloatingSearch';

const Container = styled.div`
    padding: 20px;
`;

const searchStyles = {
    width: 500,
};

export const BasicFloatingSearch = () => {
    const triggerRef = useRef(null);
    const [isOpen, setIsOpen] = useState(false);
    const [value, setValue] = useState('');

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleCloseSearch = () => {
        setValue('');
        setIsOpen(false);
    };

    return (
        <RainbowFirebaseApp>
            <Container>
                <ButtonIcon
                    shaded
                    variant="border-filled"
                    ref={triggerRef}
                    icon={<FilterFilled />}
                    onClick={toggleOpen}
                />
                <FloatingSearch
                    isOpen={isOpen}
                    triggerRef={() => triggerRef.current.htmlElementRef}
                    placeholder="Search..."
                    style={searchStyles}
                    onChange={setValue}
                    value={value}
                    onCloseSearch={handleCloseSearch}
                />
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|Forms/Stories',
};
