import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Select } from 'react-rainbow-components';
import { FormattedMessage } from 'react-intl';
import RainbowFirebaseApp from '../../src/components/App';
import app from '../../../../firebase';

const stories = storiesOf('App/Stories/I18n', module);
const translations = {
    en: {
        hello: 'Hello World!',
    },
    es: {
        hello: 'Hola Mundo!',
    },
};
const languages = [
    { value: 'en', label: 'English' },
    { value: 'es', label: 'Spanish' },
];

stories.add('support for english/spanish translations', () => {
    const [locale, setLocale] = useState('en');
    const Content = () => {
        return (
            <div>
                <Select
                    options={languages}
                    value={locale}
                    onChange={(event) => setLocale(event.target.value)}
                />
                <FormattedMessage defaultMessage="Hello World!" id="hello" />
            </div>
        );
    };
    return (
        <RainbowFirebaseApp app={app} translations={translations} locale={locale}>
            <Content />
        </RainbowFirebaseApp>
    );
});
