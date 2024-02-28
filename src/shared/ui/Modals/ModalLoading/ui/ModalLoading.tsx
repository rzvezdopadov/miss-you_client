import cls from './ModalLoading.module.scss';
import themes from '@/shared/themes/themes.module.scss';
import { classNames } from '@/shared/lib/className/className';
import { SpinerForModal } from '@/shared/ui/Spiners';
import { TitleBasic } from '@/shared/ui/Titles';

interface ModalLoadingProps {
    enabled: boolean;
}

export const ModalLoading = (props: ModalLoadingProps) => {
    return props.enabled ? (
        <div className={classNames(cls.wrapper, {}, [themes.bg_color])}>
            <SpinerForModal size="medium" animation={2} />
            <TitleBasic level={3}>Загрузка...</TitleBasic>
        </div>
    ) : (
        <></>
    );
};
