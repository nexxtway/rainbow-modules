import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Field } from 'react-final-form';
import { Input, ButtonIcon } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import { Plus } from '@rainbow-modules/icons';
import UniversalFormOverlay from '../../src/components/UniversalFormOverlay';
import isRequired from '../../src/validators/isRequired';
import app from '../../../../firebase';

const TitleContainer = styled.div`
    margin: 20px 50px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 30px;
    color: ${(props) => props.theme.rainbow.palette.text.main};
    font-family: Lato Bold, Helvetica, sans-serif;
`;

const Label = styled.span`
    font-size: 1rem;
    font-weight: bold;
`;

const Fields = () => {
    const label = <Label>Name</Label>;
    return (
        <div>
            <Field
                name="name"
                label={label}
                labelAlignment="left"
                component={Input}
                validate={isRequired()}
                placeholder="Enter the book name"
                className="rainbow-m-bottom_large"
            />
        </div>
    );
};

export const BasicUniversalFormOverlay = () => {
    const [isOpen, setIsOpen] = useState();
    const triggerRef = useRef();
    return (
        <RainbowFirebaseApp app={app}>
            <TitleContainer>
                <Title>Books</Title>
                <ButtonIcon
                    icon={<Plus />}
                    variant="border-filled"
                    ref={triggerRef}
                    shaded
                    onClick={() => setIsOpen(!isOpen)}
                />
            </TitleContainer>
            <UniversalFormOverlay
                triggerElementRef={() => triggerRef.current.buttonRef}
                isOpen={isOpen}
                fields={Fields}
                onRequestClose={() => setIsOpen(false)}
                onSumbit={() => setIsOpen(false)}
            />
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules/Forms/Stories/UniversalFormOverlay',
    parameters: {
        viewOnGithub: {
            fileName: __filename,
        },
    },
};
