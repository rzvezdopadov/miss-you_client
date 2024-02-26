import themes from '@/shared/themes/themes.module.scss';
import { classNames } from '@/shared/lib/className/className';
import FormItem, { FormItemProps } from 'antd/es/form/FormItem';

export const FormItemBasic = (props: FormItemProps) => {
    const newProps = { ...props };
    newProps.label = <span className={classNames('', {}, [themes.text_color])}>{newProps.label}</span>;

    return <FormItem {...newProps}></FormItem>;
};
