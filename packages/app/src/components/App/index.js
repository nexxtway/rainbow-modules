import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Application from 'react-rainbow-components/components/Application';
import { FirebaseProvider } from 'rainbow-firebase-hooks';
import ReduxContainer from '../ReduxContainer';
import I18nContainer from '../I18nContainer';
import AppSpinner from '../AppSpinner';
import { updateAppActions } from '../../actions';

const RainbowFirebaseApp = (props) => {
    const { app, theme, locale, translations, children, reducers } = props;
    const firebaseContext = useMemo(() => ({ app }), [app]);
    const [isLoading, setLoading] = useState(false);
    
    useEffect(() => {
        updateAppActions({
            setLoading,
        });
    }, []);

    return (
        <ReduxContainer reducers={reducers}>
            <FirebaseProvider value={firebaseContext}>
                <I18nContainer locale={locale} messages={translations[locale]}>
                    <Application theme={theme} locale={locale}>
                        {children}
                        <AppSpinner isLoading={isLoading} />
                    </Application>
                </I18nContainer>
            </FirebaseProvider>
        </ReduxContainer>
    );
};

RainbowFirebaseApp.propTypes = {
    app: PropTypes.object.isRequired,
    theme: PropTypes.object,
    locale: PropTypes.string,
    translations: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    reducers: PropTypes.object,
};

RainbowFirebaseApp.defaultProps = {
    theme: undefined,
    locale: undefined,
    translations: {},
    children: null,
    reducers: {},
};

export default RainbowFirebaseApp;
