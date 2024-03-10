import { Random } from '@/shared/utils/Random';
import { Filters, FiltersShortProfilesSchema } from '../types/filtersShortProfiles.types';
import { filtersShortProfilesReducer } from './filtersShortProfilesSlice';
import { filtersShortProfilesActions } from './filtersShortProfilesSlice';
import { SYSTEM_CONST } from '@/app/const';
import {
    Alcohol,
    Childrens,
    Education,
    FieldOfActivity,
    GenderVapor,
    MaritalStatus,
    Profit,
    Religion,
    SignZodiac,
    Smoke,
    Weight,
} from '@/shared/const/profile';

describe('filtersShortProfilesSlice', () => {
    test('test set data', () => {
        const state: DeepPartial<FiltersShortProfilesSchema> = {};
        const fakeData = {
            location: Random.getRandomString(10),
            ageStart: Random.getRandomInteger(SYSTEM_CONST.minAge, SYSTEM_CONST.maxAge),
            ageEnd: Random.getRandomInteger(SYSTEM_CONST.minAge, SYSTEM_CONST.maxAge),
            growthStart: Random.getRandomInteger(SYSTEM_CONST.minGrowth, SYSTEM_CONST.maxGrowth),
            growthEnd: Random.getRandomInteger(SYSTEM_CONST.minGrowth, SYSTEM_CONST.maxGrowth),
            genderVapor: Random.getRandomInteger(0, GenderVapor.length - 1),
            signZodiac: Random.getRandomInteger(0, SignZodiac.length - 1),
            weight: Random.getRandomInteger(0, Weight.length - 1),
            education: Random.getRandomInteger(0, Education.length - 1),
            fieldOfActivity: Random.getRandomInteger(0, FieldOfActivity.length - 1),
            maritalStatus: Random.getRandomInteger(0, MaritalStatus.length - 1),
            childrens: Random.getRandomInteger(0, Childrens.length - 1),
            religion: Random.getRandomInteger(0, Religion.length - 1),
            smoke: Random.getRandomInteger(0, Smoke.length - 1),
            alcohol: Random.getRandomInteger(0, Alcohol.length - 1),
            profit: Random.getRandomInteger(0, Profit.length - 1),
        };

        const reducerData = filtersShortProfilesReducer(state as FiltersShortProfilesSchema, filtersShortProfilesActions.setData(fakeData));

        for (const key in fakeData) {
            expect(reducerData.data[key as keyof Filters]).toEqual(fakeData[key as keyof Filters]);
        }
    });
});
