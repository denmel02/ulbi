import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { PageSpinner } from 'widgets';
import { RouteConfig } from '../model';

export const AppRouter = () => {
    return (
        <Suspense fallback={ <PageSpinner /> }>
            <Routes>
                { Object.values(RouteConfig).map((routeProps) => (
                    <Route key={ routeProps.path } {...routeProps} />
                ))}
            </Routes>
        </Suspense>
    );
};