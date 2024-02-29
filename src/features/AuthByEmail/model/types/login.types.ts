export interface LoginFormSchema {
    email?: string;
    password?: string;
    captcha?: string;
    isLoading: boolean;
    error?: string | string[];
}

export interface LoginForm {
    loginForm: LoginFormSchema;
}
