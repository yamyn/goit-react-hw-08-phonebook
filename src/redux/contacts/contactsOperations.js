import { fetch, setAuthToken } from '../../helpers/apiService';
import { getToken } from '../session/sessionSelectors';

import {
    loadContactsStart,
    loadContactsSuccess,
    loadContactsError,
    addContactStart,
    addContactSuccess,
    addContactError,
    deleteContactStart,
    deleteContactSuccess,
    deleteContactError,
} from './contactsActions';
const prefix = '/contacts';

export const fetchContacts = () => (dispatch, getState) => {
    const token = getToken(getState());
    if (!token) {
        return;
    }

    dispatch(loadContactsStart());

    fetch
        .get(prefix, setAuthToken(token))
        .then(response => dispatch(loadContactsSuccess(response.data)))
        .catch(error => dispatch(loadContactsError(error)));
};

export const deleteContacts = id => (dispatch, getState) => {
    const token = getToken(getState());
    if (!token) {
        return;
    }

    dispatch(deleteContactStart());

    fetch
        .delete(`${prefix}/${id}`, setAuthToken(token))
        .then(() => dispatch(deleteContactSuccess(id)))
        .catch(error => dispatch(deleteContactError(error)));
};

export const addContact = contact => (dispatch, getState) => {
    const token = getToken(getState());
    if (!token) {
        return;
    }

    dispatch(addContactStart());

    fetch
        .post(prefix, contact, setAuthToken(token))
        .then(response => dispatch(addContactSuccess(response.data)))
        .catch(error => dispatch(addContactError(error)));
};
