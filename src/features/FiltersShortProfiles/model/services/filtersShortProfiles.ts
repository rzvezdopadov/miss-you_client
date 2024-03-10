import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import axios from 'axios';
import { Filters } from '../types/filtersShortProfiles.types';

export const fetchFiltersShortProfiles = createAsyncThunk<Filters, unknown, ThunkConfig<string>>('fetchFiltersShortProfiles', async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Filters>('profile/filters');

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e)) return rejectWithValue(e.message);

        return rejectWithValue('request error');
    }
});
