
import { fireEvent, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/config/test';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('render', () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', () => {
        renderWithTranslation(<Sidebar/>);

        const sidebar = screen.getByTestId('sidebar');
        const toggleButton = screen.getByTestId('sidebar-toggle');

        expect(sidebar).toBeInTheDocument();
        expect(sidebar).not.toHaveClass('collapsed');

        fireEvent.click(toggleButton);

        expect(sidebar).toHaveClass('collapsed');
    });
});