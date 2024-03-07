'use client';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { ProfileCardMini } from '@/entities/ProfileCardMini';
import { getTowns } from '@/entities/Towns';
import { fetchProfilesShort, getProfilesShort, getProfilesShortIsLoading, profilesShortActions } from '@/features/ProfilesShortGet';
import { TitleBasic } from '@/shared/ui/Titles';
import { Flex } from 'antd';
import { useCallback, useEffect } from 'react';
import themes from '@/shared/themes/themes.module.scss';
import { FlexWrapperWithScroll } from '@/entities/FlexWrapperWithScroll';
import { getProfilesShortIsEmptyReciveData } from '@/features/ProfilesShortGet';
import { SYSTEM_CONST } from '@/app/const';
import { FiltersShortProfiles, getFiltersShortProfiles } from '@/features/FiltersShortProfiles';
import { TextBasic } from '@/shared/ui/Texts';

export default function Page() {
    const dispatch = useAppDispatch();
    const profileShort = useAppSelector(getProfilesShort);
    const isLoading = useAppSelector(getProfilesShortIsLoading);
    const isEmptyReciveData = useAppSelector(getProfilesShortIsEmptyReciveData);
    const towns = useAppSelector(getTowns);
    const filters = useAppSelector(getFiltersShortProfiles);

    const getUsers = useCallback(
        (offset: number) => {
            if (!towns || !towns.length || !filters.location) return;

            dispatch(
                fetchProfilesShort({
                    queryType: 'profiles/short',
                    filters: {
                        ...filters,
                        offset,
                        limit: SYSTEM_CONST.lazyLoadingUserCount,
                    },
                }),
            );
        },
        [towns, profileShort, isEmptyReciveData, filters],
    );

    const onScrollEnd = () => {
        if (!isEmptyReciveData) getUsers(profileShort.length);
    };

    useEffect(() => {
        dispatch(profilesShortActions.setData([]));
        getUsers(0);
    }, [filters]);

    useEffect(() => {
        return () => {
            dispatch(profilesShortActions.setData([]));
        };
    }, []);

    return (
        <FlexWrapperWithScroll
            vertical={true}
            align="center"
            className={themes.bg_color}
            style={{ width: '100%', height: '100%', overflowY: 'scroll' }}
            onScrollEnd={onScrollEnd}
        >
            <TitleBasic level={3} style={{ marginTop: '1rem' }}>
                Поиск пользователей
            </TitleBasic>
            <FiltersShortProfiles longFilters={true} />
            <Flex wrap="wrap" justify="center">
                {profileShort.length ? (
                    profileShort.map((profileShort) => <ProfileCardMini {...profileShort} key={profileShort.userId}></ProfileCardMini>)
                ) : (
                    <TextBasic textSize="xl">Настройте фильтры</TextBasic>
                )}
                {isLoading ? (
                    <>
                        {['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10'].map((key) => (
                            <ProfileCardMini isLoading key={key}></ProfileCardMini>
                        ))}
                    </>
                ) : (
                    <></>
                )}
            </Flex>
        </FlexWrapperWithScroll>
    );
}
