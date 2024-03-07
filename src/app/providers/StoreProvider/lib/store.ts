import { $api } from '@/shared/api/api';
import { configureStore } from '@reduxjs/toolkit';
import { ThunkExtraArg } from './StateSchema';
import { townsReducer } from '@/entities/Towns';
import { loginFormReducer } from '@/features/AuthByEmail';
import { tokenReducer } from '@/entities/Token';
import { signupFormReducer } from '@/features/Registration';
import { profilesShortReducer } from '@/features/ProfilesShortGet';
import { filtersShortProfilesReducer } from '@/features/FiltersShortProfiles';

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
            profilesShort: profilesShortReducer,
            filtersShortProfiles: filtersShortProfilesReducer,
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
