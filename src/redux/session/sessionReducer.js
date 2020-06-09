import { createReducer, combineReducers } from '@reduxjs/toolkit';
import { loginSuccess, signupSuccess } from './sessionAction';

const user = createReducer(null, {
    [loginSuccess]: (state, action) => action.payload.response.user,
    [signupSuccess]: (state, action) => action.payload.response.user,
});
const authenticated = createReducer(false, {
    [loginSuccess]: () => true,
    [signupSuccess]: () => true,
});
const token = createReducer(null, {
    [loginSuccess]: (state, action) => action.payload.response.token,
    [signupSuccess]: (state, action) => action.payload.response.token,
});

const sessionReducer = combineReducers({
    user,
    authenticated,
    token,
});

export default sessionReducer;
