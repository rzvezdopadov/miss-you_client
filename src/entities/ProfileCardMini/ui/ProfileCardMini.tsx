'use client';
import { DateTimeVisitShort } from '@/entities/DateTimeVisit';
import { ProfileShort } from '@/features/ProfilesShortGet';
import { getStrYearFromAge } from '@/shared/lib/helpers/age';
import { CardBasic } from '@/shared/ui/Cards';
import { ImageBasic } from '@/shared/ui/Images';
import { SkeletonBasic } from '@/shared/ui/Skeletons';
import { TagBasic } from '@/shared/ui/Tags';
import { TextBasic } from '@/shared/ui/Texts';
import { TimeDate } from '@/shared/utils/TimeDate';
import { Button, Flex } from 'antd';
import { useRef } from 'react';

interface ProfileCardMiniProps extends ProfileShort {
    isLoading?: boolean;
    profileFullOpenClbk?: (userId: string) => void;
}

export const ProfileCardMini = (props: ProfileCardMiniProps) => {
    const ageStr = useRef(
        props?.yearOfBirth ? `${TimeDate.getYearFromAge(props.yearOfBirth)} ${getStrYearFromAge(TimeDate.getYearFromAge(props.yearOfBirth))}` : `--`,
    );

    const profileFullOpen = () => {
        if (props.profileFullOpenClbk) props.profileFullOpenClbk(props?.userId || '');
    };

    return props.isLoading ? (
        <CardBasic style={{ width: '20rem', height: '14rem', margin: '0.5rem' }}>
            <Flex style={{ margin: '-0.75rem' }}>
                <Flex vertical={true}>
                    <SkeletonBasic size={'8rem'} rounded="xl" />
                    <SkeletonBasic width={'8rem'} height={'2rem'} rounded="l" style={{ marginTop: '1rem', marginBottom: '0.75rem' }} />
                    <SkeletonBasic width={'8rem'} height={'1rem'} />
                </Flex>
                <Flex vertical={true} justify="flex-start" align="center" flex={'auto'} style={{ width: '11rem', height: '13rem' }}>
                    <SkeletonBasic width={'9rem'} height={'2rem'} style={{ margin: '0.25rem' }} />
                    <SkeletonBasic width={'9rem'} height={'2rem'} style={{ margin: '0.25rem' }} />
                    <Flex justify="center" align="center" wrap={'wrap'} style={{ padding: '0.5rem', overflowY: 'scroll' }}>
                        <SkeletonBasic width={'8rem'} height={'1.5rem'} style={{ margin: '0.25rem' }} />
                        <SkeletonBasic width={'8rem'} height={'1.5rem'} style={{ margin: '0.25rem' }} />
                        <SkeletonBasic width={'8rem'} height={'1.5rem'} style={{ margin: '0.25rem' }} />
                    </Flex>
                </Flex>
            </Flex>
        </CardBasic>
    ) : (
        <CardBasic style={{ width: '20rem', height: '14rem', margin: '0.5rem' }}>
            <Flex style={{ margin: '-0.75rem' }}>
                <Flex vertical={true}>
                    <ImageBasic
                        width={'8rem'}
                        height={'8rem'}
                        rounded="xl"
                        preview={false}
                        style={{ backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
                        src={
                            props?.photoLinks?.length && props?.photoLinks[props?.photoMain || 0]
                                ? `/photos/${props.photoLinks[props?.photoMain || 0]}`
                                : ''
                        }
                    />
                    <Button
                        size="small"
                        type="primary"
                        shape="round"
                        title="Посмотреть"
                        style={{ marginTop: '1rem', marginBottom: '0.75rem' }}
                        onClick={profileFullOpen}
                    >
                        Посмотреть
                    </Button>
                    <DateTimeVisitShort {...props} />
                </Flex>
                <Flex
                    vertical={true}
                    justify="flex-start"
                    align="center"
                    flex={'auto'}
                    style={{ width: '11rem', height: '13rem', padding: '0.5rem' }}
                >
                    <Flex justify="center" align="center" wrap={'wrap'}>
                        <TextBasic
                            strong={true}
                            textSize="l"
                            style={{
                                display: 'flex',
                                justifyContent: 'center',
                                width: '10rem',
                            }}
                        >
                            {props.name}
                        </TextBasic>
                        <TextBasic
                            strong={true}
                            textSize="l"
                            style={{ display: 'flex', justifyContent: 'center', width: '10rem', overflowX: 'hidden', textOverflow: 'ellipsis' }}
                        >
                            {`${ageStr.current}, Интересы:`}
                        </TextBasic>
                    </Flex>
                    <Flex justify="center" align="center" wrap={'wrap'} style={{ padding: '0.5rem', overflowY: 'scroll' }}>
                        {props?.interests?.length ? (
                            props.interests.map((interest, index) => (
                                <TagBasic
                                    color="default"
                                    bordered={true}
                                    key={index + 1}
                                    style={{
                                        margin: '0.25rem',
                                        justifyContent: 'center',
                                        maxWidth: '10rem',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                    }}
                                >
                                    {interest}
                                </TagBasic>
                            ))
                        ) : (
                            <TagBasic color="default" bordered={true} key={0}>
                                {'отсутствуют'}
                            </TagBasic>
                        )}
                    </Flex>
                </Flex>
            </Flex>
        </CardBasic>
    );
};
