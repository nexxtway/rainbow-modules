import React from 'react';
import { UniversalPickerOption } from '@rainbow-modules/forms';
import Option from './option';
import { OptionsProps } from './types';

const Categories: React.FC<OptionsProps> = ({ options }: OptionsProps) => {
    return (
        <>
            {options &&
                options.map((value) => (
                    <UniversalPickerOption key={value} component={Option} name={value}>
                        {value}
                    </UniversalPickerOption>
                ))}
        </>
    );
};

export default Categories;
