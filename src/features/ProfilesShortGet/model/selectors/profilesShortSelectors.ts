import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfilesShort = (state: StateSchema) => state?.profilesShort?.data || [];
export const getProfilesShortIsLoading = (state: StateSchema) => state?.profilesShort?.isLoading || false;
export const getProfilesShortIsEmptyReciveData = (state: StateSchema) => state?.profilesShort?.isEmptyReciveData || false;
export const getProfilesShortError = (state: StateSchema) => state?.profilesShort?.error;
