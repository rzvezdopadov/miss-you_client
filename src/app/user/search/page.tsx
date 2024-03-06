'use client';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { ProfileCardMini } from '@/entities/ProfileCardMini';
import { fetchTowns, getTowns } from '@/entities/Towns';
import { fetchProfilesShort, getProfilesShort, getProfilesShortIsLoading, profilesShortActions } from '@/features/ProfilesShortGet';
import { TitleBasic } from '@/shared/ui/Titles';
import { Flex } from 'antd';
import { useCallback, useEffect } from 'react';
import themes from '@/shared/themes/themes.module.scss';
import { FlexWrapperWithScroll } from '@/entities/FlexWrapperWithScroll';
import { getProfilesShortIsEmptyReciveData } from '@/features/ProfilesShortGet';
import { SYSTEM_CONST } from '@/app/const';

export default function Page() {
    const dispatch = useAppDispatch();
    const profileShort = useAppSelector(getProfilesShort);
    const isLoading = useAppSelector(getProfilesShortIsLoading);
    const isEmptyReciveData = useAppSelector(getProfilesShortIsEmptyReciveData);
    const towns = useAppSelector(getTowns);

    const getUsers = useCallback(() => {
        if (!towns || !towns.length || isEmptyReciveData) return;

        dispatch(
            fetchProfilesShort({
                queryType: 'profiles/short',
                filters: {
                    location: towns[0],
                    ageStart: 19,
                    ageEnd: 99,
                    growthStart: 120,
                    growthEnd: 240,
                    genderVapor: 2,
                    signZodiac: 0,
                    weight: 0,
                    education: 0,
                    fieldOfActivity: 0,
                    maritalStatus: 0,
                    childrens: 0,
                    religion: 0,
                    smoke: 0,
                    alcohol: 0,
                    profit: 0,
                    offset: profileShort.length,
                    limit: SYSTEM_CONST.lazyLoadingUserCount,
                },
            }),
        );
    }, [towns, profileShort, isEmptyReciveData]);

    useEffect(() => {
        if (!towns || !towns.length) return;

        getUsers();
    }, [towns]);

    useEffect(() => {
        dispatch(fetchTowns({}));

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
            onScrollEnd={getUsers}
        >
            <TitleBasic level={3} style={{ marginTop: '1rem' }}>
                Поиск пользователей
            </TitleBasic>
            <Flex wrap="wrap" justify="center">
                {profileShort.map((profileShort) => (
                    <ProfileCardMini {...profileShort} key={profileShort.userId}></ProfileCardMini>
                ))}
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
