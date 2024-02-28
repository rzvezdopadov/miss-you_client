import axios from 'axios';
import { API_URL } from '../const/api';
import { LOCAL_STORAGE_TOKEN_KEY } from '../const/LocalStorageKey';

export const $api = axios.create({
    baseURL: API_URL,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.Authorization = `Bearer ` + (localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || '');
    }

    return config;
});
