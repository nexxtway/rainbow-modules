import React, { useState } from 'react';
import styled from 'styled-components';
import { FilterFilled } from '@rainbow-modules/icons';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { FloatingSearchButtonIcon } from '../../src';

const Container = styled.div`
    padding: 20px;
`;

export const BasicFloatingSearchButtonIcon = () => {
    const [value, setValue] = useState('');

    return (
        <RainbowFirebaseApp>
            <Container>
                <FloatingSearchButtonIcon
                    shaded
                    variant="border-filled"
                    icon={<FilterFilled />}
                    value={value}
                    onChange={setValue}
                />
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Listview/Stories/FloatingSearchButtonIcon',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
