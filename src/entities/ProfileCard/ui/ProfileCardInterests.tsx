import { Profile } from '@/features/ProfileGet';
import { SkeletonBasic } from '@/shared/ui/Skeletons';
import { TagBasic } from '@/shared/ui/Tags';
import { TextBasic } from '@/shared/ui/Texts';
import { Flex } from 'antd';

interface ProfileCardInterestsProps {
    isLoading?: boolean;
    profile?: Profile;
}

export const ProfileCardInterests = (props: ProfileCardInterestsProps) => {
    const { profile, isLoading } = props;

    return !isLoading ? (
        <Flex vertical align="center">
            <TextBasic textSize="l" strong={true} style={{ margin: '0.25rem', display: 'flex', justifyContent: 'center' }}>{`Интересы:`}</TextBasic>
            <Flex justify="center" wrap="wrap">
                {profile?.interests?.length ? (
                    profile?.interests.map((value, index) => (
                        <TagBasic title={`${value}`} key={`${index}`} style={{ margin: '0.25rem' }}>{`${value}`}</TagBasic>
                    ))
                ) : (
                    <TagBasic title={`Интересы отсутствуют`} style={{ margin: '0.25rem' }}>{`отсутствуют`}</TagBasic>
                )}
            </Flex>
        </Flex>
    ) : (
        <Flex vertical align="center">
            <SkeletonBasic width={'6rem'} height={'1.2rem'} style={{ margin: 'auto', marginTop: '0.5rem', marginBottom: '0.25rem' }} />
            <Flex justify="center" wrap="wrap">
                {['OP1', 'OP2', 'OP3', 'OP4', 'OP5', 'OP6'].map((key) => (
                    <SkeletonBasic width={'6rem'} height={'1.4rem'} rounded="s" key={key} style={{ margin: '0.25rem' }} />
                ))}
            </Flex>
        </Flex>
    );
};
