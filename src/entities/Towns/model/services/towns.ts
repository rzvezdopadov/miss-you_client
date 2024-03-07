import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import axios from 'axios';
import { Towns } from '../types/towns.types';

export const fetchTowns = createAsyncThunk<Towns, unknown, ThunkConfig<string>>('towns', async (_, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Towns>('towns');

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e)) return rejectWithValue(e.message);

        return rejectWithValue('error');
    }
});

export type TownsAction = ReturnType<typeof fetchTowns>;
