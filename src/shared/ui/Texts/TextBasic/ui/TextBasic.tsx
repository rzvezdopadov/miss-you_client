import themes from '@/shared/themes/themes.module.scss';
import { classNames } from '@/shared/lib/className/className';
import { Typography } from 'antd';
import { TextProps } from 'antd/es/typography/Text';
import cls from './TextBasic.module.scss';

type TextSize = 's' | 'm' | 'l' | 'xl' | 'xl2' | 'xl3' | 'xl4' | 'xl5' | 'xl6';

interface TextBasicProps extends TextProps {
    textSize?: TextSize;
}

export const TextBasic = (props: TextBasicProps) => {
    const newProps = { ...props };
    newProps.className = classNames(newProps.className || '', {}, [cls[newProps.textSize || 's'], themes.text_color]);
    delete newProps.textSize; // React issued a warning if this is not done

    return <Typography.Text {...newProps}></Typography.Text>;
};
