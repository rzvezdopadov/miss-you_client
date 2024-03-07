import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FiltersShortProfilesSchema, Filters } from '../types/filtersShortProfiles.types';
import { fetchFiltersShortProfiles } from '../services/filtersShortProfiles';
import { SYSTEM_CONST } from '@/app/const';
import { GenderVapor } from '@/shared/const/profile';

export const initialState: FiltersShortProfilesSchema = {
    data: {
        location: '',
        ageStart: SYSTEM_CONST.minAge,
        ageEnd: SYSTEM_CONST.maxAge,
        growthStart: SYSTEM_CONST.minGrowth,
        growthEnd: SYSTEM_CONST.maxGrowth,
        genderVapor: GenderVapor[GenderVapor.length - 1].value,
        signZodiac: 0,
        weight: 0,
        education: 0,
        fieldOfActivity: 0,
        maritalStatus: 0,
        childrens: 0,
        religion: 0,
        smoke: 0,
        alcohol: 0,
        profit: 0,
    },
    isLoading: false,
    error: undefined,
};

export const filtersShortProfilesSlice = createSlice({
    name: 'filtersShortProfilesSlice',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<Filters>) => {
            state.data = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFiltersShortProfiles.pending, (state) => {
                state.isLoading = true;
                state.error = undefined;
            })
            .addCase(fetchFiltersShortProfiles.fulfilled, (state, action: PayloadAction<Filters>) => {
                state.isLoading = false;
                state.data = action.payload;
            })
            .addCase(fetchFiltersShortProfiles.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload as string;
            });
    },
});

export const { actions: filtersShortProfilesActions } = filtersShortProfilesSlice;
export const { reducer: filtersShortProfilesReducer } = filtersShortProfilesSlice;
