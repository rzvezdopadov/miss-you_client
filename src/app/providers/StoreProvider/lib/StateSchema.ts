import { TokenSchema } from '@/entities/Token';
import { TownsSchema } from '@/entities/Towns';
import { LoginFormSchema } from '@/features/AuthByEmail';
import { ProfilesShortSchema } from '@/features/ProfilesShortGet';
import { SignupFormSchema } from '@/features/Registration';
import { AxiosInstance } from 'axios';

export interface StateSchema {
    token: TokenSchema;
    // Async reducers
    towns: TownsSchema;
    loginForm: LoginFormSchema;
    signupForm: SignupFormSchema;
    profilesShort: ProfilesShortSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
