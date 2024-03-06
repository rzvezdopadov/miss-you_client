import { Card, CardProps } from 'antd';
import themes from '@/shared/themes/themes.module.scss';
import { classNames } from '@/shared/lib/className/className';

interface CardBasicProps extends CardProps {}

export const CardBasic = (props: CardBasicProps) => {
    const newProps = { ...props };
    newProps.className = classNames(newProps.className || '', {}, [themes.bg_color_accent]);

    return <Card {...newProps}></Card>;
};
