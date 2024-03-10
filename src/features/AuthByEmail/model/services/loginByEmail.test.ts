import { fetchLoginByEmail } from './loginByEmail';
import { TestAsyncThunk } from '@/shared/lib/test/TestAsyncThunk/TestAsyncThunk';

describe('loginByEmail', () => {
    test('success', async () => {
        const token = { token: `455652152` };

        const thunk = new TestAsyncThunk(fetchLoginByEmail);
        thunk.api.post.mockReturnValue(Promise.resolve({ data: token }));
        const result = await thunk.callThunk({
            email: '123',
            password: '123',
            captcha: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(3);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('fulfilled');
        expect(result.payload).toEqual(token);
    });

    test('error', async () => {
        const thunk = new TestAsyncThunk(fetchLoginByEmail);
        thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }));
        const result = await thunk.callThunk({
            email: '123',
            password: '123',
            captcha: '123',
        });

        expect(thunk.dispatch).toHaveBeenCalledTimes(2);
        expect(thunk.api.post).toHaveBeenCalled();
        expect(result.meta.requestStatus).toBe('rejected');
        expect(result.payload).toBe('request error');
    });
});
