import type { Meta, StoryObj } from '@storybook/react';
import './../../../../../app/styles/index.scss';
import { SpinerForModal } from './SpinerForModal';

const meta = {
    title: 'shared/Spiners/SpinerForModal',
    component: SpinerForModal,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'black',
            values: [
                {
                    name: 'black',
                    value: '#000',
                },
            ],
        },
    },
    tags: ['autodocs'],
    argTypes: {},
} as Meta<typeof SpinerForModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Normal: Story = {
    args: {},
};

export const Animation1_Small: Story = {
    args: { animation: 1, size: 'small' },
};

export const Animation2_Medium: Story = {
    args: { animation: 2, size: 'medium' },
};

export const Animation3_Large: Story = {
    args: { animation: 3, size: 'large' },
};
