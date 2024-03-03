'use client';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import axios from 'axios';
import { tokenActions } from '@/entities/Token';

interface SignupProps {
    email: string;
    password: string;
    location: string;
    dayOfBirth: number;
    monthOfBirth: number;
    yearOfBirth: number;
    gender: number;
    genderVapor: number;
    captcha: string;
}

interface Token {
    token: string;
}

export const fetchSignup = createAsyncThunk<Token, SignupProps, ThunkConfig<string>>('fetchSignup', async (signupData: SignupProps, thunkApi) => {
    const { extra, dispatch, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.post<Token>('auth/signup', signupData);

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
});

export type SignupAction = ReturnType<typeof fetchSignup>;
