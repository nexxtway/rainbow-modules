import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Button, Card } from 'react-rainbow-components';
import { useDispatch, useSelector } from 'react-redux';
import { w3cwebsocket as W3CWebSocket } from 'websocket';
import app from '../../../../firebase';
import RainbowFirebaseApp from '../../src/components/App';

const getIndicatorColor = (props) => {
    if (props.isConnected) return props.palette.success.main;
    return props.palette.error.main;
};

const Container = styled.div`
    padding: 72px;
`;

const ConnectionStatus = styled.div.attrs((props) => props.theme.rainbow)`
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 0.875rem;
    background: ${(props) => getIndicatorColor(props)};
`;

class SocketConnection {
    constructor() {
        this.socket = null;
    }

    connect(endpoint, handlers) {
        const { onConnect, onDisconnect, onError, onMessage } = handlers;
        if (this.isConnected()) {
            this.socket.close();
        }
        this.socket = W3CWebSocket(endpoint);
        this.socket.onopen = onConnect;
        this.socket.onerror = onError;
        this.socket.onclose = onDisconnect;
        this.socket.onmessage = onMessage;
    }

    disconnect() {
        if (this.isConnected()) {
            this.socket.close();
        }
        this.socket = null;
    }

    send(data) {
        if (this.isConnected()) {
            this.socket.send(data);
        }
    }

    isConnected() {
        return this.socket !== null;
    }
}

export const appWithReduxMiddleware = () => {
    const init = { isConnected: false, isBussy: false };
    const websocketReducer = (state = init, action) => {
        switch (action.type) {
            case 'CONNECTING':
                return {
                    ...init,
                    isBussy: true,
                };
            case 'CONNECTED':
                return {
                    ...init,
                    isConnected: true,
                };
            case 'DISCONNECTING':
                return {
                    ...state,
                    isBussy: true,
                };
            case 'DISCONNECTED':
                return {
                    ...init,
                };
            default:
                return state;
        }
    };

    const websocketMiddleware = () => {
        const socket = new SocketConnection();

        const onSocketConnect = (store) => () => {
            store.dispatch({ type: 'CONNECTED' });
        };

        const onSocketClose = (store) => () => {
            store.dispatch({ type: 'DISCONNECTED' });
        };

        const onError = (store) => () => {
            store.dispatch({ type: 'DISCONNECTED' });
        };

        // eslint-disable-next-line consistent-return
        return (store) => (next) => (action) => {
            switch (action.type) {
                case 'CONNECT':
                    if (socket.isConnected()) {
                        socket.disconnect();
                    }
                    store.dispatch({ type: 'CONNECTING' });
                    socket.connect(action.host, {
                        onConnect: onSocketConnect(store),
                        onDisconnect: onSocketClose(store),
                        onError: onError(store),
                    });
                    break;
                case 'DISCONNECT':
                    if (socket.isConnected()) {
                        store.dispatch({ type: 'DISCONNECTING' });
                        socket.disconnect();
                    }
                    break;
                default:
                    return next(action);
            }
        };
    };

    const reducers = { websocketReducer };
    const middlewares = [websocketMiddleware()];

    // eslint-disable-next-line react/prop-types
    const ServerCard = ({ host }) => {
        const { isConnected, isBussy } = useSelector((state) => state.websocketReducer);
        const dispatch = useDispatch();

        const handleClick = useCallback(() => {
            if (isConnected) {
                return dispatch({ type: 'DISCONNECT', host });
            }
            return dispatch({ type: 'CONNECT', host });
        }, [dispatch, host, isConnected]);

        const buttonLabel = isConnected ? 'Disconnect' : 'Connect';
        return (
            <Card
                icon={<ConnectionStatus isConnected={isConnected} />}
                title={host}
                isLoading={isBussy}
                actions={
                    <Button label={buttonLabel} variant="outline-brand" onClick={handleClick} />
                }
            />
        );
    };

    return (
        <RainbowFirebaseApp app={app} reducers={reducers} middlewares={middlewares}>
            <Container>
                <ServerCard host="wss://echo.websocket.org/" />
            </Container>
        </RainbowFirebaseApp>
    );
};

export default {
    title: 'Modules|App/Stories',
    component: RainbowFirebaseApp,
};
