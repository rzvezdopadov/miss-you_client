import themes from '@/shared/themes/themes.module.scss';
import { classNames } from '@/shared/lib/className/className';
import { Tag, TagProps } from 'antd';

export const TagBasic = (props: TagProps) => {
    const newProps = { ...props };
    newProps.className = classNames(newProps.className || '', {}, [themes.text_color, themes.bg_color]);

    return <Tag {...newProps}></Tag>;
};
