'use client';
import { classNames } from '@/shared/lib/className/className';
import themes from '@/shared/themes/themes.module.scss';
import { Modal, ModalProps } from 'antd';

interface ModalBasicProps extends ModalProps {}

export const ModalBasic = (props: ModalBasicProps) => {
    const newProps = { ...props };
    newProps.classNames = { content: classNames(newProps.classNames?.content || '', {}, [themes.bg_color_accent, themes.text_color]) };

    return <Modal {...newProps}></Modal>;
};
