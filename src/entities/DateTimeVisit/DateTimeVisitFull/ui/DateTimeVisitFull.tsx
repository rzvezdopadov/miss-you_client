import { getRoundColorUserLate } from '../../utils/roundColor';
import { classNames } from '@/shared/lib/className/className';
import cls from './../../style/DateTimeVisit.module.scss';
import { TextBasic } from '@/shared/ui/Texts';
import { Profile } from '@/features/ProfileGet';

export function DateTimeVisitFull(profile: Profile) {
    const date = new Date(Number(profile.timecode));
    const dateNow = new Date();
    const timecodeNow = dateNow.getTime();
    const timecodeSub = timecodeNow - (profile.timecode || timecodeNow);
    const colorRound = getRoundColorUserLate(timecodeSub);

    let dateStr = '';

    if (timecodeSub < 1 * 60 * 1000) {
        dateStr += 'Онлайн';
    } else {
        dateStr += profile.gender ? 'Была ' : 'Был ';

        dateStr += `${date.toLocaleDateString()} в ${date.toLocaleTimeString().slice(0, -3)}`;
    }

    return (
        <div className={cls.wrapper}>
            <span className={classNames(cls.round, {}, [colorRound])}></span>
            <TextBasic textSize="m">{dateStr}</TextBasic>
        </div>
    );
}
