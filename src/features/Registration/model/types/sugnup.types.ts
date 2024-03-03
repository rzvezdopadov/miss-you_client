export interface SignupFormSchema {
    email?: string;
    password?: string;
    location?: string;
    dayOfBirth?: number;
    monthOfBirth?: number;
    yearOfBirth?: number;
    gender?: number;
    genderVapor?: number;
    captcha?: string;
    isLoading: boolean;
    error?: string | string[];
}

export interface SignupForm {
    loginForm: SignupFormSchema;
}
