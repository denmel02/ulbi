
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
});