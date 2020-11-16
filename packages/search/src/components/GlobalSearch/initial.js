/* eslint-disable react/prop-types */
import React from 'react';
import { ClockFilled } from '@rainbow-modules/icons';
import Option from './option';
import { InitialContainer, OptionHeader } from './styled';

const Initial = () => {
    return (
        <InitialContainer>
            <OptionHeader>Recents</OptionHeader>
            <Option label="Label" description="Description" icon={<ClockFilled />} />
        </InitialContainer>
    );
};

export default Initial;
