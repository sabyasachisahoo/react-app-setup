import React from 'react';
import ReactDOM from 'react-dom'
import App from './components/App';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger'
import rootReducer from './reducers/index'
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    applyMiddleware(thunkMiddleware, logger, sagaMiddleware ));

sagaMiddleware.run(rootSaga);

ReactDOM.render( <Provider store={store}>
                <App/>
            </Provider>,  document.getElementById('root'));