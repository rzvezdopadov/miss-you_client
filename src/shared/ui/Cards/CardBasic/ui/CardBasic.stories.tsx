import type { Meta, StoryObj } from '@storybook/react';
import './../../../../../app/styles/index.scss';
import { CardBasic } from './CardBasic';
import { Theme } from '../../../../const/theme';
import React from 'react';
import { Button, Input } from 'antd';
import { TitleBasic } from '@/shared/ui/Titles';

const meta = {
    title: 'shared/Cards/CardBasic',
    component: CardBasic,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} as Meta<typeof CardBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

const mockChildren = (
    <>
        <TitleBasic level={3} title="Вход">
            Вход
        </TitleBasic>

        <Input autoFocus={true} placeholder="Введите Email" />

        <Input type="password" placeholder="Введите пароль" value={'password'} />

        <Button type="primary" shape="round">
            Войти
        </Button>
    </>
);

export const Light_Theme: Story = {
    args: { children: mockChildren },
};

export const Dark_Theme: Story = {
    args: { children: mockChildren, className: Theme.DARK },
};
