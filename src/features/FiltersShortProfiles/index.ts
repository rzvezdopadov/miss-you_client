import {
    getFiltersShortProfiles,
    getFiltersShortProfilesIsLoading,
    getFiltersShortProfilesError,
} from './model/selectors/filtersShortProfilesSelectors';
import { fetchFiltersShortProfiles } from './model/services/filtersShortProfiles';
import { filtersShortProfilesActions, filtersShortProfilesReducer } from './model/slices/filtersShortProfilesSlice';
import { FiltersShortProfilesSchema } from './model/types/filtersShortProfiles.types';
import { FiltersShortProfiles } from './ui/FiltersShortProfiles';

export {
    getFiltersShortProfiles,
    getFiltersShortProfilesIsLoading,
    getFiltersShortProfilesError,
    FiltersShortProfiles,
    filtersShortProfilesReducer,
    filtersShortProfilesActions,
    fetchFiltersShortProfiles,
};
export type { FiltersShortProfilesSchema };
