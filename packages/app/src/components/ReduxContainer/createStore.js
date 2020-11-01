import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

export default function (reducers, middlewares) {
    return createStore(
        combineReducers({
            ...reducers,
            form: formReducer,
        }),
        applyMiddleware(thunk, ...middlewares),
    );
}
