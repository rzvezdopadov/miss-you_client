import type { Meta, StoryObj } from '@storybook/react';
import './../../../../../app/styles/index.scss';
import { FormBasic } from './FormBasic';
import { Theme } from '../../../../const/theme';
import React from 'react';
import { Button, Input } from 'antd';
import { TitleBasic } from '@/shared/ui/Titles';
import { FormItemBasic } from '../../FormItemBasic/ui/FormItemBasic';

const meta = {
    title: 'shared/Forms/FormBasic',
    component: FormBasic,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} as Meta<typeof FormBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockChildren = (
    <>
        <TitleBasic level={3} title="Вход">
            Вход
        </TitleBasic>
        <FormItemBasic name="email" label="Email">
            <Input autoFocus={true} placeholder="Введите Email" />
        </FormItemBasic>
        <FormItemBasic name="password" label="Пароль">
            <Input type="password" placeholder="Введите пароль" value={'password'} />
        </FormItemBasic>
        <FormItemBasic>
            <Button type="primary" shape="round">
                Войти
            </Button>
        </FormItemBasic>
    </>
);

export const Light_Theme: Story = {
    args: { children: mockChildren },
};

export const Dark_Theme: Story = {
    args: { children: mockChildren, className: Theme.DARK },
};
