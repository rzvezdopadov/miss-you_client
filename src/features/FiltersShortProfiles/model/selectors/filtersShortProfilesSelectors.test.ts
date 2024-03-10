import { StateSchema } from '@/app/providers/StoreProvider';
import { getFiltersShortProfiles, getFiltersShortProfilesIsLoading, getFiltersShortProfilesError } from './filtersShortProfilesSelectors';
import { initialState } from '../slices/filtersShortProfilesSlice';
import { Filters } from '../types/filtersShortProfiles.types';

describe('getFiltersShortProfiles', () => {
    test('should return value', () => {
        const state: DeepPartial<StateSchema> = {
            filtersShortProfiles: initialState,
        };
        const payload = getFiltersShortProfiles(state as StateSchema);

        for (const key in initialState.data) {
            expect(payload[key as keyof Filters]).toEqual(initialState.data[key as keyof Filters]);
        }
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        const payload = getFiltersShortProfiles(state as StateSchema);

        for (const key in initialState.data) {
            expect(payload[key as keyof Filters]).toEqual(initialState.data[key as keyof Filters]);
        }
    });
});

describe('getFiltersShortProfilesIsLoading', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            filtersShortProfiles: {
                isLoading: true,
            },
        };

        expect(getFiltersShortProfilesIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getFiltersShortProfilesIsLoading(state as StateSchema)).toEqual(false);
    });
});

describe('getFiltersShortProfilesError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            filtersShortProfiles: {
                error: 'request error',
            },
        };

        expect(getFiltersShortProfilesError(state as StateSchema)).toEqual('request error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};

        expect(getFiltersShortProfilesError(state as StateSchema)).toEqual(undefined);
    });
});
