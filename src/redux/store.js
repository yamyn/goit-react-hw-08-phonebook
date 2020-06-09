import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';

import contactsListReducer from './contacts/contactsReducer';
import alertReducer from './alert/alertReducer';
import sessionReducer from './session/sessionReducer';

import validation from './middleware/validation';
import errorHandler from './middleware/errorHandler';

const store = configureStore({
    reducer: {
        contactsList: contactsListReducer,
        alert: alertReducer,
        session: sessionReducer,
    },
    middleware: [...getDefaultMiddleware(), errorHandler, validation],
});

export default store;
