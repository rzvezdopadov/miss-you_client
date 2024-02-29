import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginFormSchema } from '../types/login.types';
import { fetchLoginByUsername } from '../services/loginByUserName';

const initialState: LoginFormSchema = {
    email: '',
    password: '',
    captcha: '',
    isLoading: false,
};

export const loginFormSlice = createSlice({
    name: 'login/loginByUsername',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setCaptcha: (state, action: PayloadAction<string>) => {
            state.captcha = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchLoginByUsername.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchLoginByUsername.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchLoginByUsername.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: loginFormActions } = loginFormSlice;
export const { reducer: loginFormReducer } = loginFormSlice;
