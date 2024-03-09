import { type Meta, type StoryObj } from '@storybook/react';
import './../../../../../app/styles/index.scss';
import { TitleBasic } from './TitleBasic';
import { Theme } from '../../../../const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator.tsx/ThemeDecorator';

const meta = {
    title: 'shared/Titles/TitleBasic',
    component: TitleBasic,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [],
} as Meta<typeof TitleBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light_Theme: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: { children: 'Hello my dear friend', level: 3 },
};

export const Dark_Theme: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: { children: 'Hello my dear friend', level: 1, className: Theme.DARK },
};
