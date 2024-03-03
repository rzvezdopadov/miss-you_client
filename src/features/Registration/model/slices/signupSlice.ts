import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SignupFormSchema } from '../types/sugnup.types';
import { fetchSignup } from '../services/signup';
import { SYSTEM_CONST } from '@/app/const';
import { TimeDate } from '@/shared/utils/TimeDate';
import { Gender, GenderVapor } from '@/shared/const/profile';

const initialState: SignupFormSchema = {
    email: '',
    password: '',
    location: '',
    dayOfBirth: 32,
    monthOfBirth: 12,
    yearOfBirth: TimeDate.getYearFromAge(SYSTEM_CONST.minAge) - 1,
    gender: Gender.length,
    genderVapor: GenderVapor.length,
    captcha: '',
    isLoading: false,
};

export const signupFormSlice = createSlice({
    name: 'signupFormSlice',
    initialState,
    reducers: {
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        },
        setLocation: (state, action: PayloadAction<string>) => {
            state.location = action.payload;
        },
        setDayOfBirth: (state, action: PayloadAction<number>) => {
            state.dayOfBirth = action.payload;
        },
        setMonthOfBirth: (state, action: PayloadAction<number>) => {
            state.monthOfBirth = action.payload;
        },
        setYearOfBirth: (state, action: PayloadAction<number>) => {
            state.yearOfBirth = action.payload;
        },
        setGender: (state, action: PayloadAction<number>) => {
            state.gender = action.payload;
        },
        setGenderVapor: (state, action: PayloadAction<number>) => {
            state.genderVapor = action.payload;
        },
        setCaptcha: (state, action: PayloadAction<string>) => {
            state.captcha = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchSignup.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchSignup.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(fetchSignup.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: signupFormActions } = signupFormSlice;
export const { reducer: signupFormReducer } = signupFormSlice;
