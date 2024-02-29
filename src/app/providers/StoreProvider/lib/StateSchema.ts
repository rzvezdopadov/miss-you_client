import { TokenSchema } from '@/entities/Token';
import { TownsSchema } from '@/entities/Towns';
import { LoginFormSchema } from '@/features/AuthByEmail/model/types/login.types';
import { AxiosInstance } from 'axios';

export interface StateSchema {
    token: TokenSchema;
    // Async reducers
    towns: TownsSchema;
    loginForm: LoginFormSchema;
}

export interface ThunkExtraArg {
    api: AxiosInstance;
}

export interface ThunkConfig<T> {
    rejectValue: T;
    extra: ThunkExtraArg;
    state: StateSchema;
}
