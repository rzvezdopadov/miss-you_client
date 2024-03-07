import { SYSTEM_CONST } from '@/app/const';

interface IType {
    value: number;
    label: string;
}

const transformVariantToType = (payload: string[], offset?: number): IType[] => {
    return payload.map((value, index) => ({ value: index + (offset || 0), label: value }));
};

const generateRangeNumber = (min: number, max: number): number[] => {
    const arr: number[] = [];

    for (let i = min; i < max + 1; i++) arr.push(i);

    return arr;
};

const GenderVariant = ['Мужчина', 'Женщина'];
export const Gender = transformVariantToType(GenderVariant);

const GenderVaporVariant = ['Мужчин', 'Женщин', 'Друзей'];
export const GenderVapor = transformVariantToType(GenderVaporVariant);

const AgeStartVariant = generateRangeNumber(SYSTEM_CONST.minAge, SYSTEM_CONST.maxAge).map((value) => `${value}`);
export const AgeStart = transformVariantToType(AgeStartVariant, SYSTEM_CONST.minAge);

export const AgeEnd = transformVariantToType(AgeStartVariant, SYSTEM_CONST.minAge);

const GrowthStartVariant = generateRangeNumber(SYSTEM_CONST.minGrowth, SYSTEM_CONST.maxGrowth).map((value) => `${value}`);
export const GrowthStart = transformVariantToType(GrowthStartVariant, SYSTEM_CONST.minGrowth);

export const GrowthEnd = transformVariantToType(GrowthStartVariant, SYSTEM_CONST.minGrowth);

const SignZodiacVariant = [
    'Не имеет значения',
    'Овен',
    'Телец',
    'Близнецы',
    'Рак',
    'Лев',
    'Дева',
    'Весы',
    'Скорпион',
    'Стрелец',
    'Козерог',
    'Водолей',
    'Рыбы',
];
export const SignZodiac = transformVariantToType(SignZodiacVariant);

const WeightVariant = ['Не имеет значения', 'Худощавое', 'Спортивное', 'Среднее', 'Пара лишних кило'];
export const Weight = transformVariantToType(WeightVariant);

const EducationVariant = ['Не имеет значения', 'Среднее', 'Неоконченное высшее', 'Высшее', 'Ученая степень', 'Среднее специальное'];
export const Education = transformVariantToType(EducationVariant);

const FieldOfActivityVariant = [
    'Не имеет значения',
    'Не работаю',
    'Образование',
    'Здравохранение',
    'Наука',
    'Культура',
    'Торговля',
    'IT',
    'Собственный бизнес',
    'Транспорт',
    'Производство',
    'Высший менеджемент, управление',
    'Юриспруденция',
    'Административный персонал',
    'Архитектура и проектирование',
    'Банки, инвестиции, лизинг',
    'Бухучет и аудит',
    'Ветеринария',
    'Вооруженные силы',
    'Государственная служба',
    'Гостиничное дело',
    'Добыча сырья',
    'Органы власти и правопорядка',
    'Издательское дело',
    'Индустрия развлечений',
    'Консалтинг',
    'Маркетинг, PR',
    'Религиозные организации',
    'Сельское хозяйство',
    'Спорт',
    'Средства массовой информации',
    'Страхование',
    'Строительство, недвижимость',
    'Судебные органы',
    'HR, управление персоналом',
    'Студент',
];
export const FieldOfActivity = transformVariantToType(FieldOfActivityVariant);

const MaritalStatusVariant = ['Не имеет значения', 'В браке не состою', 'В разводе', 'Вдова/вдовец'];
export const MaritalStatus = transformVariantToType(MaritalStatusVariant);

const ChildrensVariant = [
    'Не имеет значения',
    'Детей нет',
    'Маленькие дети, живем вместе',
    'Маленькие дети, живем раздельно',
    'Взрослые дети, живем вместе',
    'Взрослые дети, живем раздельно',
];
export const Childrens = transformVariantToType(ChildrensVariant);

const ReligionVariant = ['Не имеет значения', 'Атеизм', 'Православие', 'Ислам', 'Католицизм', 'Буддизм', 'Протестанизм', 'Иудаизм'];
export const Religion = transformVariantToType(ReligionVariant);

const SmokeVariant = ['Не имеет значения', 'Не курю', 'Иногда курю'];
export const Smoke = transformVariantToType(SmokeVariant);

const AlcoholVariant = ['Не имеет значения', 'Не пью', 'Иногда пью'];
export const Alcohol = transformVariantToType(AlcoholVariant);

const ProfitVariant = ['Не имеет значения', 'До 30к.', 'До 50к.', 'До 100к.', 'До 200к.', 'До 500к.', 'Свыше 500к.'];
export const Profit = transformVariantToType(ProfitVariant);
