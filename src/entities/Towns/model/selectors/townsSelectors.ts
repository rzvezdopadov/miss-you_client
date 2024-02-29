import { StateSchema } from '@/app/providers/StoreProvider';

export const getTowns = (state: StateSchema) => state?.towns?.data || [];
export const getTownsIsLoading = (state: StateSchema) => state?.towns?.isLoading || false;
export const getTownsError = (state: StateSchema) => state?.towns?.error;
