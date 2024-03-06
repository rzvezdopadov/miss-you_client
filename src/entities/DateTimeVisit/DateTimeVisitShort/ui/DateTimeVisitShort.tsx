import { ProfileShort } from '@/features/ProfileCardsGet';
import { getRoundColorUserLate } from '../../utils/roundColor';
import { classNames } from '@/shared/lib/className/className';
import cls from './../../style/DateTimeVisit.module.scss';
import { TextBasic } from '@/shared/ui/Texts';

export function DateTimeVisitShort(profile: ProfileShort) {
    const date = new Date(Number(profile.timecode));
    const dateNow = new Date();
    const timecodeNow = dateNow.getTime();
    const timecodeSub = timecodeNow - profile.timecode;
    const colorRound = getRoundColorUserLate(timecodeSub);

    let dateStr = '';

    if (timecodeSub < 1 * 60 * 1000) {
        dateStr += 'Онлайн';
    } else {
        dateStr += profile.gender ? 'Была ' : 'Был ';

        if (timecodeSub < 24 * 60 * 60 * 1000) {
            dateStr += 'в ' + date.toLocaleTimeString().slice(0, -3);
        } else {
            dateStr += date.toLocaleDateString();
        }
    }

    return (
        <div className={cls.wrapper}>
            <span className={classNames(cls.round, {}, [colorRound])}></span>
            <TextBasic strong={true} textSize="m">
                {dateStr}
            </TextBasic>
        </div>
    );
}
