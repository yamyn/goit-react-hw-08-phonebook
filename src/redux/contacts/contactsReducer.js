import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    deleteContactSuccess,
    loadContactsSuccess,
    changeFilter,
    addContactSuccess,
} from './contactsActions';

import { logout } from '../session/sessionAction';

const contacts = createReducer([], {
    [loadContactsSuccess]: (state, action) => action.payload.contacts,
    [addContactSuccess]: (state, action) => [...state, action.payload.contact],
    [deleteContactSuccess]: (state, action) =>
        state.filter(({ id }) => id !== action.payload.id),
    [logout]: () => [],
});

const filter = createReducer('', {
    [changeFilter]: (state, action) => action.payload.filter,
    [deleteContactSuccess]: () => '',
    [logout]: () => '',
});

const contactsListReducer = combineReducers({
    contacts,
    filter,
});

export default contactsListReducer;
