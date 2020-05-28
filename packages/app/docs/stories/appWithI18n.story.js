import React, { useState } from 'react';
import styled from 'styled-components';
import { Select } from 'react-rainbow-components';
import { FormattedMessage } from 'react-intl';
import RainbowFirebaseApp from '../../src/components/App';
import app from '../../../../firebase';
import RainbowLogo from './icons/rainbowLogo';

const translations = {
    en: {
        internationalize: 'Internationalize your web apps',
    },
    es: {
        internationalize: 'Internacionalice sus aplicaciones web',
    },
};

const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
];

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 50%;
    margin: auto;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 100;
    text-align: center;
    color: #576574;
    margin: 16px 0;
`;

export const Internationalizations = () => {
    const [locale, setLocale] = useState('en');

    return (
        <RainbowFirebaseApp app={app} translations={translations} locale={locale}>
            <Container>
                <RainbowLogo />
                <Title>
                    <FormattedMessage
                        defaultMessage="Internationalize your web apps"
                        id="internationalize"
                    />
                </Title>
                <Select
                    options={languages}
                    value={locale}
                    onChange={(event) => setLocale(event.target.value)}
                />
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'App/Stories',
    component: RainbowFirebaseApp,
};
