import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { TownsSchema } from '../types/towns.types';
import { fetchTowns } from '../services/towns';

const initialState: TownsSchema = {
    data: [],
    isLoading: false,
    error: undefined,
};

export const townsSlice = createSlice({
    name: 'towns/Towns',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchTowns.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchTowns.fulfilled, (state, action: PayloadAction<string[]>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchTowns.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: townsActions } = townsSlice;
export const { reducer: townsReducer } = townsSlice;
