import React, { useMemo, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { BrowserRouter } from 'react-router-dom';
import styled from 'styled-components';
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
import AppNotificationManager from '../AppNotificationManager';
import ErrorBoundary from '../ErrorBoundary';
import ErrorMessage from '../ErrorBoundary/errorMessage';

const ErrorComponentContainer = styled.div`
    height: 100vh;
`;

// eslint-disable-next-line react/prop-types
const DefaultErrorMessage = ({ errorTrace }) => {
    return (
        <ErrorComponentContainer>
            <ErrorMessage errorTrace={errorTrace} />
        </ErrorComponentContainer>
    );
};

const RainbowFirebaseApp = (props) => {
    const {
        app,
        theme,
        locale,
        translations,
        children,
        reducers,
        middlewares,
        initialize,
        spinner,
        errorComponent,
        onError,
    } = props;
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <Application theme={theme} locale={applicationLocale}>
            <ErrorBoundary component={errorComponent} onError={onError}>
                <ReduxContainer reducers={reducers} middlewares={middlewares}>
                    <FirebaseProvider value={firebaseContext}>
                        <I18nContainer
                            locale={applicationLocale}
                            messages={translations[applicationLocale]}
                        >
                            <RenderIf isTrue={!isInitializing}>
                                <BrowserRouter>{children}</BrowserRouter>
                            </RenderIf>
                            <RenderIf isTrue={isLoading}>
                                <AppSpinner spinner={spinner} />
                            </RenderIf>
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
                            <AppNotificationManager />
                        </I18nContainer>
                    </FirebaseProvider>
                </ReduxContainer>
            </ErrorBoundary>
        </Application>
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
    /** Array with your application Redux middlewares. */
    middlewares: PropTypes.array,
    /** An async function to initialize the app. AppSpiner will be visible while this function is running. */
    initialize: PropTypes.func,
    /** The spinner to show when the app is loading. */
    spinner: PropTypes.node,
    /** A component that is rendered when an error is caught */
    errorComponent: PropTypes.node,
    /** A functions that is used to manage the error that is caught */
    onError: PropTypes.func,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

RainbowFirebaseApp.defaultProps = {
    theme: undefined,
    locale: undefined,
    translations: {},
    children: null,
    spinner: null,
    reducers: {},
    middlewares: [],
    initialize: undefined,
    errorComponent: DefaultErrorMessage,
    onError: () => {},
};

export default RainbowFirebaseApp;
