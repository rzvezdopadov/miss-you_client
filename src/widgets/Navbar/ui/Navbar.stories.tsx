import { type Meta, type StoryObj } from '@storybook/react';
import './../../../app/styles/index.scss';
import { Navbar } from './Navbar';
import { Theme } from '../../../shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator.tsx/ThemeDecorator';

const meta = {
    title: 'widgets/Navbar',
    component: Navbar,
    parameters: {
        layout: 'centered',
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [StoreDecorator],
} as Meta<typeof Navbar>;

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
