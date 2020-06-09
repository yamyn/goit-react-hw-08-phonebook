import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    deleteContactSuccess,
    loadContactsSuccess,
    changeFilter,
    addContactSuccess,
} from './contactsActions';

const contacts = createReducer([], {
    [loadContactsSuccess]: (state, action) => action.payload.contacts,
    [addContactSuccess]: (state, action) => [...state, action.payload.contact],
    [deleteContactSuccess]: (state, action) =>
        state.filter(({ id }) => id !== action.payload.id),
});

const filter = createReducer('', {
    [changeFilter]: (state, action) => action.payload.filter,
    [deleteContactSuccess]: () => '',
});

const contactsListReducer = combineReducers({
    contacts,
    filter,
});

export default contactsListReducer;
