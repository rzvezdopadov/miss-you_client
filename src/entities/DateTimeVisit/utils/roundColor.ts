import cls from './../style/DateTimeVisit.module.scss';

export const getRoundColorUserLate = (timecodeSub: number): string => {
    let roundColor = cls.roundColor9;
    const timecodeDay = (day: number): number => 24 * 60 * 60 * 1000 * day;

    if (timecodeSub < timecodeDay(1)) {
        roundColor = cls.roundColor1;
    } else if (timecodeSub < timecodeDay(3)) {
        roundColor = cls.roundColor2;
    } else if (timecodeSub < timecodeDay(6)) {
        roundColor = cls.roundColor3;
    } else if (timecodeSub < timecodeDay(9)) {
        roundColor = cls.roundColor4;
    } else if (timecodeSub < timecodeDay(12)) {
        roundColor = cls.roundColor5;
    } else if (timecodeSub < timecodeDay(15)) {
        roundColor = cls.roundColor6;
    } else if (timecodeSub < timecodeDay(18)) {
        roundColor = cls.roundColor7;
    } else if (timecodeSub < timecodeDay(21)) {
        roundColor = cls.roundColor8;
    }

    return roundColor;
};
