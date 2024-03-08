import { Profile } from '@/features/ProfileGet';
import { ImageBasic } from '@/shared/ui/Images';
import { SkeletonBasic } from '@/shared/ui/Skeletons';
import { TextBasic } from '@/shared/ui/Texts';
import { Button, Flex } from 'antd';
import { useCallback, useEffect, useState } from 'react';

interface ProfileCardSliderProps {
    isLoading?: boolean;
    profile?: Profile;
}

export const ProfileCardSlider = (props: ProfileCardSliderProps) => {
    const { profile, isLoading } = props;
    const [photoPos, setPhotoPos] = useState(profile?.photoMain);

    const onClickLeft = useCallback(() => {
        const newPhotoPos = (photoPos || 0) - 1;

        if (newPhotoPos < 0) {
            setPhotoPos(profile?.photoLinks?.length && profile?.photoLinks?.length - 1);
        } else {
            setPhotoPos(newPhotoPos);
        }
    }, [photoPos]);

    const onClickHeart = useCallback(() => {}, []);

    const onClickStar = useCallback(() => {}, []);

    const onClickRight = useCallback(() => {
        const newPhotoPos = (photoPos || 0) + 1;

        if (newPhotoPos > (profile?.photoLinks?.length || 0) - 1) {
            setPhotoPos(0);
        } else {
            setPhotoPos(newPhotoPos);
        }
    }, [photoPos]);

    useEffect(() => {
        setPhotoPos(profile?.photoMain);
    }, [profile]);

    return !isLoading ? (
        <Flex vertical align="center">
            <ImageBasic
                width={'20rem'}
                height={'20rem'}
                rounded="xl"
                preview={false}
                style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                src={profile?.photoLinks?.length && profile?.photoLinks[photoPos || 0] ? `/photos/${profile.photoLinks[photoPos || 0]}` : ''}
            ></ImageBasic>
            <TextBasic textSize="l" style={{ margin: '0.25rem' }}>
                {profile?.photoLinks?.length && photoPos !== undefined ? `${photoPos + 1}/${profile?.photoLinks?.length}` : `Фото отсутствуют`}
            </TextBasic>
            <Flex>
                <Button type="primary" title="Фото влево" style={{ margin: '0.25rem' }} onClick={onClickLeft}>
                    &lt;
                </Button>
                <Button type="primary" title="Лайк профиля" style={{ margin: '0.25rem' }} onClick={onClickHeart}>
                    &#10084;
                </Button>
                {/* &#9825; */}
                <Button type="primary" title="Добавить в избранное" style={{ margin: '0.25rem' }} onClick={onClickStar}>
                    &#9734;
                </Button>
                <Button type="primary" title="Фото вправо" style={{ margin: '0.25rem' }} onClick={onClickRight}>
                    &gt;
                </Button>
            </Flex>
        </Flex>
    ) : (
        <Flex vertical align="center">
            <SkeletonBasic size={'20rem'} rounded="xl" />
            <SkeletonBasic width={'3rem'} height={'1.2rem'} style={{ margin: '0.75rem' }} />
            <Flex>
                <SkeletonBasic width={'3rem'} height={'2rem'} rounded="m" style={{ margin: '0.25rem' }} />
                <SkeletonBasic width={'3rem'} height={'2rem'} rounded="m" style={{ margin: '0.25rem' }} />
                <SkeletonBasic width={'3rem'} height={'2rem'} rounded="m" style={{ margin: '0.25rem' }} />
                <SkeletonBasic width={'3rem'} height={'2rem'} rounded="m" style={{ margin: '0.25rem' }} />
            </Flex>
        </Flex>
    );
};
