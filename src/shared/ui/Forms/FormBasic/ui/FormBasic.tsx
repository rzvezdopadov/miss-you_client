import { Form, FormInstance, FormProps } from 'antd';
import { ReactNode, RefAttributes } from 'react';
import { classNames } from '@/shared/lib/className/className';
import themes from '@/shared/themes/themes.module.scss';
import cls from './FormBasic.module.scss';

// eslint-disable-next-line
export const FormBasic = (props: FormProps<any> & { children?: ReactNode } & RefAttributes<FormInstance<any>>) => {
    const newProps = { ...props };
    newProps.className = classNames(newProps.className ? newProps.className : '', {}, [cls.form, themes.bg_color]);

    return <Form {...newProps}></Form>;
};
