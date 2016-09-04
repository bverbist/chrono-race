import {createStore, applyMiddleware} from 'redux';
import localStorageMiddleware from './localStorageMiddleware';

import reducers from './reducers';
import {middlewares, sagaMiddleware} from './middlewares';
import sagas from './sagas';

const store = createStore(
    reducers,
    localStorageMiddleware.getStore(),
    applyMiddleware(...middlewares)
);

sagaMiddleware.run(sagas);

export default store;
