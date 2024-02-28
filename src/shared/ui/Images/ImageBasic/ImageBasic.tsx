import { classNames } from '@/shared/lib/className/className';
import { Image } from 'antd';
import { ImageProps } from 'antd/es/image';
import cls from './ImageBasic.module.scss';

type rounded = 'not' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | 'full';

interface ImageBasicProps extends ImageProps {
    rounded?: rounded;
}

export const ImageBasic = (props: ImageBasicProps) => {
    const newProps = { ...props };
    // eslint-disable-next-line
    newProps.className = classNames(newProps.className || '', {}, [cls[newProps.rounded || 'not']]);

    return <Image {...newProps}></Image>;
};
