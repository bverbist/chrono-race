import createLogger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import localStorageMiddleware from './localStorageMiddleware';

export const sagaMiddleware = createSagaMiddleware();

const loggerMiddleware = createLogger({
    level: 'trace', // 'trace' so that not shown for default karma 'info' level
    collapsed: true
});

export const middlewares = [
    sagaMiddleware,
    localStorageMiddleware.createMiddleware(),
    loggerMiddleware
];
