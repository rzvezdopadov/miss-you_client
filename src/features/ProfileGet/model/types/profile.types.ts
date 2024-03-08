export interface Profile {
    userId?: string;
    timecode?: number;
    location?: string;
    name?: string;
    discription?: string;
    dayOfBirth?: number;
    monthOfBirth?: number;
    yearOfBirth?: number;
    growth?: number;
    weight?: number;
    gender?: number;
    genderVapor?: number;
    photoMain?: number;
    photoLinks?: string[];
    signZodiac?: number;
    education?: number;
    fieldOfActivity?: number;
    maritalStatus?: number;
    childrens?: number;
    religion?: number;
    smoke?: number;
    alcohol?: number;
    profit?: number;
    interests?: string[];
    likeCharacter?: number[];
    dontLikeCharacter?: number[];
    rating?: number;
}

export interface ProfileSchema {
    data: Profile;
    isLoading: boolean;
    error?: string;
}
