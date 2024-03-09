import type { Meta, StoryObj } from '@storybook/react';
import './../../../../../app/styles/index.scss';
import { ModalLoading } from './ModalLoading';
import { Theme } from '../../../../const/theme';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator.tsx/ThemeDecorator';

const meta = {
    title: 'shared/Modals/ModalLoading',
    component: ModalLoading,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} as Meta<typeof ModalLoading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Light_Theme: Story = {
    args: { enabled: true },
};

export const Dark_Theme: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: { enabled: true },
};
