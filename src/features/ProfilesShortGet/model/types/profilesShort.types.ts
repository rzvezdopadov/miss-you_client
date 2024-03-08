export interface FiltersProps {
    location: string;
    ageStart: number;
    ageEnd: number;
    growthStart: number;
    growthEnd: number;
    genderVapor: number;
    signZodiac: number;
    weight: number;
    education: number;
    fieldOfActivity: number;
    maritalStatus: number;
    childrens: number;
    religion: number;
    smoke: number;
    alcohol: number;
    profit: number;
    offset: number;
    limit: number;
}

export interface ProfileShort {
    userId?: string;
    timecode?: number;
    name?: string;
    dayOfBirth?: number;
    monthOfBirth?: number;
    yearOfBirth?: number;
    gender?: number;
    genderVapor?: number;
    photoMain?: number;
    photoLinks?: string[];
    interests?: string[];
    rating?: number;
}

export interface ProfilesShortSchema {
    data: ProfileShort[];
    isLoading: boolean;
    isEmptyReciveData: boolean;
    error?: string;
}

export type ProfilesShort = ProfileShort[];
