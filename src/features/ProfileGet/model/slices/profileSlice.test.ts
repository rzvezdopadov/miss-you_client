import '@testing-library/jest-dom';
import { Random } from '@/shared/utils/Random';
import { Profile, ProfileSchema } from '../types/profile.types';
import { profileActions, profileReducer } from './profileSlice';
import { SYSTEM_CONST } from '@/app/const';
import {
    Alcohol,
    Childrens,
    Education,
    FieldOfActivity,
    Gender,
    GenderVapor,
    MaritalStatus,
    Profit,
    Religion,
    SignZodiac,
    Smoke,
    Weight,
} from '@/shared/const/profile';

describe('profileSlice', () => {
    test('test set data', () => {
        const state: DeepPartial<ProfileSchema> = {};
        const fakeData = {
            userId: Random.getRandomString(10),
            timecode: Random.getRandomInteger(10000, 100000),
            location: Random.getRandomString(10),
            name: Random.getRandomString(10),
            discription: Random.getRandomString(10),
            dayOfBirth: Random.getRandomInteger(1, 28),
            monthOfBirth: Random.getRandomInteger(1, 12),
            yearOfBirth: Random.getRandomInteger(1990, 2000),
            growth: Random.getRandomInteger(SYSTEM_CONST.minGrowth, SYSTEM_CONST.maxGrowth),
            weight: Random.getRandomInteger(0, Weight.length - 1),
            gender: Random.getRandomInteger(1, Gender.length - 1),
            genderVapor: Random.getRandomInteger(1, GenderVapor.length - 1),
            photoMain: 0,
            photoLinks: [],
            signZodiac: Random.getRandomInteger(1, SignZodiac.length - 1),
            education: Random.getRandomInteger(0, Education.length - 1),
            fieldOfActivity: Random.getRandomInteger(0, FieldOfActivity.length - 1),
            maritalStatus: Random.getRandomInteger(0, MaritalStatus.length - 1),
            childrens: Random.getRandomInteger(0, Childrens.length - 1),
            religion: Random.getRandomInteger(0, Religion.length - 1),
            smoke: Random.getRandomInteger(0, Smoke.length - 1),
            alcohol: Random.getRandomInteger(0, Alcohol.length - 1),
            profit: Random.getRandomInteger(0, Profit.length - 1),
            interests: [],
            likeCharacter: [],
            dontLikeCharacter: [],
            rating: Random.getRandomInteger(1000, 2000),
        };

        const reducerData = profileReducer(state as ProfileSchema, profileActions.setData(fakeData));

        for (const key in fakeData) {
            expect(reducerData.data[key as keyof Profile]).toEqual(fakeData[key as keyof Profile]);
        }
    });
});
