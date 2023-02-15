import { Navbar, PageError, PageSpinner, Sidebar } from 'widgets';
import { classNames, useTheme } from 'shared';
import './styles/index.scss';
import { AppRouter } from './router';
import { Suspense } from 'react';
import { ErrorBoundary } from './ui';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={ classNames('app', theme) }>
            <Suspense fallback={ <PageSpinner className="loader" /> }>
                <ErrorBoundary error={ <PageError className="error"/> }>
                    <Navbar />
                    <div className='page-content'>
                        <Sidebar />
                        <div className='page-wrapper'>
                            <AppRouter />
                        </div>
                    </div>
                </ErrorBoundary>
            </Suspense>
        </div>
    );
};