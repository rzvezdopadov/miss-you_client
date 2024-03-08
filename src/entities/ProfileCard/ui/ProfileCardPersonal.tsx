import { Profile } from '@/features/ProfileGet';
import {
    Alcohol,
    ArrayCheckboxType,
    Childrens,
    Education,
    FieldOfActivity,
    GenderVapor,
    MaritalStatus,
    Profit,
    Religion,
    SignZodiac,
    Smoke,
    Weight,
} from '@/shared/const/profile';
import { SkeletonBasic } from '@/shared/ui/Skeletons';
import { TagBasic } from '@/shared/ui/Tags';
import { TextBasic } from '@/shared/ui/Texts';
import { Flex } from 'antd';

interface ProfileCardPersonalProps {
    isLoading?: boolean;
    profile?: Profile;
}

interface OptionalPropertyProps {
    title: string;
    data: number | undefined;
    array: ArrayCheckboxType[];
}

const OptionalProperty = (props: OptionalPropertyProps) => {
    const { data, title, array } = props;

    return data !== undefined && data !== 0 && <TagBasic title={title} style={{ margin: '0.25rem' }}>{`${array[data || 0].label}`}</TagBasic>;
};

export const ProfileCardPersonal = (props: ProfileCardPersonalProps) => {
    const { profile, isLoading } = props;

    return !isLoading ? (
        <Flex vertical align="center">
            <TextBasic textSize="l" strong={true} style={{ margin: '0.25rem', display: 'flex', justifyContent: 'center' }}>{`Личное:`}</TextBasic>
            <Flex justify="center" wrap="wrap">
                {profile?.location && <TagBasic title={`Локация`} style={{ margin: '0.25rem' }}>{`${profile?.location}`}</TagBasic>}
                {profile?.growth && <TagBasic title={`Рост`} style={{ margin: '0.25rem' }}>{`${profile?.growth} см`}</TagBasic>}
                <OptionalProperty title={'Вес'} data={profile?.weight} array={Weight}></OptionalProperty>
                <OptionalProperty title={'Знак зодиака'} data={profile?.signZodiac} array={SignZodiac}></OptionalProperty>
                {profile?.genderVapor !== undefined && (
                    <TagBasic title={`Ищу`} style={{ margin: '0.25rem' }}>{`${GenderVapor[profile?.genderVapor].label}`}</TagBasic>
                )}
                <OptionalProperty title={'Образование'} data={profile?.education} array={Education}></OptionalProperty>
                <OptionalProperty title={'Деятельность'} data={profile?.fieldOfActivity} array={FieldOfActivity}></OptionalProperty>
                <OptionalProperty title={'Семейное положение'} data={profile?.maritalStatus} array={MaritalStatus}></OptionalProperty>
                <OptionalProperty title={'Дети'} data={profile?.childrens} array={Childrens}></OptionalProperty>
                <OptionalProperty title={'Религия'} data={profile?.religion} array={Religion}></OptionalProperty>
                <OptionalProperty title={'Достаток'} data={profile?.profit} array={Profit}></OptionalProperty>
                <OptionalProperty title={'Курение'} data={profile?.smoke} array={Smoke}></OptionalProperty>
                <OptionalProperty title={'Алкоголь'} data={profile?.alcohol} array={Alcohol}></OptionalProperty>
            </Flex>
        </Flex>
    ) : (
        <Flex vertical align="center">
            <SkeletonBasic width={'6rem'} height={'1.2rem'} style={{ margin: 'auto', marginTop: '0.5rem', marginBottom: '0.25rem' }} />
            <Flex justify="center" wrap="wrap">
                {['OP1', 'OP2', 'OP3', 'OP4', 'OP5', 'OP6', 'OP7', 'OP8', 'OP9'].map((key) => (
                    <SkeletonBasic width={'8rem'} height={'1.4rem'} rounded="s" key={key} style={{ margin: '0.25rem' }} />
                ))}
            </Flex>
        </Flex>
    );
};
