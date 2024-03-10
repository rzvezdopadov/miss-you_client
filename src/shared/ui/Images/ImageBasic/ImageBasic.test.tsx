import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { ImageBasic } from './ImageBasic';
import { Random } from '../../../utils/Random';

const ElementId = `ImageBasic`;

describe(ElementId, () => {
    let element;
    const width = Random.getRandomInteger(100, 300);
    const height = Random.getRandomInteger(100, 300);

    it('element has', () => {
        render(<ImageBasic />);
        element = screen.getByTestId(ElementId);

        expect(element).toBeInTheDocument();
    });

    it('element has: size', () => {
        render(<ImageBasic width={width} height={height} />);
        element = screen.getByTestId(ElementId);

        expect(element.style.width).toBe(`${width}px`);
        expect(element.style.height).toBe(`${height}px`);
    });
});
