import { fetch, setAuthToken } from '../../helpers/apiService';
import { getToken } from './sessionSelectors';

import {
    loginStart,
    loginSuccess,
    loginError,
    signupStart,
    signupSuccess,
    signupError,
    logout,
    refreshUserStart,
    refreshUserSuccess,
    refreshUserError,
} from './sessionAction';

export const login = credentials => dispatch => {
    dispatch(loginStart());

    fetch
        .post('/users/login', credentials)
        .then(response => dispatch(loginSuccess(response.data)))
        .catch(error => dispatch(loginError(error)));
};

export const signup = credentials => dispatch => {
    dispatch(signupStart());

    fetch
        .post('/users/signup', credentials)
        .then(response => dispatch(signupSuccess(response.data)))
        .catch(error => dispatch(signupError(error)));
};

export const logOut = () => (dispatch, getState) => {
    dispatch(logout());
    const token = getToken(getState());
    if (!token) {
        return;
    }

    fetch.post('/users/logout', setAuthToken(token));
};

export const refreshUser = () => (dispatch, getState) => {
    dispatch(refreshUserStart());
    const token = getToken(getState());
    if (!token) {
        return;
    }

    fetch
        .get('/users/current', setAuthToken(token))
        .then(response => dispatch(refreshUserSuccess(response.data)))
        .catch(error => dispatch(refreshUserError(error)));
};

// export const deleteContacts = id => dispatch => {
//     dispatch(deleteContactStart());

//     fetch
//         .delete(`/${id}`)
//         .then(() => dispatch(deleteContactSuccess(id)))
//         .catch(error => dispatch(deleteContactError(error)));
// };

// export const addContact = contact => dispatch => {
//     dispatch(addContactStart());

//     fetch
//         .post('', contact)
//         .then(response => dispatch(addContactSuccess(response.data)))
//         .catch(error => dispatch(addContactError(error)));
// };

// export const fetchContacts = () => dispatch => {
//     dispatch(loadContactsStart());

//     fetch
//         .get()
//         .then(response => dispatch(loadContactsSuccess(response.data)))
//         .catch(error => dispatch(loadContactsError(error)));
// };

// export const deleteContacts = id => dispatch => {
//     dispatch(deleteContactStart());

//     fetch
//         .delete(`/${id}`)
//         .then(() => dispatch(deleteContactSuccess(id)))
//         .catch(error => dispatch(deleteContactError(error)));
// };

// export const addContact = contact => dispatch => {
//     dispatch(addContactStart());

//     fetch
//         .post('', contact)
//         .then(response => dispatch(addContactSuccess(response.data)))
//         .catch(error => dispatch(addContactError(error)));
// };
