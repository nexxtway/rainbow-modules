/* eslint-disable react/prop-types */
import React from 'react';
import { UniversalPickerOption } from '@rainbow-modules/forms';
import { ClockFilled } from '@rainbow-modules/icons';
import Option from './option';
import {
    EmptyModeContainer,
    StyledChipOption,
    StyledUniversalPicker,
    OptionHeader,
} from './styled';

const ChipOption = ({ children, ...rest }) => (
    <StyledChipOption {...rest}>{children}</StyledChipOption>
);

const EmptyMode = (props) => {
    const { icon, label, description, onClick } = props;
    return (
        <EmptyModeContainer>
            <StyledUniversalPicker label="I’m looking for…" labelAlignment="left">
                <UniversalPickerOption component={ChipOption} name="1">
                    Entity 1
                </UniversalPickerOption>
                <UniversalPickerOption component={ChipOption} name="2">
                    Entity 2
                </UniversalPickerOption>
            </StyledUniversalPicker>
            <OptionHeader>Recents</OptionHeader>
            <Option label="Label" description="Description" icon={<ClockFilled />} />
        </EmptyModeContainer>
    );
};

export default EmptyMode;
