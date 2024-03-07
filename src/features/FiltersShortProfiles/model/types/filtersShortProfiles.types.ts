export interface Filters {
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
}

export interface FiltersProps extends Filters {
    offset: number;
    limit: number;
}

export interface FiltersShortProfilesSchema {
    data: Filters;
    isLoading: boolean;
    error?: string;
}
