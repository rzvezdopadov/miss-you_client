import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import axios from 'axios';
import { Towns } from '../types/towns.types';

export interface TownsProps {}

export const fetchTowns = createAsyncThunk<Towns, TownsProps, ThunkConfig<TownsProps>>('towns', async (townsData: TownsProps, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Towns>('towns', townsData);

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
