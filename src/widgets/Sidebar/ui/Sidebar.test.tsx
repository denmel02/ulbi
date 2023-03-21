
import { fireEvent, screen } from '@testing-library/react';
import { renderComponent } from 'shared/config/test';
import { Sidebar } from './Sidebar';

describe('Sidebar', () => {
    test('render', () => {
        renderComponent(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    });

    test('toggle', () => {
        renderComponent(<Sidebar/>);

        const sidebar = screen.getByTestId('sidebar');
        const toggleButton = screen.getByTestId('sidebar-toggle');

        expect(sidebar).toBeInTheDocument();
        expect(sidebar).not.toHaveClass('collapsed');

        fireEvent.click(toggleButton);

        expect(sidebar).toHaveClass('collapsed');
    });
});