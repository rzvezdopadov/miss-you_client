import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProfilesShort, ProfilesShortSchema } from '../types/profilesShort.types';
import { fetchProfilesShort } from '../services/profilesShort';

const initialState: ProfilesShortSchema = {
    data: [],
    isLoading: false,
    isEmptyReciveData: false,
    error: undefined,
};

export const profilesShortSlice = createSlice({
    name: 'profilesShortSlice',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<[]>) => {
            state.data = action.payload;
            state.isEmptyReciveData = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfilesShort.pending, (state) => {
                state.isLoading = true;
                state.isEmptyReciveData = false;
                state.error = undefined;
            })
            .addCase(fetchProfilesShort.fulfilled, (state, action: PayloadAction<ProfilesShort>) => {
                state.isLoading = false;
                state.isEmptyReciveData = action.payload.length ? false : true;
                state.data = [...state.data, ...action.payload];
            })
            .addCase(fetchProfilesShort.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: profilesShortActions } = profilesShortSlice;
export const { reducer: profilesShortReducer } = profilesShortSlice;
