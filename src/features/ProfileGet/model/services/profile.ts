import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import axios from 'axios';
import { Profile } from '../types/profile.types';

export const fetchProfile = createAsyncThunk<Profile, string, ThunkConfig<string>>('fetchProfile', async (userId: string, thunkApi) => {
    const { extra, rejectWithValue } = thunkApi;

    try {
        const response = await extra.api.get<Profile>(`profiles/full`, {
            params: { userId },
        });

        if (!response.data) {
            throw new Error();
        }

        return response.data;
    } catch (e) {
        if (axios.isAxiosError(e)) return rejectWithValue(e.message);

        return rejectWithValue('error');
    }
});
