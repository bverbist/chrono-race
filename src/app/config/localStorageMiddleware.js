/* global window */

const STORAGE_KEY = 'CHRONO_RACE';

const createMiddleware = () =>
    store => next => action => {
        const r = next(action);
        saveStore(store);
        return r;
    };

const getStore = () =>
    readStore();

const destroyStore = () =>
    window.localStorage.removeItem(STORAGE_KEY);

export default {
    createMiddleware,
    getStore,
    destroyStore
};

function saveStore(store) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store.getState()));
}

function readStore() {
    return JSON.parse(window.localStorage.getItem(STORAGE_KEY)) || {};
}
