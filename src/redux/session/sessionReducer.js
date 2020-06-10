import { createReducer, combineReducers } from '@reduxjs/toolkit';
import {
    loginSuccess,
    signupSuccess,
    logout,
    refreshUserSuccess,
} from './sessionAction';

const user = createReducer(null, {
    [loginSuccess]: (state, action) => action.payload.response.user,
    [signupSuccess]: (state, action) => action.payload.response.user,
    [refreshUserSuccess]: (state, action) => action.payload.user,
    [logout]: () => null,
});
const authenticated = createReducer(false, {
    [loginSuccess]: () => true,
    [signupSuccess]: () => true,
    [refreshUserSuccess]: () => true,
    [logout]: () => false,
});
const token = createReducer(null, {
    [loginSuccess]: (state, action) => action.payload.response.token,
    [signupSuccess]: (state, action) => action.payload.response.token,
    [logout]: () => null,
});

const sessionReducer = combineReducers({
    user,
    authenticated,
    token,
});

export default sessionReducer;
