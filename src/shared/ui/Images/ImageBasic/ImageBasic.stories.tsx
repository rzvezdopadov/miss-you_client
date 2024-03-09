import type { Meta, StoryObj } from '@storybook/react';
import './../../../../app/styles/index.scss';
import { ImageBasic } from './ImageBasic';
import pictire from './../../../../../public/photos/miss-you.jpg';

const meta = {
    title: 'shared/Images/ImageBasic',
    component: ImageBasic,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {},
} as Meta<typeof ImageBasic>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: { src: pictire.src, width: 200, height: 100 },
};

export const Normal_Round_XL: Story = {
    args: { src: pictire.src, width: 200, height: 200, rounded: 'xl' },
};

export const Circle: Story = {
    args: { src: pictire.src, width: 200, height: 200, rounded: 'full' },
};
