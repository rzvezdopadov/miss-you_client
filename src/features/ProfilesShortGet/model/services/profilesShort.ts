import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import axios from 'axios';
import { FiltersProps, ProfilesShort } from '../types/profilesShort.types';

type QueryLink = 'profiles/short';

interface ProfilesShortProps {
    queryType: QueryLink;
    filters: FiltersProps;
}

export const fetchProfilesShort = createAsyncThunk<ProfilesShort, ProfilesShortProps, ThunkConfig<string>>(
    'fetchProfilesShort',
    async (profilesShortData: ProfilesShortProps, thunkApi) => {
        const { extra, rejectWithValue } = thunkApi;

        try {
            const response = await extra.api.get<ProfilesShort>(profilesShortData.queryType, {
                params: profilesShortData.filters,
            });

            if (!response.data) {
                throw new Error();
            }

            return response.data;
        } catch (e) {
            if (axios.isAxiosError(e)) return rejectWithValue(e.message);

            return rejectWithValue('error');
        }
    },
);
