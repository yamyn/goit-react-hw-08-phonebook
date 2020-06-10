import { createAction } from '@reduxjs/toolkit';

// export const loginRequest = () => ({
//     type: ActionType.LOGIN_REQUEST,
// });

// export const loginSuccess = response => ({
//     type: ActionType.LOGIN_SUCCESS,
//     payload: { response },
// });

// export const loginError = error => ({
//     type: ActionType.LOGIN_ERROR,
//     payload: { error },
// });

export const loginStart = createAction('LOGIN/START');

export const loginSuccess = createAction('LOGIN/SUCCESS', response => ({
    payload: { response },
}));

export const loginError = createAction('LOGIN/ERROR', error => ({
    payload: { message: error.message },
    meta: { error: true },
}));

export const signupStart = createAction('SIGNUP/START');

export const signupSuccess = createAction('SIGNUP/SUCCESS', response => ({
    payload: { response },
}));

export const signupError = createAction('SIGNUP/ERROR', error => ({
    payload: { message: error.message },
    meta: { error: true },
}));

export const refreshUserStart = createAction('REFRESHUSER/START');

export const refreshUserSuccess = createAction('REFRESHUSER/SUCCESS', user => ({
    payload: { user },
}));

export const refreshUserError = createAction('REFRESHUSER/ERROR', error => ({
    payload: { message: error.message },
    meta: { error: true },
}));

export const logout = createAction('LOGOUT');
