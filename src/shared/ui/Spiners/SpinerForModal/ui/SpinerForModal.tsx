import cls from './SpinerForModal.module.scss';
import { classNames } from '@/shared/lib/className/className';

type Animation = 1 | 2 | 3;
type Size = 'small' | 'medium' | 'large';

interface SpinerBasicProps {
    size?: Size;
    animation?: Animation;
}

export const SpinerForModal = (props: SpinerBasicProps) => {
    const newProps = { ...props };
    const animation = `animation${props.animation || 1}`;
    newProps.size = newProps.size || 'small';
    const aditionalCls = [cls.obj, cls[animation], cls[newProps.size]];

    return (
        <div className={classNames(cls.wrapper, {}, [cls[animation], cls[newProps.size]])}>
            <div className={classNames(cls.obj1, {}, aditionalCls)}></div>
            <div className={classNames(cls.obj2, {}, aditionalCls)}></div>
            <div className={classNames(cls.obj3, {}, aditionalCls)}></div>
            <div className={classNames(cls.obj4, {}, aditionalCls)}></div>
        </div>
    );
};
