import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import Application from 'react-rainbow-components/components/Application';
import { FirebaseProvider } from '@rainbow-modules/firebase-hooks';
import ReduxContainer from '../ReduxContainer';
import I18nContainer from '../I18nContainer';
import AppSpinner from '../AppSpinner';
import AppMessage from '../AppMessage';
import { updateAppActions } from '../../actions';

const RainbowFirebaseApp = (props) => {
    const { app, theme, locale, translations, children, reducers } = props;
    const firebaseContext = useMemo(() => ({ app }), [app]);
    const [isLoading, setLoading] = useState(false);
    const [isMessageVisible, setIsMessageVisible] = useState(false);
    const [messageParams, setMessageParams] = useState({});

    useEffect(() => {
        updateAppActions({
            setLoading,
            setIsMessageVisible,
            setMessageParams,
        });
    }, []);

    return (
        <ReduxContainer reducers={reducers}>
            <FirebaseProvider value={firebaseContext}>
                <I18nContainer locale={locale} messages={translations[locale]}>
                    <Application theme={theme} locale={locale}>
                        <BrowserRouter>{children}</BrowserRouter>
                        <AppSpinner isLoading={isLoading} />
                        <AppMessage
                            isVisible={isMessageVisible}
                            onHideMessage={() => setIsMessageVisible(false)}
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...messageParams}
                        />
                    </Application>
                </I18nContainer>
            </FirebaseProvider>
        </ReduxContainer>
    );
};

RainbowFirebaseApp.propTypes = {
    /** The firebase app instance already initialized. */
    app: PropTypes.object.isRequired,
    /** The react-rainbow-components theme object. By default will use react-rainbow-components
     * default theme */
    theme: PropTypes.object,
    /** The application language tag or locale identifier */
    locale: PropTypes.string,
    /** The translation object used by react-intl to resolve proper translations
     * of FormmatedMessage components */
    translations: PropTypes.object,
    /** Object with your application Redux reducers. */
    reducers: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

RainbowFirebaseApp.defaultProps = {
    theme: undefined,
    locale: undefined,
    translations: {},
    children: null,
    reducers: {},
};

export default RainbowFirebaseApp;
