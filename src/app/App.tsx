import { Navbar, Sidebar } from 'widgets';
import { classNames, useTheme } from 'shared';
import './styles/index.scss';
import { AppRouter } from './router';
import { Suspense } from 'react';

export const App = () => {
    const { theme } = useTheme();

    return (
        <div className={ classNames('app', theme) }>
            <Suspense fallback="">
                <Navbar />
                <div className='page-content'>
                    <Sidebar />
                    <div className='page-wrapper'>
                        <AppRouter />
                    </div>
                </div>
            </Suspense>
        </div>
    );
};