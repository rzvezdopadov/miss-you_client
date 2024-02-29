import { StateSchema } from '@/app/providers/StoreProvider';

export const getLoginFormEmail = (state: StateSchema) => state?.loginForm?.email || '';
export const getLoginFormPassword = (state: StateSchema) => state?.loginForm?.password || '';
export const getLoginFormCaptcha = (state: StateSchema) => state?.loginForm?.captcha || '';
export const getLoginFormIsLoading = (state: StateSchema) => state?.loginForm?.isLoading || false;
export const getLoginFormError = (state: StateSchema) => state?.loginForm?.error;
