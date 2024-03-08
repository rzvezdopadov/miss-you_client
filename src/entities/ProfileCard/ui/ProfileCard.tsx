'use client';
import { useAppDispatch, useAppSelector } from '@/app/providers/StoreProvider';
import { getProfile, getProfileIsLoading } from '@/features/ProfileGet/model/selectors/profileSelectors';
import { fetchProfile } from '@/features/ProfileGet/model/services/profile';
import { Flex } from 'antd';
import { useCallback, useEffect } from 'react';
import { ProfileCardPersonal } from './ProfileCardPersonal';
import { ProfileCardQuality } from './ProfileCardQuality';
import { ProfileCardInterests } from './ProfileCardInterests';
import { ProfileCardSlider } from './ProfileCardSlider';
import { ProfileCardAbout } from './ProfileCardAbout';
import { ProfileCardServiceButton } from './ProfileCardServiceButtons';

interface ProfileCardProps {
    userId: string;
}

export const ProfileCard = (props: ProfileCardProps) => {
    const { userId } = props;
    const dispatch = useAppDispatch();
    const profile = useAppSelector(getProfile);
    const isLoading = useAppSelector(getProfileIsLoading);

    const queryProfile = useCallback((userId: string) => {
        dispatch(fetchProfile(userId));
    }, []);

    useEffect(() => {
        if (userId) {
            queryProfile(userId);
        }
    }, [userId]);

    return (
        <Flex wrap="wrap" align="flex-start" justify="center">
            <Flex vertical style={{ margin: '0.5rem' }}>
                <ProfileCardSlider isLoading={isLoading} profile={profile} />
                <ProfileCardServiceButton isLoading={isLoading} profile={profile}></ProfileCardServiceButton>
            </Flex>
            <Flex vertical style={{ margin: '0.5rem', maxWidth: '30rem' }}>
                <ProfileCardAbout isLoading={isLoading} profile={profile}></ProfileCardAbout>
                <ProfileCardPersonal isLoading={isLoading} profile={profile}></ProfileCardPersonal>
                <ProfileCardInterests isLoading={isLoading} profile={profile}></ProfileCardInterests>
                <ProfileCardQuality isLoading={isLoading} profile={profile}></ProfileCardQuality>
            </Flex>
        </Flex>
    );
};
