import { DateTimeVisitFull } from '@/entities/DateTimeVisit';
import { Profile } from '@/features/ProfileGet';
import { getStrYearFromAge } from '@/shared/lib/helpers/age';
import { SkeletonBasic } from '@/shared/ui/Skeletons';
import { TextBasic } from '@/shared/ui/Texts';
import { TimeDate } from '@/shared/utils/TimeDate';
import { Flex } from 'antd';
import { useEffect, useState } from 'react';

interface ProfileCardAboutProps {
    isLoading?: boolean;
    profile?: Profile;
}

export const ProfileCardAbout = (props: ProfileCardAboutProps) => {
    const { profile, isLoading } = props;
    const [ageStr, setAgeStr] = useState(``);

    useEffect(() => {
        setAgeStr(
            profile?.yearOfBirth
                ? `${TimeDate.getYearFromAge(profile.yearOfBirth)} ${getStrYearFromAge(TimeDate.getYearFromAge(profile.yearOfBirth))}`
                : `--`,
        );
    }, [profile]);

    return !isLoading ? (
        <Flex vertical>
            <TextBasic
                textSize="l"
                strong={true}
                style={{ margin: '0.25rem', display: 'flex', justifyContent: 'center' }}
            >{`${profile?.name || 'Нет имени'}, ${ageStr}`}</TextBasic>
            <DateTimeVisitFull {...profile} />
            <TextBasic textSize="l" strong={true} style={{ marginTop: '0.25rem', display: 'flex', justifyContent: 'center' }}>{`О себе:`}</TextBasic>
            <TextBasic textSize="l" style={{ display: 'flex', justifyContent: 'center' }}>{`${profile?.discription || 'Нет информации'}`}</TextBasic>
        </Flex>
    ) : (
        <Flex vertical>
            <SkeletonBasic width={'20rem'} height={'1.2rem'} style={{ margin: 'auto', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <SkeletonBasic width={'10rem'} height={'1.2rem'} style={{ margin: 'auto', marginTop: '0.25rem', marginBottom: '0.5rem' }} />
            <SkeletonBasic width={'5rem'} height={'1.2rem'} style={{ margin: 'auto', marginTop: '0.5rem', marginBottom: '0.5rem' }} />
            <SkeletonBasic width={'20rem'} height={'1.2rem'} style={{ margin: 'auto', marginTop: '0.25rem', marginBottom: '0.5rem' }} />
        </Flex>
    );
};
