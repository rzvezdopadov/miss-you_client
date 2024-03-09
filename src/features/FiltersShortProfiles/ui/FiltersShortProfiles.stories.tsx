import { type Meta, type StoryObj } from '@storybook/react';
import './../../../app/styles/index.scss';
import { FiltersShortProfiles } from './FiltersShortProfiles';
import { Theme } from '../../../shared/const/theme';
import { StoreDecorator } from '@/shared/config/storybook/StoreDecorator/StoreDecorator';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator.tsx/ThemeDecorator';

const meta = {
    title: 'features/FiltersShortProfiles',
    component: FiltersShortProfiles,
    parameters: {
        layout: 'centered',
        nextjs: {
            appDirectory: true,
        },
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [StoreDecorator],
} as Meta<typeof FiltersShortProfiles>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: {},
};
