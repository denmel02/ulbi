
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
    test('render', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toBeInTheDocument();
    });

    test('variant default', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });

    test('variant clear', () => {
        render(<Button variant="clear">Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('clear');
    });

    test('variant outlined', () => {
        render(<Button variant="outlined">Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('outlined');
    });

    test('variant background', () => {
        render(<Button variant="background">Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('background');
    });

    test('square', () => {
        render(<Button isSquare>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('square');
    });

    test('size default', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('sizeM');
    });

    test('sizeM', () => {
        render(<Button size="sizeM">Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('sizeM');
    });

    test('sizeL', () => {
        render(<Button size="sizeL">Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('sizeL');
    });

    test('sizeXL', () => {
        render(<Button size="sizeXL">Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('sizeXL');
    });

    test('color default', () => {
        render(<Button>Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('normal');
    });

    test('color normal', () => {
        render(<Button color="normal">Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('normal');
    });

    test('color inverted', () => {
        render(<Button color="inverted">Test</Button>);
        expect(screen.getByText('Test')).toHaveClass('inverted');
    });
});