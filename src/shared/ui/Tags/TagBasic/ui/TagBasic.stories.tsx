import { type Meta, type StoryObj } from '@storybook/react';
import './../../../../../app/styles/index.scss';
import { TagBasic } from './TagBasic';
import { Theme } from '../../../../const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator.tsx/ThemeDecorator';

const meta = {
    title: 'shared/Tags/TagBasic',
    component: TagBasic,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
    decorators: [],
} as Meta<typeof TagBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light_Theme: Story = {
    decorators: [ThemeDecorator(Theme.LIGHT)],
    args: { children: 'Hello my dear friend' },
};

export const Dark_Theme: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: { children: 'Hello my dear friend', className: Theme.DARK },
};
