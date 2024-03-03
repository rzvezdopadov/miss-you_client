import { $api } from '@/shared/api/api';
import { configureStore } from '@reduxjs/toolkit';
import { ThunkExtraArg } from './StateSchema';
import { townsReducer } from '@/entities/Towns';
import { loginFormReducer } from '@/features/AuthByEmail';
import { tokenReducer } from '@/entities/Token';
import { signupFormReducer } from '@/features/Registration';

export const makeStore = () => {
    const extraArg: ThunkExtraArg = {
        api: $api,
    };

    const store = configureStore({
        reducer: {
            token: tokenReducer,
            // Async reducers
            towns: townsReducer,
            loginForm: loginFormReducer,
            signupForm: signupFormReducer,
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                thunk: {
                    extraArgument: extraArg,
                },
            }),
    });

    return store;
};

export type AppStore = ReturnType<typeof makeStore>;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
