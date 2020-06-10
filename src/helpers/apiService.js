import axios from 'axios';

export const fetch = axios.create({
    baseURL: 'https://goit-phonebook-api.herokuapp.com',
    timeout: 10000,
});

export const setAuthToken = (token, headers) => {
    const auth = { Authorization: `Bearer ${token}` };
    const newHeaders = headers ? { ...auth, ...headers } : auth;
    return { headers: newHeaders };
};
