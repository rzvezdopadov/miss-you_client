import type { Meta, StoryObj } from '@storybook/react';
import './../../../../../app/styles/index.scss';
import { SkeletonBasic } from './SkeletonBasic';
import { Theme } from '../../../../const/theme';

const meta = {
    title: 'shared/Skeletons/SkeletonBasic',
    component: SkeletonBasic,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} as Meta<typeof SkeletonBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: { width: 200, height: 100 },
};

export const Circle: Story = {
    args: { size: 100, rounded: 'full' },
};

export const Normal_Dark: Story = {
    args: { width: 200, height: 100, className: Theme.DARK },
};

export const Circle_Dark: Story = {
    args: { height: 100, width: 100, rounded: 'full', className: Theme.DARK },
};
