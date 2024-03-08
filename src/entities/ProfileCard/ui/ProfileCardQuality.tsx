import { Profile } from '@/features/ProfileGet';
import { DontLikeСharacter, LikeСharacter } from '@/shared/const/profile';
import { SkeletonBasic } from '@/shared/ui/Skeletons';
import { TagBasic } from '@/shared/ui/Tags';
import { TextBasic } from '@/shared/ui/Texts';
import { Flex } from 'antd';

interface ProfileCardQualityProps {
    isLoading?: boolean;
    profile?: Profile;
}

export const ProfileCardQuality = (props: ProfileCardQualityProps) => {
    const { profile, isLoading } = props;

    return !isLoading ? (
        <Flex vertical align="center">
            <TextBasic
                textSize="l"
                strong={true}
                style={{ margin: '0.25rem', display: 'flex', justifyContent: 'center' }}
            >{`Ценю качества:`}</TextBasic>
            <Flex justify="center" wrap="wrap">
                {profile?.likeCharacter?.length ? (
                    profile?.likeCharacter.map((value, index) => (
                        <TagBasic
                            title={`${LikeСharacter[value][1]}`}
                            key={`${index}`}
                            style={{ margin: '0.25rem' }}
                        >{`${LikeСharacter[value][0]}`}</TagBasic>
                    ))
                ) : (
                    <TagBasic title={`Качества отсутствуют`} style={{ margin: '0.25rem' }}>{`Отсутствуют`}</TagBasic>
                )}
            </Flex>

            <TextBasic
                textSize="l"
                strong={true}
                style={{ margin: '0.25rem', display: 'flex', justifyContent: 'center' }}
            >{`Не нравятся качества:`}</TextBasic>
            <Flex justify="center" wrap="wrap">
                {profile?.dontLikeCharacter?.length ? (
                    profile?.dontLikeCharacter.map((value, index) => (
                        <TagBasic
                            title={`${DontLikeСharacter[value][1]}`}
                            key={`${index}`}
                            style={{ margin: '0.25rem' }}
                        >{`${DontLikeСharacter[value][0]}`}</TagBasic>
                    ))
                ) : (
                    <TagBasic title={`Качества отсутствуют`} style={{ margin: '0.25rem' }}>{`Отсутствуют`}</TagBasic>
                )}
            </Flex>
        </Flex>
    ) : (
        <Flex vertical align="center">
            <SkeletonBasic width={'6rem'} height={'1.2rem'} style={{ margin: 'auto', marginTop: '0.5rem', marginBottom: '0.25rem' }} />
            <Flex justify="center" wrap="wrap">
                {['L1', 'L2', 'L3', 'L4', 'L5', 'L6'].map((key) => (
                    <SkeletonBasic width={'6rem'} height={'1.4rem'} rounded="s" key={key} style={{ margin: '0.25rem' }} />
                ))}
            </Flex>
            <SkeletonBasic width={'6rem'} height={'1.2rem'} style={{ margin: 'auto', marginTop: '0.5rem', marginBottom: '0.25rem' }} />
            <Flex justify="center" wrap="wrap">
                {['DL1', 'DL2', 'DL3', 'DL4', 'DL5', 'DL6'].map((key) => (
                    <SkeletonBasic width={'6rem'} height={'1.4rem'} rounded="s" key={key} style={{ margin: '0.25rem' }} />
                ))}
            </Flex>
        </Flex>
    );
};
