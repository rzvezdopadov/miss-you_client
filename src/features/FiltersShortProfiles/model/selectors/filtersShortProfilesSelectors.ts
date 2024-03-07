import { StateSchema } from '@/app/providers/StoreProvider';
import { initialState } from '../slices/filtersShortProfilesSlice';

export const getFiltersShortProfiles = (state: StateSchema) => state?.filtersShortProfiles?.data || initialState.data;
export const getFiltersShortProfilesIsLoading = (state: StateSchema) => state?.filtersShortProfiles?.isLoading || false;
export const getFiltersShortProfilesError = (state: StateSchema) => state?.filtersShortProfiles?.error;
