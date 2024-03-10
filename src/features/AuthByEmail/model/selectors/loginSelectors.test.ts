import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginFormCaptcha, getLoginFormEmail, getLoginFormError, getLoginFormIsLoading, getLoginFormPassword } from './loginSelectors';
import { Random } from '@/shared/utils/Random';

describe('getLoginFormEmail', () => {
    test('should return value', () => {
        const randStr = Random.getRandomString(10);
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                email: randStr,
            },
        };
        expect(getLoginFormEmail(state as StateSchema)).toEqual(randStr);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginFormEmail(state as StateSchema)).toEqual('');
    });
});

describe('getLoginFormPassword', () => {
    test('should return value', () => {
        const randStr = Random.getRandomString(10);
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                password: randStr,
            },
        };
        expect(getLoginFormPassword(state as StateSchema)).toEqual(randStr);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginFormPassword(state as StateSchema)).toEqual('');
    });
});

describe('getLoginFormCaptcha', () => {
    test('should return value', () => {
        const randStr = Random.getRandomString(10);
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                captcha: randStr,
            },
        };
        expect(getLoginFormCaptcha(state as StateSchema)).toEqual(randStr);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginFormCaptcha(state as StateSchema)).toEqual('');
    });
});

describe('getLoginFormIsLoading', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                isLoading: true,
            },
        };
        expect(getLoginFormIsLoading(state as StateSchema)).toEqual(true);
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginFormIsLoading(state as StateSchema)).toEqual(false);
    });
});

describe('getLoginFormError', () => {
    test('should return error', () => {
        const state: DeepPartial<StateSchema> = {
            loginForm: {
                error: 'request error',
            },
        };
        expect(getLoginFormError(state as StateSchema)).toEqual('request error');
    });
    test('should work with empty state', () => {
        const state: DeepPartial<StateSchema> = {};
        expect(getLoginFormError(state as StateSchema)).toEqual(undefined);
    });
});
