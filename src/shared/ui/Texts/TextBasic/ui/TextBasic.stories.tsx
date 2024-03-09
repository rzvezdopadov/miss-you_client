import { type Meta, type StoryObj } from '@storybook/react';
import './../../../../../app/styles/index.scss';
import { TextBasic } from './TextBasic';
import { Theme } from '../../../../const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator.tsx/ThemeDecorator';

const meta = {
    title: 'shared/Texts/TextBasic',
    component: TextBasic,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [],
} as Meta<typeof TextBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light_Theme: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: { textSize: 'xl3', children: 'Hello my dear friend' },
};

export const Dark_Theme: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: { children: 'Hello my dear friend', textSize: 'xl3', className: Theme.DARK },
};
