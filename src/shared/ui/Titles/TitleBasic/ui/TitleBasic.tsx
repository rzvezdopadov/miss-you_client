import Title, { TitleProps } from 'antd/es/typography/Title';
import themes from '@/shared/themes/themes.module.scss';
import { classNames } from '@/shared/lib/className/className';

export const TitleBasic = (props: TitleProps) => {
    const newProps = { ...props };
    newProps.className = classNames(newProps.className ? newProps.className : '', {}, [themes.text_color]);

    return <Title {...newProps}></Title>;
};
