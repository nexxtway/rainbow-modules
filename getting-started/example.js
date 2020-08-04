import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-rainbow-components';
import { RainbowFirebaseApp } from '@rainbow-modules/app';
import EmailPasswordSignUpForm from '@rainbow-modules/auth';
import app from '../firebase';
import { RainbowLogo } from '../packages/icons/src';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 2rem;
`;

export const Title = styled.h1.attrs((props) => props.theme.rainbow)`
    font-family: Lato Light, sans-serif !important;
    color: ${(props) => props.palette.text.title};
    font-size: 1.5rem;
    margin: 1rem auto;
    font-weight: normal;
`;

export const StyledCard = styled(Card)`
    width: 400px;
    padding: 1.5rem;
`;
