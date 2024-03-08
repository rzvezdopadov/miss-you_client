import { Profile } from '@/features/ProfileGet';
import { SkeletonBasic } from '@/shared/ui/Skeletons';
import { TextBasic } from '@/shared/ui/Texts';
import { Button, Flex } from 'antd';
import { useCallback } from 'react';

interface ProfileCardServiceButtonProps {
    isLoading?: boolean;
    profile?: Profile;
}

export const ProfileCardServiceButton = (props: ProfileCardServiceButtonProps) => {
    const { profile, isLoading } = props;

    const onClickWriteMessage = useCallback(() => {}, []);
    const onClickAddToBan = useCallback(() => {}, []);
    const onClickComplaintProfile = useCallback(() => {}, []);

    return !isLoading ? (
        <Flex vertical>
            <TextBasic textSize="l" style={{ margin: '0.25rem', display: 'flex', justifyContent: 'center' }}>
                {`Рейтинг: ${profile?.rating || '--'}`}
            </TextBasic>
            <Button type="primary" onClick={onClickWriteMessage} style={{ margin: '0.25rem' }}>
                {`Написать сообщение`}
            </Button>
            <Button type="primary" onClick={onClickAddToBan} style={{ margin: '0.25rem' }}>
                {`Добавить в мой бан лист`}
            </Button>
            <Button type="primary" onClick={onClickComplaintProfile} style={{ margin: '0.25rem' }}>
                {`Пожаловаться на профиль`}
            </Button>
        </Flex>
    ) : (
        <Flex vertical>
            <SkeletonBasic width={'8rem'} height={'1.2rem'} style={{ margin: 'auto', marginTop: '0.25rem', marginBottom: '0.25rem' }} />
            <SkeletonBasic width={'auto'} height={'2rem'} rounded="m" style={{ margin: '0.25rem' }} />
            <SkeletonBasic width={'auto'} height={'2rem'} rounded="m" style={{ margin: '0.25rem' }} />
            <SkeletonBasic width={'auto'} height={'2rem'} rounded="m" style={{ margin: '0.25rem' }} />
        </Flex>
    );
};
