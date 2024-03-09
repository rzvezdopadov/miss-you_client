import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SkeletonBasic } from './SkeletonBasic';
import { Random } from '../../../../utils/Random';

describe('SkeletonBasic', () => {
    let element;
    const width = Random.getRandomInteger(100, 300);
    const height = Random.getRandomInteger(100, 300);
    const className = Random.getRandomString(10);

    beforeAll(() => {
        render(<SkeletonBasic width={width} height={height} rounded='full' className={className} />);

        element = screen.getByTestId('SkeletonBasic');
    });

    it('element has', () => {
        expect(element).toBeInTheDocument();
    });

    it('element has: size', () => {
        expect(element.style.width).toBe(`${width}px`);
        expect(element.style.height).toBe(`${height}px`);
    });

    it('element has: random class', () => {
        const classArr = element.className.split(' ');
        expect(classArr.includes(className)).toBe(true);
    });

    it('element has: rounded class', () => {
        const classArr = element.className.split(' ');
        expect(classArr.includes('full')).toBe(true);
    });
});
