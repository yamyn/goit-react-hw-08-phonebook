import { createAction } from '@reduxjs/toolkit';

export const loadContactsStart = createAction('LOADCONTACTS/START');

export const loadContactsSuccess = createAction(
    'LOADCONTACTS/SUCCESS',
    contacts => ({
        payload: { contacts },
    }),
);

export const loadContactsError = createAction('LOADCONTACTS/ERROR', error => ({
    payload: { message: error.message },
    meta: { error: true },
}));

export const addContactValid = createAction('ADDCONTACT/START', contact => ({
    payload: { contact },
    meta: { addContact: true },
}));

export const addContactStart = createAction('ADDCONTACT/START');

export const addContactSuccess = createAction(
    'ADDCONTACT/SUCCESS',
    contact => ({
        payload: { contact },
    }),
);

export const addContactError = createAction('ADDCONTACT/ERROR', error => ({
    payload: { message: error.message },
    meta: { error: true },
}));

export const deleteContactStart = createAction('DELETECONTACT/START');

export const deleteContactSuccess = createAction(
    'DELETECONTACT/SUCCESS',
    id => ({
        payload: { id },
    }),
);

export const deleteContactError = createAction(
    'DELETECONTACT/ERROR',
    error => ({
        payload: { message: error.message },
        meta: { error: true },
    }),
);

export const changeFilter = createAction('CHANGEFILTER', filter => ({
    payload: { filter },
}));
