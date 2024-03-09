import { type Meta, type StoryObj } from '@storybook/react';
import './../../../app/styles/index.scss';
import { LoginForm } from './LoginForm';
import { Theme } from '../../../shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator.tsx/ThemeDecorator';

const meta = {
    title: 'features/LoginForm',
    component: LoginForm,
    parameters: {
        layout: 'centered',
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [StoreDecorator],
} as Meta<typeof LoginForm>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light_Theme: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {},
};

export const Dark_Theme: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: { className: Theme.DARK },
};
