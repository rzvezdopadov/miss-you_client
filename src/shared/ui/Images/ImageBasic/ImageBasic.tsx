import { classNames } from '@/shared/lib/className/className';
import { Image } from 'antd';
import { ImageProps } from 'antd/es/image';
import cls from './ImageBasic.module.scss';

type rounded = 'not' | 's' | 'm' | 'l' | 'xl' | 'xl2' | 'xl3' | 'xl4' | 'xl5' | 'xl6' | 'full';

interface ImageBasicProps extends ImageProps {
    rounded?: rounded;
}

export const ImageBasic = (props: ImageBasicProps) => {
    const newProps = { ...props };
    newProps.className = classNames(newProps.className || '', {}, [cls[newProps.rounded || 'not']]);
    // eslint-disable-next-line jsx-a11y/alt-text
    return <Image data-testid="ImageBasic" {...newProps}></Image>;
};
