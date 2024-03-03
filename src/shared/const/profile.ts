interface IType {
    value: string | number;
    label: string;
}

export const Gender: IType[] = [
    {
        value: 0,
        label: 'Мужчина',
    },
    {
        value: 1,
        label: 'Женщина',
    },
];

export const GenderVapor: IType[] = [
    {
        value: 0,
        label: 'Мужчин',
    },
    {
        value: 1,
        label: 'Женщин',
    },
    {
        value: 2,
        label: 'Друзей',
    },
];
