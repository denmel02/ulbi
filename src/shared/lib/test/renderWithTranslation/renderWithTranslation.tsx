import { render } from '@testing-library/react';
import { ReactElement } from 'react';
import '../../../config/i18nForTest';

export const renderWithTranslation = (component: ReactElement) => {
    return render(component);
};