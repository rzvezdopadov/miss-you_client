import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { SkeletonBasic } from './SkeletonBasic';
import { Random } from '../../../../utils/Random';

const ElementId = `SkeletonBasic`;

describe(ElementId, () => {
    let element;
    const width = Random.getRandomInteger(100, 300);
    const height = Random.getRandomInteger(100, 300);
    const className = Random.getRandomString(10);

    it('element has', () => {
        render(<SkeletonBasic />);
        element = screen.getByTestId(ElementId);

        expect(element).toBeInTheDocument();
    });

    it('element has: size', () => {
        render(<SkeletonBasic width={width} height={height} />);
        element = screen.getByTestId(ElementId);

        expect(element.style.width).toBe(`${width}px`);
        expect(element.style.height).toBe(`${height}px`);
    });

    it('element has: random class', () => {
        render(<SkeletonBasic className={className} />);
        element = screen.getByTestId(ElementId);

        const classArr = element.className.split(' ');
        expect(classArr.includes(className)).toBe(true);
    });

    it('element has: rounded class', () => {
        const testClass = `full`;
        render(<SkeletonBasic rounded={testClass}/>);
        element = screen.getByTestId(ElementId);

        const classArr = element.className.split(' ');
        expect(classArr.includes(testClass)).toBe(true);
    });
});
