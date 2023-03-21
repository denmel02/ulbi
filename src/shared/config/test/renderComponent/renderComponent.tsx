import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import { MemoryRouter } from 'react-router-dom';
import '../../i18nForTest';

interface RenderComponentOptions {
    path?: string;
}

export const renderComponent = (component: ReactElement, options: RenderComponentOptions = {}) => {
    const { path = '/' } = options;

    return render(
        <MemoryRouter initialEntries={ [path] }>
            {component}
        </MemoryRouter>
    );
};