import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import Application from 'react-rainbow-components/components/Application';
import RenderIf from 'react-rainbow-components/components/RenderIf';
import { FirebaseProvider } from '@rainbow-modules/firebase-hooks';
import ReduxContainer from '../ReduxContainer';
import I18nContainer from '../I18nContainer';
import AppSpinner from '../AppSpinner';
import AppMessage from '../AppMessage';
import ConfirmModal from '../ConfirmModal';
import { updateAppActions } from '../../actions';
import getBrowserLocale from '../../helpers/getBrowserLocale';

const RainbowFirebaseApp = (props) => {
    const { app, theme, locale, translations, children, reducers, initialize } = props;
    const firebaseContext = useMemo(() => ({ app }), [app]);
    const [isLoading, setLoading] = useState(false);
    const [isMessageVisible, setIsMessageVisible] = useState(false);
    const [isConfirmModalVisible, setIsConfirmModalVisible] = useState(false);
    const [messageParams, setMessageParams] = useState({});
    const [confirmModalParams, setConfirmModalParams] = useState({});
    const [isInitializing, setIsInitializing] = useState(true);
    const applicationLocale = locale || getBrowserLocale();

    useEffect(() => {
        updateAppActions({
            setLoading,
            setIsMessageVisible,
            setMessageParams,
            setIsConfirmModalVisible,
            setConfirmModalParams,
        });
    }, []);

    useEffect(() => {
        async function initializeApp() {
            if (initialize) {
                setLoading(true);
                await initialize();
                setLoading(false);
            }
            setIsInitializing(false);
        }
        initializeApp();
    }, []);

    return (
        <ReduxContainer reducers={reducers}>
            <FirebaseProvider value={firebaseContext}>
                <I18nContainer
                    locale={applicationLocale}
                    messages={translations[applicationLocale]}
                >
                    <Application theme={theme} locale={applicationLocale}>
                        <RenderIf isTrue={!isInitializing}>
                            <BrowserRouter>{children}</BrowserRouter>
                        </RenderIf>
                        <AppSpinner isLoading={isLoading} />
                        <AppMessage
                            isVisible={isMessageVisible}
                            onHideMessage={() => setIsMessageVisible(false)}
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...messageParams}
                        />
                        <ConfirmModal
                            isOpen={isConfirmModalVisible}
                            // eslint-disable-next-line react/jsx-props-no-spreading
                            {...confirmModalParams}
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
    /** An async function to initialize the app. AppSpiner will be visible while this function is running. */
    initialize: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

RainbowFirebaseApp.defaultProps = {
    theme: undefined,
    locale: undefined,
    translations: {},
    children: null,
    reducers: {},
    initialize: undefined,
};

export default RainbowFirebaseApp;
