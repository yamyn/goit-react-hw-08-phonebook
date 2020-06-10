import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import contactsListReducer from './contacts/contactsReducer';
import alertReducer from './alert/alertReducer';
import sessionReducer from './session/sessionReducer';

import validation from './middleware/validation';
import errorHandler from './middleware/errorHandler';

const persistConfig = {
    key: 'session',
    storage,
    whitelist: ['token'],
};

const persistedReducer = persistReducer(persistConfig, sessionReducer);

export const store = configureStore({
    reducer: {
        contactsList: contactsListReducer,
        alert: alertReducer,
        session: persistedReducer,
    },
    middleware: [...getDefaultMiddleware(), errorHandler, validation],
});

export const persistor = persistStore(store);
