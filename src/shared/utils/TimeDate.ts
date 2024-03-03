export enum TIMECODE {
    MINUTE = 60 * 1000,
    HOUR = TIMECODE.MINUTE * 60,
    DAY = TIMECODE.HOUR * 24,
    WEEK = TIMECODE.DAY * 7,
    MONTH = TIMECODE.DAY * 30,
    YEAR = TIMECODE.DAY * 365,
}

export const TimeDate = {
    getTimecodeNow() {
        const dateNow = new Date();
        const timecodeNow = dateNow.getTime();
        return timecodeNow;
    },
    getYearFromAge(age: number): number {
        const date = new Date();
        const yearNow = date.getFullYear();
        return yearNow - age;
    },
    getTimedateNow(): string {
        const dateNow = new Date();
        const timecodeNow = `${dateNow.toLocaleDateString()} ${dateNow.toLocaleTimeString()}`;
        return timecodeNow;
    },
    getTimeDateFromTimeCode(timecode: number) {
        const date = new Date(Number(timecode));

        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    },
    getDateStringFromParams(day: number, month: number, year: number) {
        return '' + year + '-' + (month < 10 ? '0' + month : month) + '-' + (day < 10 ? '0' + day : day);
    },
};