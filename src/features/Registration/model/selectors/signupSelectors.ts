import { SYSTEM_CONST } from '@/app/const';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Gender, GenderVapor } from '@/shared/const/profile';
import { TimeDate } from '@/shared/utils/TimeDate';

export const getSignupFormEmail = (state: StateSchema) => state?.signupForm?.email || '';
export const getSignupFormPassword = (state: StateSchema) => state?.signupForm?.password || '';
export const getSignupFormLocation = (state: StateSchema) => state?.signupForm?.location || '';
export const getSignupFormDayOfBirth = (state: StateSchema) => state?.signupForm?.dayOfBirth || 32;
export const getSignupFormMonthOfBirth = (state: StateSchema) =>
    typeof state?.signupForm?.monthOfBirth === 'undefined' ? 12 : state.signupForm.monthOfBirth;
export const getSignupFormYearOfBirth = (state: StateSchema) => state?.signupForm?.yearOfBirth || TimeDate.getYearFromAge(SYSTEM_CONST.minAge) - 1;
export const getSignupFormGender = (state: StateSchema) =>
    typeof state?.signupForm?.gender === 'undefined' ? Gender.length : state.signupForm.gender;
export const getSignupFormGenderVapor = (state: StateSchema) =>
    typeof state?.signupForm?.genderVapor === 'undefined' ? GenderVapor.length : state.signupForm.genderVapor;
export const getSignupFormCaptcha = (state: StateSchema) => state?.signupForm?.captcha || '';
export const getSignupFormIsLoading = (state: StateSchema) => state?.signupForm?.isLoading || false;
export const getSignupFormError = (state: StateSchema) => state?.signupForm?.error;
