import { CSSProperties } from 'react';
import cls from './SkeletonBasic.module.scss';
import { classNames } from '@/shared/lib/className/className';
import React from 'react';

type rounded = 'not' | 's' | 'm' | 'l' | 'xl' | 'xl2' | 'xl3' | 'xl4' | 'xl5' | 'xl6' | 'full';

interface SkeletonBasicProps {
    className?: string;
    size?: string | number;
    height?: string | number;
    width?: string | number;
    rounded?: rounded;
    style?: CSSProperties;
}

export const SkeletonBasic = (props: SkeletonBasicProps) => {
    const newProps = { ...props };

    if (newProps.size) {
        newProps.height = newProps.size;
        newProps.width = newProps.size;
    }

    return (
        <div
            data-testid="SkeletonBasic"
            className={classNames(cls.Skeleton, {}, [newProps.className, cls[newProps.rounded || 'not']])}
            style={{ height: newProps.height, width: newProps.width, ...props.style }}
        ></div>
    );
};
