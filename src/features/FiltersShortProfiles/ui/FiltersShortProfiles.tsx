import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { getTowns } from '@/entities/Towns';
import {
    AgeEnd,
    AgeStart,
    Alcohol,
    Childrens,
    Education,
    FieldOfActivity,
    GenderVapor,
    GrowthEnd,
    GrowthStart,
    MaritalStatus,
    Profit,
    Religion,
    SignZodiac,
    Smoke,
    Weight,
} from '@/shared/const/profile';
import { Flex, Select } from 'antd';
import { getFiltersShortProfiles } from '../model/selectors/filtersShortProfilesSelectors';
import { useCallback, useEffect } from 'react';
import { filtersShortProfilesActions, initialState } from '../model/slices/filtersShortProfilesSlice';

const marginSelect = '0.25rem';

interface FiltersShortProfilesProps {
    longFilters?: boolean;
    isLoading?: boolean;
}

export const FiltersShortProfiles = (props: FiltersShortProfilesProps) => {
    const { longFilters, isLoading } = props;
    const dispatch = useAppDispatch();
    const towns = useAppSelector(getTowns);
    const filters = useAppSelector(getFiltersShortProfiles);
    const updateFilter = useCallback(
        <T extends number | string>(key: keyof typeof filters, value: T) => {
            const newFilters = { ...filters };
            newFilters[key] = value as never;
            dispatch(filtersShortProfilesActions.setData(newFilters));
        },
        [filters],
    );
    const onChangeTown = (value: string) => updateFilter('location', value);
    const onChangeAgeStart = (value: number) => updateFilter('ageStart', value);
    const onChangeAgeEnd = (value: number) => updateFilter('ageEnd', value);
    const onChangeGrowthStart = (value: number) => updateFilter('growthStart', value);
    const onChangeGrowthEnd = (value: number) => updateFilter('growthEnd', value);
    const onChangeWeight = (value: number) => updateFilter('weight', value);
    const onChangeSignZodiac = (value: number) => updateFilter('signZodiac', value);
    const onChangeGenderVapor = (value: number) => updateFilter('genderVapor', value);
    const onChangeEducation = (value: number) => updateFilter('education', value);
    const onChangeFieldOfActivity = (value: number) => updateFilter('fieldOfActivity', value);
    const onChangeMaritalStatus = (value: number) => updateFilter('maritalStatus', value);
    const onChangeChildrens = (value: number) => updateFilter('childrens', value);
    const onChangeReligion = (value: number) => updateFilter('religion', value);
    const onChangeSmoke = (value: number) => updateFilter('smoke', value);
    const onChangeAlcohol = (value: number) => updateFilter('alcohol', value);
    const onChangeProfit = (value: number) => updateFilter('profit', value);

    useEffect(() => {
        return () => {
            dispatch(filtersShortProfilesActions.setData(initialState.data));
        };
    }, []);

    return (
        <Flex wrap="wrap" justify="center" style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
            <Select
                size="small"
                style={{ width: '20rem', margin: marginSelect }}
                placeholder="Укажите локацию"
                onChange={onChangeTown}
                disabled={isLoading}
                options={towns.map((town) => ({ value: town, label: town }))}
            ></Select>
            <Select
                size="small"
                placeholder="Возраст от"
                title="Возраст от"
                onChange={onChangeAgeStart}
                disabled={isLoading}
                options={AgeStart}
                style={{ margin: marginSelect }}
                defaultValue={filters.ageStart}
            ></Select>
            <Select
                size="small"
                placeholder="Возраст до"
                title="Возраст до"
                onChange={onChangeAgeEnd}
                disabled={isLoading}
                options={AgeEnd}
                style={{ margin: marginSelect }}
                defaultValue={filters.ageEnd}
            ></Select>
            <Select
                size="small"
                placeholder="Рост от"
                title="Рост от"
                onChange={onChangeGrowthStart}
                disabled={isLoading}
                options={GrowthStart}
                style={{ margin: marginSelect }}
                defaultValue={filters.growthStart}
            ></Select>
            <Select
                size="small"
                placeholder="Рост до"
                title="Рост до"
                onChange={onChangeGrowthEnd}
                disabled={isLoading}
                options={GrowthEnd}
                style={{ margin: marginSelect }}
                defaultValue={filters.growthEnd}
            ></Select>
            <Select
                size="small"
                placeholder="Телосложение"
                title="Телосложение"
                onChange={onChangeWeight}
                disabled={isLoading}
                options={Weight}
                style={{ margin: marginSelect, minWidth: '10rem' }}
                defaultValue={filters.weight}
            ></Select>
            {longFilters && (
                <Select
                    size="small"
                    placeholder="Знак зодиака"
                    title="Знак зодиака"
                    onChange={onChangeSignZodiac}
                    disabled={isLoading}
                    options={SignZodiac}
                    style={{ margin: marginSelect, minWidth: '10rem' }}
                    defaultValue={filters.signZodiac}
                ></Select>
            )}
            <Select
                size="small"
                placeholder="Кого ищете"
                title="Кого ищете"
                onChange={onChangeGenderVapor}
                disabled={isLoading}
                options={GenderVapor}
                style={{ margin: marginSelect }}
                defaultValue={filters.genderVapor}
            ></Select>
            {longFilters && (
                <Select
                    size="small"
                    placeholder="Образование"
                    title="Образование"
                    onChange={onChangeEducation}
                    disabled={isLoading}
                    options={Education}
                    style={{ margin: marginSelect, minWidth: '10rem' }}
                    defaultValue={filters.education}
                ></Select>
            )}
            {longFilters && (
                <Select
                    size="small"
                    placeholder="Деятельность"
                    title="Деятельность"
                    onChange={onChangeFieldOfActivity}
                    disabled={isLoading}
                    options={FieldOfActivity}
                    style={{ margin: marginSelect, minWidth: '10rem' }}
                    defaultValue={filters.fieldOfActivity}
                ></Select>
            )}
            {longFilters && (
                <Select
                    size="small"
                    placeholder="Семейное положение"
                    title="Семейное положение"
                    onChange={onChangeMaritalStatus}
                    disabled={isLoading}
                    options={MaritalStatus}
                    style={{ margin: marginSelect, minWidth: '10rem' }}
                    defaultValue={filters.maritalStatus}
                ></Select>
            )}
            {longFilters && (
                <Select
                    size="small"
                    placeholder="Дети"
                    title="Дети"
                    onChange={onChangeChildrens}
                    disabled={isLoading}
                    options={Childrens}
                    style={{ margin: marginSelect, minWidth: '10rem' }}
                    defaultValue={filters.childrens}
                ></Select>
            )}
            {longFilters && (
                <Select
                    size="small"
                    placeholder="Религия"
                    title="Религия"
                    onChange={onChangeReligion}
                    disabled={isLoading}
                    options={Religion}
                    style={{ margin: marginSelect, minWidth: '10rem' }}
                    defaultValue={filters.religion}
                ></Select>
            )}
            {longFilters && (
                <Select
                    size="small"
                    placeholder="Курение"
                    title="Курение"
                    onChange={onChangeSmoke}
                    disabled={isLoading}
                    options={Smoke}
                    style={{ margin: marginSelect, minWidth: '10rem' }}
                    defaultValue={filters.smoke}
                ></Select>
            )}
            {longFilters && (
                <Select
                    size="small"
                    placeholder="Алкоголь"
                    title="Алкоголь"
                    onChange={onChangeAlcohol}
                    disabled={isLoading}
                    options={Alcohol}
                    style={{ margin: marginSelect, minWidth: '10rem' }}
                    defaultValue={filters.alcohol}
                ></Select>
            )}
            {longFilters && (
                <Select
                    size="small"
                    placeholder="Достаток"
                    title="Достаток"
                    onChange={onChangeProfit}
                    disabled={isLoading}
                    options={Profit}
                    style={{ margin: marginSelect, minWidth: '10rem' }}
                    defaultValue={filters.profit}
                ></Select>
            )}
        </Flex>
    );
};
