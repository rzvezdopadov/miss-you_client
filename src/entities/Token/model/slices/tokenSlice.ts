'use client';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TokenSchema } from '../types/token.types';
import { LOCAL_STORAGE_TOKEN_KEY } from '@/shared/const/LocalStorageKey';

let tokenInit = '';

if (typeof window !== 'undefined') {
    tokenInit = localStorage?.getItem(LOCAL_STORAGE_TOKEN_KEY) || '';
}

const initialState: TokenSchema = {
    token: tokenInit,
};

export const tokenSlice = createSlice({
    name: 'token',
    initialState,
    reducers: {
        setToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload;
            if (action.payload) localStorage?.setItem(LOCAL_STORAGE_TOKEN_KEY, action.payload);
        },
    },
});

export const { actions: tokenActions } = tokenSlice;
export const { reducer: tokenReducer } = tokenSlice;
