import { Random } from '@/shared/utils/Random';
import { LoginFormSchema } from '../types/login.types';
import { loginFormActions, loginFormReducer } from './loginSlice';

describe('loginSlice', () => {
    test('test set email', () => {
        const randStr = Random.getRandomString(10);
        const state: DeepPartial<LoginFormSchema> = { email: '' };
        const reducerData = loginFormReducer(state as LoginFormSchema, loginFormActions.setEmail(randStr));

        expect(reducerData.email).toEqual(randStr);
    });

    test('test set password', () => {
        const randStr = Random.getRandomString(10);
        const state: DeepPartial<LoginFormSchema> = { password: '' };
        const reducerData = loginFormReducer(state as LoginFormSchema, loginFormActions.setPassword(randStr));

        expect(reducerData.password).toEqual(randStr);
    });

    test('test set captcha', () => {
        const randStr = Random.getRandomString(10);
        const state: DeepPartial<LoginFormSchema> = { captcha: '' };
        const reducerData = loginFormReducer(state as LoginFormSchema, loginFormActions.setCaptcha(randStr));

        expect(reducerData.captcha).toEqual(randStr);
    });
});
