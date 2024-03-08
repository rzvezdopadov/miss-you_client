import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfile = (state: StateSchema) => state?.profile?.data || {};
export const getProfileIsLoading = (state: StateSchema) => state?.profile?.isLoading || false;
export const getProfileError = (state: StateSchema) => state?.profile?.error;
