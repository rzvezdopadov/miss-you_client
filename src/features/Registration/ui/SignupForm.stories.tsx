import { type Meta, type StoryObj } from '@storybook/react';
import './../../../app/styles/index.scss';
import { SignupForm } from './SignupForm';
import { Theme } from '../../../shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator.tsx/ThemeDecorator';

const meta = {
    title: 'features/SignupForm',
    component: SignupForm,
    parameters: {
        layout: 'centered',
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [StoreDecorator],
} as Meta<typeof SignupForm>;

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
