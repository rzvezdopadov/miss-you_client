import { fetchProfilesShort } from './model/services/profilesShort';
import {
    getProfilesShort,
    getProfilesShortIsEmptyReciveData,
    getProfilesShortError,
    getProfilesShortIsLoading,
} from './model/selectors/profilesShortSelectors';
import { profilesShortActions, profilesShortReducer } from './model/slices/profilesShortSlice';
import { ProfileShort, ProfilesShortSchema, ProfilesShort } from './model/types/profilesShort.types';

export {
    fetchProfilesShort,
    getProfilesShort,
    getProfilesShortError,
    getProfilesShortIsLoading,
    getProfilesShortIsEmptyReciveData,
    profilesShortReducer,
    profilesShortActions,
};
export type { ProfilesShortSchema, ProfileShort, ProfilesShort };
