'use client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import axios from 'axios';
import { tokenActions } from '@/entities/Token';

interface LoginByUsernameProps {
    email: string;
    password: string;
    captcha: string;
}

interface Token {
    token: string;
}

export const fetchLoginByUsername = createAsyncThunk<Token, LoginByUsernameProps, ThunkConfig<string>>(
    'loginByUsername',
    async (authData: LoginByUsernameProps, thunkApi) => {
        const { extra, dispatch, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.post<Token>('auth/login', authData);

            if (!response.data) {
                throw new Error();
            }

            const { token } = response.data;

            dispatch(tokenActions.setToken(token));
            return response.data;
        } catch (e) {
            if (axios.isAxiosError(e)) return rejectWithValue(e.response?.data.message);

            return rejectWithValue('request error');
        }
    },
);

export type LoginByUsernameAction = ReturnType<typeof fetchLoginByUsername>;
